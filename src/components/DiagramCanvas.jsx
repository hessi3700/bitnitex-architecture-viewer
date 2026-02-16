import React, { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import { useAppStore } from '../store/AppStore'
import { useTodoStore } from '../store/TodoStore'
// Removed hardcoded diagram registry - all diagrams must come from database
import { getNodeDetails } from '../data/nodeDetails'
import { enhanceDiagramWithStatus } from '../utils/diagramHelper'
import { API_ENDPOINTS } from '../config/api'

// Convert saved nodes/edges to Mermaid code, merging with original structure
const convertNodesEdgesToMermaid = (nodes, edges, originalCode = '') => {
  if (!nodes || nodes.length === 0) return originalCode
  
  // Start with original code structure if available
  let mermaid = originalCode || 'graph TB\n'
  
  // Extract existing node IDs from original to avoid duplicates
  const existingNodeIds = new Set()
  if (originalCode) {
    const nodeRegex = /(\w+)\[["']?[^"'\]]+["']?\]/g
    let match
    while ((match = nodeRegex.exec(originalCode)) !== null) {
      existingNodeIds.add(match[1])
    }
  }
  
  // Add new nodes that don't exist in original
  const addedNodes = []
  nodes.forEach(node => {
    const nodeId = node.id.replace(/[^a-zA-Z0-9]/g, '_')
    if (!existingNodeIds.has(nodeId)) {
      const label = (node.label || nodeId).replace(/"/g, '&quot;').replace(/\n/g, '<br/>')
      addedNodes.push({ id: nodeId, label })
    }
  })
  
  // Add new nodes to the diagram
  if (addedNodes.length > 0) {
    addedNodes.forEach(node => {
      mermaid += `  ${node.id}["${node.label}"]\n`
    })
  }
  
  // Add edges (only new ones, check if they already exist)
  if (edges && edges.length > 0) {
    const existingEdges = new Set()
    if (originalCode) {
      const edgeRegex = /(\w+)\s*-->\s*(\w+)/g
      let match
      while ((match = edgeRegex.exec(originalCode)) !== null) {
        existingEdges.add(`${match[1]}-->${match[2]}`)
      }
    }
    
    edges.forEach(edge => {
      const sourceId = edge.source.replace(/[^a-zA-Z0-9]/g, '_')
      const targetId = edge.target.replace(/[^a-zA-Z0-9]/g, '_')
      const edgeKey = `${sourceId}-->${targetId}`
      if (!existingEdges.has(edgeKey)) {
        mermaid += `  ${sourceId} --> ${targetId}\n`
      }
    })
  }
  
  return mermaid
}

// Initialize mermaid
mermaid.initialize({ 
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis',
    padding: 20, // Reduced from 40
    nodeSpacing: 50, // Reduced from 100 - closer nodes
    rankSpacing: 80, // Reduced from 150 - closer ranks
    diagramPadding: 20 // Reduced from 30
  },
  themeVariables: {
    primaryColor: '#1e3a5f',
    primaryTextColor: '#e1e8f0',
    primaryBorderColor: '#60a5fa',
    lineColor: '#60a5fa',
    secondaryColor: '#151b26',
    tertiaryColor: '#0f1419',
    background: '#0f1419',
    mainBkg: '#0f1419',
    secondBkg: '#151b26',
    textColor: '#e1e8f0',
    border1: '#1c2433',
    border2: '#2a3441',
    fontSize: '18px',
    fontFamily: 'Outfit, Inter, system-ui, sans-serif',
    nodeBorder: '#60a5fa',
    clusterBkg: '#0f1419',
    clusterBorder: '#2a3441',
    edgeLabelBackground: '#0f1419',
    nodeTextSize: '18px'
  }
})

const DiagramCanvas = () => {
  const { currentView, zoomLevel, setZoomLevel, setSelectedNode, navigateToView, showApiTester, isEditMode, setIsEditMode } = useAppStore()
  const { tasks, setShowTodoPanel, setSelectedTask, getOrCreateTask, mapNodeToLevel, nodeMappings } = useTodoStore()
  const containerRef = useRef(null)
  const viewportRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 })
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 })
  const [panStart, setPanStart] = useState({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 })
  const [isLegendOpen, setIsLegendOpen] = useState(() => {
    // Load saved state from localStorage
    const saved = localStorage.getItem('diagramLegendOpen')
    return saved ? JSON.parse(saved) : false
  })

  // Save legend state to localStorage when it changes
  const toggleLegend = () => {
    const newState = !isLegendOpen
    setIsLegendOpen(newState)
    localStorage.setItem('diagramLegendOpen', JSON.stringify(newState))
  }

  const [currentDiagram, setCurrentDiagram] = useState(null)
  const [savedDiagram, setSavedDiagram] = useState(null)
  
  // Edit mode state
  const [editingNode, setEditingNode] = useState(null) // Node being dragged
  const [isConnecting, setIsConnecting] = useState(false) // Edge connection mode
  const [isMoving, setIsMoving] = useState(false) // Move/drag mode
  const [connectionStart, setConnectionStart] = useState(null) // Start node for edge
  const [showAddNodeDialog, setShowAddNodeDialog] = useState(false)
  const [showColorPicker, setShowColorPicker] = useState(null) // Node ID for color picker
  const [newNodeData, setNewNodeData] = useState({ label: '', type: 'default', color: '#60a5fa' })

  // Load diagram - PRIMARY: Database, FALLBACK: Registry
  useEffect(() => {
    const loadDiagram = async () => {
      setIsLoading(true)
      setCurrentDiagram(null)
      setSavedDiagram(null)
      
      try {
        // PRIMARY: Load from database
        const { loadDiagramFromBackend, loadNodesFromBackend, loadEdgesFromBackend } = await import('../utils/diagramBackend')
        const dbDiagram = await loadDiagramFromBackend(currentView)
        
        if (dbDiagram && dbDiagram.code) {
          console.log('✅ Loaded diagram from database:', currentView)
          
          // Load nodes with positions from database
          let nodeEntities = []
          try {
            nodeEntities = await loadNodesFromBackend(dbDiagram.dbId || currentView)
            console.log(`✅ Loaded ${nodeEntities.length} nodes with positions from database`)
          } catch (error) {
            console.warn('Could not load nodes from database:', error)
          }
          
          // Load edges from database
          let edges = []
          try {
            edges = await loadEdgesFromBackend(currentView)
            console.log(`✅ Loaded ${edges.length} edges from database`)
          } catch (error) {
            console.warn('Could not load edges from database:', error)
            edges = dbDiagram.edges || []
          }
          
          // Set diagram with nodes and edges from database
          setCurrentDiagram({
            ...dbDiagram,
            nodes: nodeEntities,
            edges: edges
          })
          
          setSavedDiagram({
            ...dbDiagram,
            nodes: nodeEntities,
            edges: edges,
            nodeEntities: nodeEntities
          })
        } else {
          // NO FALLBACK: Diagram must be in database
          console.error('❌ Diagram not found in database:', currentView)
          console.error('   Backend must be connected and diagram must be seeded to database')
          setIsLoading(false)
          setCurrentDiagram(null)
          setSavedDiagram(null)
          return
        }
      } catch (error) {
        console.error('❌ Error loading diagram from database:', error)
        console.error('   Backend must be connected and running')
        // NO FALLBACK: Show error state
        setCurrentDiagram(null)
        setSavedDiagram(null)
      } finally {
        setIsLoading(false)
      }
    }
    loadDiagram()
    
    // Listen for diagram save events
    const handleDiagramSaved = () => {
      console.log('💾 Diagram saved event received, reloading...')
      loadDiagram()
    }
    window.addEventListener('diagram-saved', handleDiagramSaved)
    
    return () => {
      window.removeEventListener('diagram-saved', handleDiagramSaved)
    }
  }, [currentView])

  // Non-passive wheel listener so preventDefault stops page/sidebar scroll; zoom only
  const zoomRef = useRef({ zoomLevel, setZoomLevel })
  zoomRef.current = { zoomLevel, setZoomLevel }
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const onWheel = (e) => {
      e.preventDefault()
      e.stopPropagation()
      document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
      const delta = e.deltaY > 0 ? -0.1 : 0.1
      zoomRef.current.setZoomLevel(prev => Math.max(0.3, Math.min(3, prev + delta)))
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  // Auto-save diagram and extract nodes
  const autoSaveDiagram = async (diagramId) => {
    try {
      const { saveDiagramToBackend, extractNodesFromMermaid, saveNodesToBackend, loadDiagramFromBackend } = await import('../utils/diagramBackend')
      
      // Load diagram from DB only - no fallback
      const diagram = await loadDiagramFromBackend(diagramId)
      
      if (!diagram) {
        console.error('❌ Diagram not found in database:', diagramId)
        console.error('   Cannot auto-save: diagram must exist in database first')
        return
      }
      
      if (!diagram || !diagram.code) return
      
      // Save diagram
      const savedDiagram = await saveDiagramToBackend(diagramId, {
        title: diagram.title,
        description: diagram.description || diagram.subtitle || '',
        code: diagram.code,
        mermaidCode: diagram.code
      })
      
      // Extract and save nodes and edges
      const nodes = await extractNodesFromMermaid(diagram.code || '', savedDiagram.id)
      const edges = extractEdgesFromMermaid(diagram.code || '')
      
      if (nodes.length > 0) {
        await saveNodesToBackend(savedDiagram.id, nodes)
        console.log(`✅ Auto-saved ${nodes.length} nodes for diagram: ${diagramId}`)
      }
      
      // Save edges in diagram
      if (edges.length > 0) {
        await saveDiagramToBackend(diagramId, {
          title: diagram.title,
          description: diagram.description || diagram.subtitle || '',
          code: diagram.code,
          mermaidCode: diagram.code,
          edges: edges
        })
        console.log(`✅ Auto-saved ${edges.length} edges for diagram: ${diagramId}`)
      }
    } catch (error) {
      console.error('Failed to auto-save diagram:', error)
    }
  }

  // Track last rendered code to prevent unnecessary re-renders
  const lastRenderedCodeRef = useRef('')
  const lastViewRef = useRef('')
  
  useEffect(() => {
    // Only re-render if diagram data actually changed, not on edit mode toggle
    const currentCode = currentDiagram?.code || ''
    const viewChanged = currentView !== lastViewRef.current
    const codeChanged = currentCode !== lastRenderedCodeRef.current
    
    if (currentDiagram && (codeChanged || viewChanged)) {
      lastRenderedCodeRef.current = currentCode
      lastViewRef.current = currentView
      renderDiagram()
    }
    
    // Cleanup function
    return () => {
      // Remove all tooltips when component unmounts or re-renders
      document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
    }
  }, [currentView, currentDiagram?.code]) // Only depend on code/view changes, not edit mode state
  
  // Cleanup edit mode state when toggled off
  useEffect(() => {
    // Update global edit mode state for hashchange handler to access
    window.__isEditMode = isEditMode
    
    if (!isEditMode) {
      setIsConnecting(false)
      setIsMoving(false)
      setConnectionStart(null)
      setEditingNode(null)
      setShowColorPicker(null)
      setIsDragging(false)
    }
  }, [isEditMode])

  // Function to apply node positions from database
  // Uses absolute SVG coordinates (from getBBox) to handle clusters correctly
  const applyNodePositionsFromDatabase = (svgEl, nodeEntities) => {
    if (!nodeEntities || nodeEntities.length === 0) return
    if (!svgEl) {
      console.warn('⚠️ No SVG element provided for position application')
      return
    }
    
    console.log(`📍 Applying positions for ${nodeEntities.length} nodes from database`)
    
    let appliedCount = 0
    
    nodeEntities.forEach(nodeEntity => {
      if (!nodeEntity.position || !nodeEntity.nodeId) return
      if (nodeEntity.position.x === undefined || nodeEntity.position.y === undefined) return
      
      // Find the node group in the SVG by nodeId
      const allGroups = svgEl.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
      let nodeGroup = null
      
      // First try exact match with extracted ID
      for (const group of allGroups) {
        const groupId = group.getAttribute('id') || ''
        const extractedId = extractNodeIdFromMermaidId(groupId)
        if (extractedId === nodeEntity.nodeId) {
          nodeGroup = group
          break
        }
      }
      
      // If not found, try partial match (for nodes with special characters or variations)
      if (!nodeGroup) {
        for (const group of allGroups) {
          const groupId = group.getAttribute('id') || ''
          // Check if groupId contains the nodeId (case-insensitive)
          if (groupId.toLowerCase().includes(nodeEntity.nodeId.toLowerCase())) {
            // Also check text content as fallback
            const textElement = group.querySelector('text')
            if (textElement) {
              const text = textElement.textContent?.trim() || ''
              const textMatch = text.toLowerCase().includes(nodeEntity.nodeId.toLowerCase())
              if (textMatch) {
                nodeGroup = group
                break
              }
            } else if (groupId.toLowerCase().includes(nodeEntity.nodeId.toLowerCase())) {
              nodeGroup = group
              break
            }
          }
        }
      }
      
      if (!nodeGroup) {
        console.warn(`⚠️ Could not find SVG group for node: ${nodeEntity.nodeId}`)
        // Log available node IDs for debugging
        const availableIds = Array.from(allGroups).slice(0, 5).map(g => {
          const id = g.getAttribute('id') || ''
          return extractNodeIdFromMermaidId(id) || id
        })
        console.warn(`   Available node IDs (first 5):`, availableIds)
        return
      }
      
      // Get the rect element to calculate current position
      const rect = nodeGroup.querySelector('rect')
      if (!rect) {
        console.warn(`⚠️ No rect found for node: ${nodeEntity.nodeId}`)
        return
      }
      
      try {
        // Validate saved position is reasonable (not NaN, not extremely large)
        const savedX = nodeEntity.position.x
        const savedY = nodeEntity.position.y
        
        if (isNaN(savedX) || isNaN(savedY) || 
            Math.abs(savedX) > 100000 || Math.abs(savedY) > 100000) {
          console.warn(`⚠️ Invalid saved position for ${nodeEntity.nodeId}: (${savedX}, ${savedY}), skipping`)
          return
        }
        
        // Get current absolute position using getBBox (accounts for parent transforms)
        let currentX = 0, currentY = 0
        try {
          const currentBBox = rect.getBBox()
          currentX = currentBBox.x
          currentY = currentBBox.y
        } catch (e) {
          // getBBox might fail if element is not rendered yet
          console.warn(`⚠️ getBBox failed for ${nodeEntity.nodeId}, skipping position application`)
          return
        }
        
        // Check if saved position is within reasonable bounds (not too far from current position)
        // This prevents nodes from jumping to completely wrong locations
        // But be more lenient - allow larger distances since nodes might have been moved significantly
        const distance = Math.sqrt(Math.pow(savedX - currentX, 2) + Math.pow(savedY - currentY, 2))
        const MAX_DISTANCE = 20000 // Maximum distance we'll allow (increased from 5000)
        
        if (distance > MAX_DISTANCE) {
          console.warn(`⚠️ Saved position for ${nodeEntity.nodeId} is too far from current position (${distance.toFixed(0)}px), skipping`)
          console.warn(`   Saved: (${savedX}, ${savedY}), Current: (${currentX}, ${currentY})`)
          // Don't return - still try to apply if the saved position itself is reasonable
          // This handles cases where Mermaid's default layout is very different from saved layout
        }
        
        // Additional check: if saved position is reasonable (not extremely large), apply it
        // even if distance is large (user might have intentionally moved nodes far)
        const savedPositionReasonable = Math.abs(savedX) < 50000 && Math.abs(savedY) < 50000
        if (!savedPositionReasonable) {
          console.warn(`⚠️ Saved position for ${nodeEntity.nodeId} is out of bounds: (${savedX}, ${savedY}), skipping`)
          return
        }
        
        // Only apply if there's a significant difference (more than 10 pixels)
        // This prevents applying positions that are already correct
        const deltaX = savedX - currentX
        const deltaY = savedY - currentY
        
        if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
          console.log(`📍 Position for ${nodeEntity.nodeId} is already correct, skipping`)
          appliedCount++
          return
        }
        
        // Get current transform (might be relative to parent cluster)
        const currentTransform = nodeGroup.getAttribute('transform') || ''
        const transformMatch = currentTransform.match(/translate\(([^,]+),\s*([^)]+)\)/)
        
        if (transformMatch) {
          // Update existing transform by adding the delta
          const currentTx = parseFloat(transformMatch[1]) || 0
          const currentTy = parseFloat(transformMatch[2]) || 0
          const newTx = currentTx + deltaX
          const newTy = currentTy + deltaY
          
          // Validate new position is reasonable
          if (isNaN(newTx) || isNaN(newTy) || 
              Math.abs(newTx) > 50000 || Math.abs(newTy) > 50000) {
            console.warn(`⚠️ Calculated invalid position for ${nodeEntity.nodeId}: (${newTx}, ${newTy}), skipping`)
            return
          }
          
          nodeGroup.setAttribute('transform', `translate(${newTx}, ${newTy})`)
        } else {
          // No existing transform - apply saved position directly (absolute)
          // This handles nodes that don't have a transform yet
          if (isNaN(savedX) || isNaN(savedY)) {
            console.warn(`⚠️ Invalid saved position for ${nodeEntity.nodeId}, skipping`)
            return
          }
          
          // Check if saved position is reasonable
          if (Math.abs(savedX) > 50000 || Math.abs(savedY) > 50000) {
            console.warn(`⚠️ Saved position out of bounds for ${nodeEntity.nodeId}: (${savedX}, ${savedY}), skipping`)
            return
          }
          
          nodeGroup.setAttribute('transform', `translate(${savedX}, ${savedY})`)
          console.log(`📍 Applied absolute position for ${nodeEntity.nodeId}: (${savedX}, ${savedY}) [no existing transform]`)
        }
        
        appliedCount++
        console.log(`📍 Applied position for ${nodeEntity.nodeId}: saved(${savedX}, ${savedY}) current(${currentX}, ${currentY}) delta(${deltaX.toFixed(2)}, ${deltaY.toFixed(2)})`)
      } catch (error) {
        console.warn(`⚠️ Error applying position for ${nodeEntity.nodeId}:`, error)
      }
    })
    
    console.log(`✅ Applied ${appliedCount} node positions`)
    
    // After applying positions, update edges ONLY for nodes that were actually moved
    // This is less aggressive and won't break the layout
    setTimeout(() => {
      console.log('🔄 Updating edges for nodes with applied positions')
      nodeEntities.forEach(nodeEntity => {
        if (nodeEntity.position && nodeEntity.position.x !== undefined && nodeEntity.position.y !== undefined) {
          const allGroups = svgEl.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
          for (const group of allGroups) {
            const groupId = group.getAttribute('id') || ''
            if (groupId.includes(nodeEntity.nodeId)) {
              const rect = group.querySelector('rect')
              if (rect) {
                const width = parseFloat(rect.getAttribute('width')) || 180
                const height = parseFloat(rect.getAttribute('height')) || 90
                const centerX = (nodeEntity.position.x || 0) + width/2
                const centerY = (nodeEntity.position.y || 0) + height/2
                // Only update edges for this specific node
                updateEdgesForNode(svgEl, nodeEntity.nodeId, centerX, centerY)
              }
              break
            }
          }
        }
      })
      console.log('✅ Updated edges for nodes with applied positions')
    }, 500) // Wait a bit longer for positions to settle
    
    // OLD CODE (disabled):
    /*
    console.log(`📍 Applying positions for ${nodeEntities.length} nodes from database`)
    
    nodeEntities.forEach(nodeEntity => {
      if (!nodeEntity.position || !nodeEntity.nodeId) return
      
      // Find the node group in the SVG by nodeId
      let nodeGroup = svgEl.querySelector(`g[id*="${nodeEntity.nodeId}"]`)
      
      if (!nodeGroup) {
        // Try to find by label - search all groups
        const allGroups = svgEl.querySelectorAll('g')
        for (const group of allGroups) {
          const text = group.querySelector('text')
          if (text && text.textContent?.trim() === nodeEntity.label) {
            nodeGroup = group
            break
          }
        }
      }
      
      if (!nodeGroup) {
        console.warn(`⚠️ Could not find SVG group for node "${nodeEntity.nodeId}"`)
        return
      }
      
      // Apply position from database
      const x = nodeEntity.position.x || 0
      const y = nodeEntity.position.y || 0
      
      // Update transform attribute to use database position
      nodeGroup.setAttribute('transform', `translate(${x}, ${y})`)
      
      // Also apply size if available
      if (nodeEntity.style && (nodeEntity.style.width || nodeEntity.style.height)) {
        const rect = nodeGroup.querySelector('rect')
        if (rect) {
          if (nodeEntity.style.width) {
            rect.setAttribute('width', nodeEntity.style.width)
          }
          if (nodeEntity.style.height) {
            rect.setAttribute('height', nodeEntity.style.height)
          }
        }
      }
      
      console.log(`✅ Applied position (${x}, ${y}) to node "${nodeEntity.nodeId}"`)
    })
    */
  }

  const renderDiagram = async () => {
    if (!containerRef.current || !currentDiagram) {
      if (!currentDiagram) {
        setIsLoading(true) // Keep loading while waiting for diagram
      } else {
        setIsLoading(false) // Container not ready, stop loading
      }
      return
    }

    setIsLoading(true)
    
    // Clean up any tooltips
    document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
    
    try {
      // Save current node positions before clearing (if in edit mode and positions exist)
      const currentPositions = new Map()
      if (isEditMode && containerRef.current) {
        const svgEl = containerRef.current.querySelector('svg')
        if (svgEl) {
          const nodeGroups = svgEl.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
          nodeGroups.forEach(group => {
            const groupId = group.getAttribute('id') || ''
            const transform = group.getAttribute('transform') || ''
            const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/)
            if (match) {
              const x = parseFloat(match[1])
              const y = parseFloat(match[2])
              // Extract node ID
              let nodeId = ''
              if (groupId.includes('_')) {
                const parts = groupId.split('_')
                const nameIndex = parts.findIndex(p => /^[A-Z]/.test(p))
                if (nameIndex >= 0) {
                  nodeId = parts[nameIndex]
                } else if (parts.length >= 2) {
                  nodeId = parts[1]
                }
              }
              if (nodeId && !isNaN(x) && !isNaN(y)) {
                currentPositions.set(nodeId, { x, y })
              }
            }
          })
        }
      }
      
      // Clear previous diagram
      containerRef.current.innerHTML = ''
      
      // Create unique ID for this diagram
      const diagramId = `diagram-${Date.now()}`
      
      // Use diagram code from database (not hardcoded)
      // Priority: customMermaidCode > savedDiagram mermaidCode > currentDiagram code
      let diagramCode = savedDiagram?.customMermaidCode || 
                       savedDiagram?.mermaidCode || 
                       currentDiagram?.code || ''
      
      if (!diagramCode) {
        console.error('❌ No diagram code available in database')
        console.error('   Diagram must be seeded to database with mermaidCode or customMermaidCode')
        setIsLoading(false)
        return
      }
      
      console.log('📋 Using diagram code:', currentView, 'Length:', diagramCode.length)
      
      console.log('📋 Using diagram code from database:', currentView)
      
      // Enhance diagram code with project status and lock states
      const enhancedCode = enhanceDiagramWithStatus(diagramCode, tasks, savedDiagram)
      
      // Create container for mermaid
      const mermaidDiv = document.createElement('div')
      mermaidDiv.className = 'mermaid'
      mermaidDiv.id = diagramId
      mermaidDiv.textContent = enhancedCode
      
      containerRef.current.appendChild(mermaidDiv)

      // Render diagram with proper error handling
      const { svg } = await mermaid.render(diagramId + '-svg', enhancedCode)
      
      console.log('✅ Mermaid rendered SVG, length:', svg.length)
      
      // Replace the div content with the rendered SVG
      mermaidDiv.innerHTML = svg
      
      // Make sure SVG fills the container properly and is larger
      const svgElement = mermaidDiv.querySelector('svg')
      
      if (svgElement) {
        // Debug: Count nodes in the SVG
        const nodeGroups = svgElement.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
        console.log(`📊 SVG rendered with ${nodeGroups.length} node groups`)
        
        if (nodeGroups.length === 0) {
          console.warn('⚠️ WARNING: No node groups found in rendered SVG!')
          console.warn('   SVG content preview:', svg.substring(0, 500))
        }
        svgElement.style.width = '100%'
        svgElement.style.height = 'auto'
        svgElement.style.display = 'block'
        
        // Remove internal Mermaid node IDs that appear as text (like "flowchart_Clients_708")
        const textElements = svgElement.querySelectorAll('text')
        textElements.forEach(text => {
          const textContent = text.textContent?.trim() || ''
          // Hide text that matches Mermaid internal ID patterns (more comprehensive)
          if (textContent.match(/^flowchart_\w+_\d+$/i) || 
              textContent.match(/^flowchart-\w+-\d+$/i) ||
              textContent.match(/^flowchart\w+\d+$/i) ||
              (textContent.startsWith('flowchart') && /\d+$/.test(textContent)) ||
              (textContent.includes('flowchart') && textContent.match(/_\d+$/))) {
            // Completely remove these elements
            text.remove()
            return
          }
          
          // Also check parent group for flowchart IDs
          const parentGroup = text.closest('g')
          if (parentGroup) {
            const groupId = parentGroup.getAttribute('id') || ''
            if (groupId.match(/^flowchart_\w+_\d+$/i) || groupId.match(/^flowchart-\w+-\d+$/i)) {
              // Check if this text is just the ID (not actual content)
              if (textContent === groupId || textContent === groupId.replace(/^flowchart[_-]/, '')) {
                text.remove()
                return
              }
            }
          }
          
          // Check if this is a subgraph/cluster label (grouping box label)
          const textParentGroup = text.closest('g')
          const isSubgraphLabel = textParentGroup && (
            textParentGroup.classList.contains('cluster') ||
            textParentGroup.getAttribute('class')?.includes('cluster') ||
            textParentGroup.querySelector('rect[class*="cluster"]') ||
            textParentGroup.querySelector('rect[fill*="cluster"]')
          )
          
          // Make subgraph/cluster labels MUCH bigger and more visible
          if (isSubgraphLabel) {
            const currentSize = text.style.fontSize || '16px'
            const size = parseFloat(currentSize)
            text.style.fontSize = `${size * 2.5}px` // 2.5x bigger for grouping labels
            text.style.fontWeight = '800' // Extra bold
            text.style.fill = '#ffffff' // Bright white
            text.style.stroke = '#60a5fa' // Blue stroke for visibility
            text.style.strokeWidth = '1px'
            text.style.paintOrder = 'stroke fill'
          } else {
            // Regular node text - make it bigger too
            const currentSize = text.style.fontSize || '16px'
            const size = parseFloat(currentSize)
            text.style.fontSize = `${size * 1.4}px`
            text.style.fontWeight = '600'
          }
        })
        
        // Find and enhance subgraph/cluster boxes (Mermaid uses specific class names)
        // Mermaid clusters are in groups with class "cluster" or have cluster-label
        const clusterGroups = svgElement.querySelectorAll('g.cluster, g[class*="cluster"]')
        
        console.log(`🔍 Found ${clusterGroups.length} cluster groups`)
        
        clusterGroups.forEach((clusterGroup, index) => {
          // Find the cluster box rectangle
          const clusterRect = clusterGroup.querySelector('rect')
          let boxWidth = 0
          let boxHeight = 0
          
          if (clusterRect) {
            boxWidth = parseFloat(clusterRect.getAttribute('width')) || 0
            boxHeight = parseFloat(clusterRect.getAttribute('height')) || 0
            
            console.log(`📦 Cluster ${index}: ${boxWidth}x${boxHeight}`)
            
            // DON'T shrink the cluster box - keep it to cover all nodes
            // Just style it better - only set stroke-width if not already set
            if (!clusterRect.getAttribute('stroke-width')) {
              clusterRect.setAttribute('stroke-width', '3')
            }
            clusterRect.setAttribute('stroke', '#60a5fa')
            clusterRect.setAttribute('fill', '#0f1419')
            clusterRect.setAttribute('fill-opacity', '0.15')
            clusterRect.setAttribute('rx', '8')
            clusterRect.setAttribute('ry', '8')
          }
          
          // Find ALL text elements in the cluster group - Mermaid might use different structures
          const allTextsInCluster = clusterGroup.querySelectorAll('text')
          console.log(`📝 Found ${allTextsInCluster.length} text elements in cluster ${index}`)
          
          allTextsInCluster.forEach(text => {
            const textContent = text.textContent?.trim() || ''
            // Check if this text looks like a cluster label (short, no line breaks, matches known labels)
            const isClusterLabel = textContent.length < 50 && 
                                  !textContent.includes('<br/>') &&
                                  !textContent.includes('\n') &&
                                  (textContent.includes('Services') || 
                                   textContent.includes('Core') ||
                                   textContent.includes('Wallet') ||
                                   textContent.includes('Blockchain') ||
                                   textContent.includes('Payment') ||
                                   textContent.includes('KYC') ||
                                   textContent.includes('Notification') ||
                                   textContent.includes('Trading') ||
                                   textContent.includes('Compliance') ||
                                   textContent.includes('Security') ||
                                   textContent.includes('Financial') ||
                                   textContent.includes('Analytics'))
            
            if (isClusterLabel || boxWidth > 300) {
              // Calculate HUGE text size based on box size
              let newSize = 40 // Base size
              
              if (boxWidth > 0 && boxHeight > 0) {
                // Scale with box - make it REALLY big
                const widthFactor = boxWidth / 200
                const heightFactor = boxHeight / 150
                const scaleFactor = Math.max(widthFactor, heightFactor)
                newSize = Math.max(40, Math.min(scaleFactor * 30, 80)) // 40px to 80px range
                
                // For very large boxes, make it EXTRA HUGE
                if (boxWidth > 1000 || boxHeight > 800) {
                  newSize = 70
                } else if (boxWidth > 700 || boxHeight > 600) {
                  newSize = 55
                } else if (boxWidth > 500 || boxHeight > 400) {
                  newSize = 45
                }
              }
              
              console.log(`✅ Enhancing label "${textContent}" to ${newSize}px (box: ${boxWidth}x${boxHeight})`)
              
              // Apply styles aggressively - both style and attributes
              text.style.fontSize = `${newSize}px !important`
              text.style.fontWeight = '900'
              text.style.fill = '#ffffff'
              text.style.stroke = '#60a5fa'
              text.style.strokeWidth = '2.5px'
              text.style.paintOrder = 'stroke fill'
              text.style.fontFamily = 'Outfit, Inter, system-ui, sans-serif'
              text.style.letterSpacing = '0.5px'
              
              // Also set as attributes
              text.setAttribute('font-size', `${newSize}px`)
              text.setAttribute('font-weight', '900')
              text.setAttribute('fill', '#ffffff')
              
              // Force update by removing and re-adding the style
              const styleAttr = text.getAttribute('style') || ''
              text.setAttribute('style', styleAttr.replace(/font-size[^;]*;?/gi, '') + `font-size: ${newSize}px !important;`)
            }
          })
        })
        
        // Cluster boxes are now handled in the main rect processing loop above
        // This duplicate processing removed to avoid double borders
        
        // Find and enhance all subgraph label text (alternative method)
        // Common subgraph label patterns
        const subgraphLabels = [
          'Core Services', 'Wallet Services', 'Blockchain', 'Payment Gateways',
          'KYC Identity', 'Notifications', 'Advanced Trading', 'Compliance',
          'Security', 'Financial Services', 'Analytics', 'External Clients',
          'Security Layer', 'REST API Layer', 'Business Logic', 'Data Layer',
          'Admin Management', 'User Management', 'Trading', 'Wallets',
          'OTC Exchange', 'Support', 'Promotions', 'Compliance & Risk',
          'Security Enhancements', 'Analytics & Reporting'
        ]
        
        const allTexts = svgElement.querySelectorAll('text')
        allTexts.forEach(text => {
          const textContent = text.textContent?.trim() || ''
          
          // Check if this text matches a known subgraph label
          const isSubgraphLabel = subgraphLabels.some(label => 
            textContent.includes(label) || label.includes(textContent)
          )
          
          // Check if this text is inside a cluster/subgraph group
          let current = text.parentElement
          let isInCluster = false
          while (current && current !== svgElement) {
            if (current.classList?.contains('cluster') || 
                current.getAttribute('class')?.includes('cluster') ||
                (current.tagName === 'g' && current.querySelector('rect[class*="cluster"]'))) {
              isInCluster = true
              break
            }
            current = current.parentElement
          }
          
          // Also check if text is positioned near cluster boundaries (heuristic)
          if (!isInCluster && !isSubgraphLabel) {
            const textY = parseFloat(text.getAttribute('y')) || 0
            const textX = parseFloat(text.getAttribute('x')) || 0
            
            // Check if there's a cluster rect nearby
            const nearbyRects = Array.from(svgElement.querySelectorAll('rect')).filter(rect => {
              const rectX = parseFloat(rect.getAttribute('x')) || 0
              const rectY = parseFloat(rect.getAttribute('y')) || 0
              const rectWidth = parseFloat(rect.getAttribute('width')) || 0
              const rectHeight = parseFloat(rect.getAttribute('height')) || 0
              
              // Check if text is near the top-left of a large rect (likely a cluster label)
              return Math.abs(textX - rectX) < 50 && 
                     Math.abs(textY - rectY) < 30 &&
                     rectWidth > 200 && rectHeight > 100
            })
            
            if (nearbyRects.length > 0) {
              isInCluster = true
            }
          }
          
          // Enhance subgraph/cluster labels - make them HUGE
          if (isInCluster || isSubgraphLabel) {
            // Find the cluster box to scale text with box size
            let boxWidth = 0
            let boxHeight = 0
            let current = text.parentElement
            while (current && current !== svgElement) {
              const rect = current.querySelector('rect')
              if (rect) {
                const width = parseFloat(rect.getAttribute('width')) || 0
                const height = parseFloat(rect.getAttribute('height')) || 0
                // If it's a large rect, it's probably the cluster box
                if (width > 300 && height > 200) {
                  boxWidth = width
                  boxHeight = height
                  break
                }
              }
              current = current.parentElement
            }
            
            // Calculate text size based on box size
            const baseSize = 24
            let newSize
            if (boxWidth > 0 && boxHeight > 0) {
              // Scale with box size - bigger box = MUCH bigger text
              const sizeMultiplier = Math.max(1.5, Math.min(boxWidth / 150, boxHeight / 100))
              newSize = Math.max(baseSize * sizeMultiplier * 2.5, 40) // Minimum 40px
              
              // For very large boxes, make text EXTRA HUGE
              if (boxWidth > 1000 || boxHeight > 800) {
                newSize = Math.max(newSize * 1.8, 60) // At least 60px for huge boxes
              } else if (boxWidth > 600 || boxHeight > 500) {
                newSize = Math.max(newSize * 1.4, 50) // At least 50px for large boxes
              }
            } else {
              // Fallback if we can't find box size
              const currentSize = parseFloat(text.style.fontSize || text.getAttribute('font-size') || '16px') || 16
              newSize = Math.max(currentSize * 3.5, 40) // At least 40px
            }
            
            // Apply styles both as style and attributes for maximum compatibility
            text.style.fontSize = `${newSize}px`
            text.style.fontWeight = '900'
            text.style.fill = '#ffffff'
            text.style.stroke = '#60a5fa'
            text.style.strokeWidth = '2.5px' // Thicker stroke for huge text
            text.style.paintOrder = 'stroke fill'
            text.style.fontFamily = 'Outfit, Inter, system-ui, sans-serif'
            text.style.letterSpacing = '0.5px' // Slight letter spacing for readability
            
            text.setAttribute('font-weight', '900')
            text.setAttribute('font-size', `${newSize}px`)
            text.setAttribute('fill', '#ffffff')
            
            // Make sure it's visible on top
            const textParentGroup = text.closest('g')
            if (textParentGroup) {
              textParentGroup.style.zIndex = '1000'
              // Also ensure the text element itself is on top
              text.style.zIndex = '1001'
            }
            
            console.log(`✅ Enhanced cluster label: "${textContent}" to ${newSize}px (box: ${boxWidth}x${boxHeight})`)
          }
        })
        
        // Also remove any standalone groups that are just flowchart IDs
        const allGroups = svgElement.querySelectorAll('g')
        allGroups.forEach(group => {
          const groupId = group.getAttribute('id') || ''
          if (groupId.match(/^flowchart_\w+_\d+$/i) || groupId.match(/^flowchart-\w+-\d+$/i)) {
            // Check if this group only contains the ID text and no actual content
            const rects = group.querySelectorAll('rect')
            const texts = group.querySelectorAll('text')
            const hasContent = Array.from(texts).some(t => {
              const content = t.textContent?.trim() || ''
              return !content.match(/^flowchart/i) && content.length > 0
            })
            
            // If no content and only has ID-like text, remove the whole group
            if (!hasContent && rects.length === 0) {
              group.remove()
            }
          }
        })
        
        // Make nodes prettier with rounded corners and proper sizing
        // IMPORTANT: Process ALL rectangles to fix double borders
        const allRects = svgElement.querySelectorAll('rect')
        
        allRects.forEach(rect => {
          const width = parseFloat(rect.getAttribute('width')) || 0
          const height = parseFloat(rect.getAttribute('height')) || 0
          
          // Check if this is a cluster box (large rectangle)
          const isClusterBox = width > 400 && height > 300
          
          // Check if this is a node rectangle (inside a node group)
          const parentGroup = rect.closest('g')
          const isNodeRect = parentGroup && (
            parentGroup.id?.includes('flowchart') || 
            parentGroup.id?.includes('graph') ||
            parentGroup.classList.contains('node')
          ) && !isClusterBox
          
          if (isNodeRect) {
            // Node rectangles - remove ONLY stroke-width, keep stroke color
            rect.removeAttribute('stroke-width')
            
            // Clean style attribute - remove ONLY stroke-width, preserve stroke color
            let styleAttr = rect.getAttribute('style') || ''
            if (styleAttr) {
              // Remove stroke-width from style but KEEP stroke color
              styleAttr = styleAttr.replace(/stroke-width\s*:\s*[^;]+;?/gi, '').trim()
              // Remove any trailing semicolons
              styleAttr = styleAttr.replace(/;+/g, ';').replace(/^;|;$/g, '')
              // Ensure stroke color is preserved - if no stroke in style, check attribute
              if (!styleAttr.includes('stroke:') && !rect.getAttribute('stroke')) {
                // No stroke color found - set default
                styleAttr = (styleAttr ? styleAttr + '; ' : '') + 'stroke: #60a5fa'
              }
              if (styleAttr) {
                rect.setAttribute('style', styleAttr)
              } else {
                // If style is empty, at least set stroke color
                rect.setAttribute('style', 'stroke: #60a5fa')
              }
            } else {
              // No style attribute - set default stroke color
              rect.setAttribute('style', 'stroke: #60a5fa')
            }
            
            // Ensure stroke attribute exists if not in style
            if (!rect.getAttribute('stroke') && !rect.getAttribute('style')?.includes('stroke:')) {
              rect.setAttribute('stroke', '#60a5fa')
            }
            
            // Get current size
            let currentWidth = width || 200
            let currentHeight = height || 100
            
            // Ensure minimum reasonable size for readability
            if (currentWidth < 120) {
              currentWidth = 120
            }
            if (currentHeight < 70) {
              currentHeight = 70
            }
            
            // Don't make nodes too large - cap at reasonable maximum
            if (currentWidth > 400) {
              currentWidth = 400
            }
            if (currentHeight > 250) {
              currentHeight = 250
            }
            
            rect.setAttribute('width', currentWidth)
            rect.setAttribute('height', currentHeight)
            
            // Add rounded corners
            rect.setAttribute('rx', '8')
            rect.setAttribute('ry', '8')
          } else if (isClusterBox) {
            // Cluster boxes - set stroke-width only once
            if (!rect.getAttribute('stroke-width')) {
              rect.setAttribute('stroke-width', '3')
            }
            rect.setAttribute('stroke', '#60a5fa')
            rect.setAttribute('fill-opacity', '0.15')
            rect.setAttribute('rx', '8')
            rect.setAttribute('ry', '8')
          }
        })
        
        // DISABLED: Don't apply positions automatically - let Mermaid handle layout naturally
        // Positions will be saved when user manually arranges nodes via drag-and-drop (if implemented)
        // or when positions are extracted after user interaction
        
        // DISABLED: Don't automatically extract and save positions
        // This was overwriting user-saved positions with Mermaid's default layout
        // Positions should only be saved when user explicitly moves nodes in edit mode
        // setTimeout(async () => {
        //   await extractAndSaveNodePositions(svgElement, currentView)
        // }, 2000)
      }
      
      // Function to extract node positions from SVG and save to DB
      const extractAndSaveNodePositions = async (svgElement, diagramId) => {
        try {
          const { API_ENDPOINTS } = await import('../config/api')
          
          // Get diagram UUID first
          const diagramResponse = await fetch(API_ENDPOINTS.diagramByDiagramId(diagramId))
          if (!diagramResponse.ok) {
            console.warn('Could not load diagram for position saving')
            return
          }
          
          const diagram = await diagramResponse.json()
          
          // Get all node groups from SVG
          const nodeGroups = svgElement.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
          const positionsToSave = []
          
          nodeGroups.forEach(nodeGroup => {
            const nodeId = nodeGroup.getAttribute('id') || ''
            // Extract actual node name from Mermaid ID (e.g., "flowchart_NodeName_123" -> "NodeName")
            let actualNodeId = nodeId
            if (nodeId.includes('_')) {
              const parts = nodeId.split('_')
              if (parts.length >= 2 && (parts[0] === 'flowchart' || parts[0] === 'graph')) {
                // Skip first part (flowchart/graph) and last part (number), join the rest
                actualNodeId = parts.slice(1, -1).join('_') || parts[1] || nodeId
              }
            }
            
            // Get position from transform or bounding box
            const transform = nodeGroup.getAttribute('transform') || ''
            const rect = nodeGroup.querySelector('rect')
            if (!rect) return
            
            let x = 0, y = 0
            const transformMatch = transform.match(/translate\(([^,]+),([^)]+)\)/)
            if (transformMatch) {
              x = parseFloat(transformMatch[1]) || 0
              y = parseFloat(transformMatch[2]) || 0
            } else {
              // Fallback: use bounding box
              try {
                const bbox = rect.getBBox()
                x = bbox.x
                y = bbox.y
              } catch (e) {
                // BBox might fail, skip this node
                return
              }
            }
            
            // Get size
            const width = parseFloat(rect.getAttribute('width')) || 200
            const height = parseFloat(rect.getAttribute('height')) || 100
            
            // Get label
            const textElement = nodeGroup.querySelector('text')
            let label = ''
            if (textElement) {
              const tspans = textElement.querySelectorAll('tspan')
              if (tspans.length > 0) {
                label = Array.from(tspans).map(t => t.textContent || '').join(' ')
              } else {
                label = textElement.textContent || ''
              }
            }
            
            positionsToSave.push({
              nodeId: actualNodeId,
              position: { x: Math.round(x), y: Math.round(y) },
              size: { width: Math.round(width), height: Math.round(height) },
              label: label.substring(0, 255) // Truncate if too long
            })
          })
          
          // Update nodes in database with positions
          if (positionsToSave.length > 0) {
            let savedCount = 0
            // Update each node's position
            for (const nodePos of positionsToSave) {
              try {
                // Find node by nodeId and diagramId
                const nodesResponse = await fetch(`${API_ENDPOINTS.nodes}?diagramId=${diagram.id}&nodeId=${nodePos.nodeId}`)
                if (nodesResponse.ok) {
                  const nodes = await nodesResponse.json()
                  if (nodes && nodes.length > 0) {
                    // Update first matching node
                    const node = nodes[0]
                    const updateResponse = await fetch(API_ENDPOINTS.nodeById(node.id), {
                      method: 'PATCH',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        position: nodePos.position,
                        style: {
                          ...(node.style || {}),
                          width: nodePos.size.width,
                          height: nodePos.size.height
                        }
                      })
                    })
                    if (updateResponse.ok) {
                      savedCount++
                    }
                  }
                }
              } catch (error) {
                // Ignore individual node update errors
                console.warn('Could not update node position:', nodePos.nodeId, error)
              }
            }
            
            if (savedCount > 0) {
              console.log(`✅ Saved positions for ${savedCount}/${positionsToSave.length} nodes`)
            }
          }
        } catch (error) {
          console.warn('Could not save node positions:', error)
        }
      }

      // Intercept Mermaid's built-in click handlers before adding our own
      // Mermaid creates click handlers that use window.location.hash
      const originalLocationHash = window.location.hash
      
      // Remove any existing hashchange listeners to avoid duplicates
      const hashChangeHandler = (e) => {
        // EDIT MODE: Don't open task progress when in edit mode
        // Check current edit mode state from AppStore
        const currentEditMode = window.__isEditMode || false
        if (currentEditMode) {
          window.history.replaceState(null, '', originalLocationHash || '#')
          e.preventDefault()
          e.stopPropagation()
          return false
        }
        
        const hash = window.location.hash.replace('#', '')
        console.log('🔗 Hash change detected:', hash)
        
        // Check if it's a Level task ID
        if (hash.startsWith('Level') && tasks[hash]) {
          e.preventDefault()
          e.stopPropagation()
          window.history.replaceState(null, '', originalLocationHash || '#')
          setSelectedTask(hash)
          setShowTodoPanel(true)
          return false
        }
        
        // Check if it's a diagram navigation
        if (hash === 'database' || hash === 'services' || hash === 'controllers' || 
            hash === 'flows' || hash === 'external' || hash === 'advanced') {
          e.preventDefault()
          e.stopPropagation()
          window.history.replaceState(null, '', originalLocationHash || '#')
          navigateToView(hash)
          return false
        }
      }
      
      const interceptMermaidClicks = () => {
        // Remove old listener if it exists
        window.removeEventListener('hashchange', hashChangeHandler, true)
        // Add new listener
        window.addEventListener('hashchange', hashChangeHandler, true)
      }
      
      // Also store edit mode state globally for hashchange handler to access
      window.__isEditMode = isEditMode
      
        // Add click handlers after rendering
        setTimeout(() => {
          interceptMermaidClicks()
          addClickHandlers()
          setIsLoading(false)
          
          // Restore positions if we saved them before clearing (edit mode toggle)
          if (currentPositions && currentPositions.size > 0) {
            setTimeout(() => {
              const svgEl = containerRef.current?.querySelector('svg')
              if (svgEl) {
                let restoredCount = 0
                currentPositions.forEach((pos, nodeId) => {
                  const nodeGroups = svgEl.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
                  for (const group of nodeGroups) {
                    const groupId = group.getAttribute('id') || ''
                    if (groupId.includes(nodeId)) {
                      group.setAttribute('transform', `translate(${pos.x}, ${pos.y})`)
                      restoredCount++
                      break
                    }
                  }
                })
                console.log(`📍 Restored ${restoredCount} node positions after edit mode toggle`)
                
                // Update edges after restoring positions
                setTimeout(() => {
                  currentPositions.forEach((pos, nodeId) => {
                    const nodeGroups = svgEl.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
                    for (const group of nodeGroups) {
                      const groupId = group.getAttribute('id') || ''
                      if (groupId.includes(nodeId)) {
                        const rect = group.querySelector('rect')
                        if (rect) {
                          const width = parseFloat(rect.getAttribute('width')) || 180
                          const height = parseFloat(rect.getAttribute('height')) || 90
                          const centerX = pos.x + width/2
                          const centerY = pos.y + height/2
                          updateEdgesForNode(svgEl, nodeId, centerX, centerY)
                        }
                        break
                      }
                    }
                  })
                }, 200)
              }
            }, 300)
          }
          
          // DISABLED: Automatic position application on load
          // This was causing nodes to be positioned incorrectly
          // Positions will still be saved when you move nodes, but won't auto-apply on load
          // To restore positions, manually arrange nodes in edit mode and save
          // 
          // If you want to enable this, uncomment below, but be aware it may cause layout issues
          /*
          if (!isEditMode && savedDiagram?.nodeEntities && savedDiagram.nodeEntities.length > 0) {
            // Only apply positions if ALL nodes have saved positions (to avoid partial layout)
            const nodesWithPositions = savedDiagram.nodeEntities.filter(n => 
              n.position && 
              n.position.x !== undefined && n.position.y !== undefined &&
              (n.position.x !== 0 || n.position.y !== 0) && // Not default 0,0
              !isNaN(n.position.x) && !isNaN(n.position.y) && // Valid numbers
              Math.abs(n.position.x) < 100000 && Math.abs(n.position.y) < 100000 && // Reasonable values
              n.nodeId // Must have a nodeId
            )
            
            // Only apply if we have positions for at least 80% of nodes
            const positionCoverage = nodesWithPositions.length / savedDiagram.nodeEntities.length
            if (nodesWithPositions.length > 0 && positionCoverage >= 0.8) {
              console.log(`📍 Found ${nodesWithPositions.length} nodes with saved positions (${(positionCoverage * 100).toFixed(0)}% coverage), will apply after render`)
              setTimeout(() => {
                const svgEl = containerRef.current?.querySelector('svg')
                if (svgEl) {
                  const nodeGroups = svgEl.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
                  if (nodeGroups.length > 0) {
                    console.log(`📍 Applying saved positions from database (found ${nodeGroups.length} node groups)`)
                    applyNodePositionsFromDatabase(svgEl, nodesWithPositions)
                  } else {
                    // Retry if not ready
                    setTimeout(() => {
                      const retrySvg = containerRef.current?.querySelector('svg')
                      if (retrySvg) {
                        const retryGroups = retrySvg.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
                        if (retryGroups.length > 0) {
                          console.log(`📍 Retrying position application (found ${retryGroups.length} node groups)`)
                          applyNodePositionsFromDatabase(retrySvg, nodesWithPositions)
                        }
                      }
                    }, 1500)
                  }
                }
              }, 2500) // Wait for Mermaid to fully render and stabilize
            } else {
              console.log(`📍 Not applying positions: only ${nodesWithPositions.length}/${savedDiagram.nodeEntities.length} nodes have positions (${(positionCoverage * 100).toFixed(0)}% coverage, need 80%+)`)
            }
          }
          */
          
          // DISABLED: Don't apply positions automatically, even after save
          // This was causing nodes to disappear or be positioned incorrectly
          // Users should manually arrange nodes in edit mode
          // Positions are still saved to database, but not automatically applied
          /*
          if (window.__shouldApplyPositions && savedDiagram?.nodeEntities) {
            console.log('📍 Will apply positions after save (waiting for full render)')
            setTimeout(() => {
              const svgEl = containerRef.current?.querySelector('svg')
              if (svgEl && savedDiagram?.nodeEntities) {
                // Double-check SVG is ready with nodes
                const nodeGroups = svgEl.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
                if (nodeGroups.length > 0) {
                  console.log(`📍 Applying positions after save (found ${nodeGroups.length} node groups)`)
                  applyNodePositionsFromDatabase(svgEl, savedDiagram.nodeEntities)
                  window.__shouldApplyPositions = false // Reset flag
                } else {
                  console.warn('⚠️ SVG not ready yet, retrying...')
                  // Retry once more
                  setTimeout(() => {
                    const retrySvg = containerRef.current?.querySelector('svg')
                    if (retrySvg) {
                      applyNodePositionsFromDatabase(retrySvg, savedDiagram.nodeEntities)
                      window.__shouldApplyPositions = false
                    }
                  }, 1000)
                }
              }
            }, 2000) // Wait 2 seconds for Mermaid to fully stabilize
          }
          */
        }, 100)
    } catch (error) {
      console.error('Mermaid rendering error:', error)
      setIsLoading(false)
      containerRef.current.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <div class="empty-state-text">Failed to render diagram</div>
          <div style="font-size: 11px; margin-top: 8px; color: var(--text-muted); max-width: 500px;">
            ${error.message || 'Check browser console (F12) for details'}
          </div>
        </div>
      `
    }
  }

  const addClickHandlers = () => {
    if (!containerRef.current) return

    // Find all clickable nodes in the SVG
    const svgElement = containerRef.current.querySelector('svg')
    if (!svgElement) return

    // Add click handlers to all nodes
    const nodeGroups = svgElement.querySelectorAll('.node, g[id*="flowchart"]')
    
    nodeGroups.forEach(node => {
      // Make it visually clickable
      node.style.cursor = 'pointer'
      
      // Remove any existing click listeners to avoid duplicates
      const newClickHandler = async (e) => {
        // EDIT MODE: Handle node clicks for editing only - don't open task progress
        // Check current edit mode state (not closure value) - check FIRST before anything else
        const currentEditMode = window.__isEditMode || false
        if (currentEditMode) {
          console.log('🚫 Edit mode active - blocking task panel')
          // Skip if in move mode (mousedown handles dragging)
          if (isMoving) {
            e.stopPropagation()
            e.preventDefault()
            e.stopImmediatePropagation()
            return
          }
          // Handle edit mode clicks (color picker, connect mode, etc.)
          e.stopPropagation()
          e.preventDefault()
          e.stopImmediatePropagation() // Prevent other handlers from firing
          handleEditNodeClick(e, node)
          return // IMPORTANT: Return early to prevent task progress from opening
        }
        
        e.stopPropagation()
        e.preventDefault()
        
        // Get the node ID from Mermaid (the actual node ID, not the text)
        // Mermaid stores node IDs in the group's id attribute, often as "flowchart_NodeName_123"
        let nodeId = node.getAttribute('id') || node.closest('g')?.getAttribute('id') || ''
        // Extract the actual node name from Mermaid's ID format (e.g., "flowchart_MarginS_123" -> "MarginS")
        if (nodeId && nodeId.includes('_')) {
          const parts = nodeId.split('_')
          if (parts.length >= 2 && (parts[0] === 'flowchart' || parts[0] === 'graph')) {
            // Get the node name part (usually the second part, before the number)
            // Handle cases like "flowchart_MarginS_123" or "graph_TB_MarginS_456"
            const nameIndex = parts.findIndex(p => /^[A-Z]/.test(p)) // Find first part starting with capital
            if (nameIndex >= 0) {
              nodeId = parts[nameIndex]
            } else if (parts.length >= 2) {
              nodeId = parts[1] // Fallback to second part
            }
          }
        }
        
        // Also try to get node ID from the parent group's class or data attributes
        const parentGroup = node.closest('g')
        if (parentGroup && !nodeId) {
          const classList = parentGroup.className?.baseVal || parentGroup.className || ''
          if (classList.includes('node')) {
            // Try to extract from the group's children or structure
            const rect = parentGroup.querySelector('rect')
            if (rect) {
              const rectId = rect.getAttribute('id') || ''
              if (rectId) nodeId = rectId.replace(/^flowchart_|^graph_/, '').split('_')[0]
            }
          }
        }
        
        // Get the node ID/text - handle tspan elements for line breaks
        const textElement = node.querySelector('text, .nodeLabel')
        if (!textElement) return
        
        let nodeText = ''
        const tspans = textElement.querySelectorAll('tspan')
        if (tspans.length > 0) {
          nodeText = Array.from(tspans).map(t => t.textContent?.trim() || '').join('\n')
        } else {
          nodeText = textElement.textContent?.trim() || ''
        }
        
        // Remove status emojis for matching
        nodeText = nodeText.replace(/[✅🔄⏸️🚫]/g, '').trim()
        
        // Clean up the text (remove line breaks, extra spaces) for matching
        const nodeTextSingleLine = nodeText.replace(/\s+/g, ' ').trim()
        
        // Extract just the name part (before any description or HTTP method)
        let nodeName = nodeText.split(/\n|<br\/>|•/)[0].trim()
        
        // Remove common prefixes/suffixes that might interfere with matching
        nodeName = nodeName
          .replace(/^Level\s*\d+[:\s]*/i, '') // Remove "Level 1:" prefix
          .replace(/\s*\[ADVANCED\]/i, '') // Remove [ADVANCED] tag
          .replace(/🚀\s*/g, '') // Remove rocket emoji
          .trim()
        
        // If the name contains an HTTP method, extract just the part before it
        const methodMatch = nodeName.match(/^(.+?)(GET|POST|PUT|DELETE|PATCH)/)
        if (methodMatch) {
          nodeName = methodMatch[1].trim()
        }
        
        console.log('🖱️ Clicked node:', nodeName, '| Node ID:', nodeId, '| Original text:', nodeText.substring(0, 50))
        
        // FIRST: Check if this node has a Mermaid click handler by checking the SVG structure
        // Mermaid click handlers create links, check if there's a click handler attached
        const nodeGroup = node.closest('g')
        if (nodeGroup) {
          // Check if there's a title attribute or data attribute that might contain the click target
          const title = nodeGroup.querySelector('title')?.textContent || ''
          const clickTarget = title.match(/#(\w+)/)?.[1] || nodeGroup.getAttribute('data-click') || ''
          
          // Handle Mermaid click handlers - check for Level task IDs or diagram navigation
          if (clickTarget) {
            // EDIT MODE: Don't open task panel in edit mode
            if (window.__isEditMode) {
              return
            }
            // Check if it's a Level task ID
            if (clickTarget.startsWith('Level') && tasks[clickTarget]) {
              console.log('✅ Found Level task from click handler:', clickTarget)
              setSelectedTask(clickTarget)
              setShowTodoPanel(true)
              return
            }
            // Check if it's a diagram navigation (without #)
            const diagramId = clickTarget.replace(/^#/, '')
            if (diagramId === 'database' || diagramId === 'services' || diagramId === 'controllers' || 
                diagramId === 'flows' || diagramId === 'external' || diagramId === 'advanced') {
              console.log('✅ Found diagram navigation from click handler:', diagramId)
              navigateToView(diagramId)
              return
            }
          }
        }
        
        // SECOND: Check if node text contains a Level task ID (e.g., "Level31_MarginTrading")
        // This handles Mermaid click handlers that use Level task IDs
        // EDIT MODE: Skip this check in edit mode
        if (!window.__isEditMode) {
          const levelTaskMatch = nodeTextSingleLine.match(/Level(\d+)_(\w+)/i)
          if (levelTaskMatch) {
            const levelTaskId = levelTaskMatch[0] // e.g., "Level31_MarginTrading"
            if (tasks[levelTaskId]) {
              console.log('✅ Found Level task ID in node text:', levelTaskId)
              setSelectedTask(levelTaskId)
              setShowTodoPanel(true)
              return
            }
          }
        }
        
        // FIRST: Skip legend, labels, and other non-interactive nodes
        const skipKeywords = ['legend', 'project status', 'click components', 'completed', 'in progress', 'not started', 'blocked']
        const shouldSkip = skipKeywords.some(keyword => 
          nodeName.toLowerCase().includes(keyword) || 
          nodeText.toLowerCase().includes(keyword)
        )
        
        if (shouldSkip) {
          return  // Don't handle clicks or hovers on these
        }
        
        // Clean node name for better matching (define early so we can use it)
        const cleanNodeName = nodeName
          .replace(/[✅🔄⏸️🚫🔒]/g, '') // Remove emojis
          .replace(/<br\s*\/?>/gi, ' ') // Replace <br> with space
          .replace(/\s+/g, ' ') // Normalize spaces
          .trim()
        
        // FOURTH: Check if this is an ADVANCED node and map it to its Level task
        // These are purple nodes with [ADVANCED] tag that should open their corresponding Level task (31-60)
        const advancedIndicators = [
          nodeTextSingleLine.includes('[ADVANCED]'),
          nodeTextSingleLine.includes('🚀'),
          cleanNodeName.toLowerCase().includes('advanced'),
          // Check node ID for advanced component patterns
          nodeId && (nodeId.includes('Margin') || nodeId.includes('Futures') || 
                     nodeId.includes('Options') || nodeId.includes('AML') ||
                     nodeId.includes('Sanctions') || nodeId.includes('Staking') ||
                     nodeId.includes('Lending') || nodeId.includes('ColdWallet') ||
                     nodeId.includes('MultiSig') || nodeId.includes('Analytics') ||
                     nodeId.includes('TradingAnalytics') || nodeId.includes('BusinessAnalytics') ||
                     nodeId.includes('AdminDash') || nodeId.includes('DataWarehouse') ||
                     nodeId.includes('Fees') || nodeId.includes('Support') ||
                     nodeId.includes('Liquidity') || nodeId.includes('MarketData') ||
                     nodeId.includes('Infrastructure') || nodeId.includes('AdvancedOrders') ||
                     nodeId.includes('TradingBots') || nodeId.includes('Regulatory') ||
                     nodeId.includes('Tax') || nodeId.includes('Risk') ||
                     nodeId.includes('HSM') || nodeId.includes('AdvancedSec') ||
                     nodeId.includes('SecMonitoring') || nodeId.includes('Yield') ||
                     nodeId.includes('Airdrops') || nodeId.includes('Listing'))
        ]
        const isAdvancedNode = advancedIndicators.some(Boolean)
        
        if (isAdvancedNode) {
          console.log('🚀 Detected advanced node - Node ID:', nodeId, 'Clean name:', cleanNodeName)
          
          // Build comprehensive list of name variations to try
          const nameVariations = [
            nodeId, // Try node ID first (most reliable)
            cleanNodeName,
            nodeName, // Original node name before cleaning
            cleanNodeName.split(/\s+/)[0], // First word only
            cleanNodeName.replace(/\s+/g, ''), // Remove all spaces
            cleanNodeName.replace(/Controller|Service|C|S$/i, '').trim(), // Remove suffixes
            // Try extracting key words from the name
            cleanNodeName.match(/(?:Margin|Futures|Options|AML|Sanctions|Staking|Lending|ColdWallet|MultiSig|Analytics|TradingAnalytics|BusinessAnalytics|AdminDash|DataWarehouse|Fees|Support|Liquidity|MarketData|Infrastructure|AdvancedOrders|TradingBots|Regulatory|Tax|Risk|HSM|AdvancedSec|SecMonitoring|Yield|Airdrops|Listing)/i)?.[0],
            // Try common patterns
            cleanNodeName.replace(/^.*?(Margin|Futures|Options|AML|Sanctions|Staking|Lending|ColdWallet|MultiSig|TradingAnalytics|BusinessAnalytics|AdminDash|DataWarehouse|Fees|Support|Liquidity|MarketData|Infrastructure|AdvancedOrders|TradingBots|Regulatory|Tax|Risk|HSM|AdvancedSec|SecMonitoring|Yield|Airdrops|Listing).*$/i, '$1'),
          ].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i) // Remove null/undefined and duplicates
          
          console.log('🚀 Trying name variations:', nameVariations)
          
          // Try all variations
          // EDIT MODE: Skip in edit mode
          if (!window.__isEditMode) {
            for (const nameVar of nameVariations) {
              if (!nameVar) continue
              const mapped = mapNodeToLevel(nameVar)
              if (mapped && tasks[mapped]) {
                console.log('✅ Advanced node mapped to Level task:', nameVar, '->', mapped)
                setSelectedTask(mapped)
                setShowTodoPanel(true)
                return
              }
            }
          }
          
          // If still no match, just navigate to advanced diagram
          console.warn('⚠️ Advanced node clicked, no Level task found. Node ID:', nodeId, 'Name:', cleanNodeName, 'Variations tried:', nameVariations)
          navigateToView('advanced')
          return
        }
        
        // THIRD: Check if this is a NAVIGATION node (redirect to other diagrams)
        // These are high-level category boxes that should navigate
        // Be very specific to avoid false matches
        const nodeLower = nodeTextSingleLine.toLowerCase()
        const nodeNameLower = cleanNodeName.toLowerCase()
        
        // Check for exact matches first, then patterns
        if (nodeLower.includes('database') && (nodeLower.includes('81') || nodeLower.includes('tables'))) {
          if (!nodeLower.includes('services') && !nodeLower.includes('service')) {
            console.log('Navigation node clicked: database')
            navigateToView('database')
            return
          }
        }
        
        if ((nodeLower.includes('controllers') || nodeNameLower === 'controllers') && 
            (nodeLower.includes('25+') || nodeLower.includes('25'))) {
          console.log('Navigation node clicked: controllers')
          navigateToView('controllers')
          return
        }
        
        if ((nodeLower.includes('services') || nodeNameLower === 'services') && 
            !nodeLower.includes('database') && !nodeLower.includes('advanced')) {
          // Only navigate to services if it's clearly a services node, not a service name
          if (nodeLower.includes('core services') || nodeLower.includes('wallet services') || 
              nodeLower.includes('service layer') || nodeNameLower === 'services') {
            console.log('Navigation node clicked: services')
            navigateToView('services')
            return
          }
        }
        
        if (nodeLower.includes('flows') || nodeLower.includes('key flows')) {
          console.log('Navigation node clicked: flows')
          navigateToView('flows')
          return
        }
        
        if (nodeLower.includes('external') || nodeLower.includes('integrations')) {
          console.log('Navigation node clicked: external')
          navigateToView('external')
          return
        }
        
        // FOURTH: Map diagram node to Level task (one of the 60 Level tasks)
        // This ensures clicking on diagram nodes opens the correct Level task instead of creating new tasks
        let taskIdToUse = null
        
        // Try multiple variations of the node name
        const nameVariations = [
          cleanNodeName,
          cleanNodeName.split(/\s+/)[0], // First word only
          cleanNodeName.replace(/\s+/g, ''), // Remove all spaces
          cleanNodeName + 'Controller',
          cleanNodeName + 'Service',
          cleanNodeName.replace(/Controller$/i, '').trim() + 'Controller',
          cleanNodeName.replace(/Service$/i, '').trim() + 'Service',
          cleanNodeName.replace(/C$/, 'Controller'),  // AdminC -> AdminController
          cleanNodeName.replace(/S$/, 'Service'),  // OrderS -> OrderService
          // Try removing common prefixes/suffixes
          cleanNodeName.replace(/^Level\s*\d+[:\s]*/i, ''), // Remove "Level 1:" prefix
          cleanNodeName.replace(/\s*\[ADVANCED\]/i, ''), // Remove [ADVANCED] tag
        ]
        
        // First, try direct mapping using mapNodeToLevel function
        for (const nameVar of nameVariations) {
          const mappedLevel = mapNodeToLevel(nameVar)
          if (mappedLevel && tasks[mappedLevel]) {
            taskIdToUse = mappedLevel
            console.log('✅ Mapped via mapNodeToLevel:', nameVar, '->', mappedLevel)
            break
          }
        }
        
        // If direct mapping didn't work, try getOrCreateTask (which also uses mapping internally)
        if (!taskIdToUse) {
          for (const nameVar of nameVariations) {
            // Skip if it's already a Level task ID
            if (nameVar.startsWith('Level') && tasks[nameVar]) {
              taskIdToUse = nameVar
              console.log('✅ Found Level task directly:', nameVar)
              break
            }
            
            // Try getOrCreateTask which will use mapping internally
            try {
              const mappedTask = await getOrCreateTask(nameVar)
              if (mappedTask && mappedTask.id && mappedTask.id.startsWith('Level')) {
                taskIdToUse = mappedTask.id
                console.log('✅ Mapped via getOrCreateTask:', nameVar, '->', taskIdToUse)
                break
              }
            } catch (error) {
              console.warn('Error mapping task:', nameVar, error)
            }
          }
        }
        
        // If we still can't find a Level task, try to find a reasonable fallback
        if (!taskIdToUse) {
          // Try to find any Level task that might be related based on keywords
          const fallbackMapping = {
            'admin': 'Level13_AdminRBAC',
            'customer': 'Level3_CustomerIdentity',
            'user': 'Level3_CustomerIdentity',
            'order': 'Level7_TradingEngine',
            'trade': 'Level7_TradingEngine',
            'wallet': 'Level5_WalletServices',
            'deposit': 'Level5_WalletServices',
            'withdraw': 'Level5_WalletServices',
            'payment': 'Level11_PaymentGateways',
            'gateway': 'Level11_PaymentGateways',
            'blockchain': 'Level6_Blockchain',
            'market': 'Level8_MarketManagement',
            'coin': 'Level8_MarketManagement',
            'email': 'Level4_Notifications',
            'sms': 'Level4_Notifications',
            'notification': 'Level4_Notifications',
            'ticket': 'Level15_SupportContent',
            'blog': 'Level15_SupportContent',
            'gift': 'Level16_Promotional',
            'referral': 'Level16_Promotional',
            'exchange': 'Level14_OTCExchange',
            'role': 'Level13_AdminRBAC',
            'security': 'Level2_DatabaseAuth',
            'auth': 'Level2_DatabaseAuth',
            'jwt': 'Level2_DatabaseAuth',
            'kyc': 'Level12_KYCIdentity',
            'identity': 'Level12_KYCIdentity',
            'finnotech': 'Level12_KYCIdentity',
            'jibit': 'Level12_KYCIdentity',
          }
          
          const lowerName = cleanNodeName.toLowerCase()
          for (const [keyword, levelId] of Object.entries(fallbackMapping)) {
            if (lowerName.includes(keyword) && tasks[levelId]) {
              taskIdToUse = levelId
              console.log('⚠️ Using fallback mapping:', cleanNodeName, '->', levelId, '(keyword:', keyword + ')')
              break
            }
          }
          
          // If still no match, use Level 1 as ultimate fallback
          if (!taskIdToUse && tasks['Level1_ProjectSetup']) {
            taskIdToUse = 'Level1_ProjectSetup'
            console.warn('⚠️ Using ultimate fallback (Level1) for node:', cleanNodeName)
          }
          
          // CRITICAL: Every node MUST have a task - if we still don't have one, create a mapping
          if (!taskIdToUse) {
            console.error('❌ Could not map diagram node to any Level task:', {
              original: nodeName,
              cleaned: cleanNodeName,
              variations: nameVariations,
              nodeId: nodeId
            })
            // Don't return - still try to open something
            // Use Level 1 as absolute last resort
            taskIdToUse = 'Level1_ProjectSetup'
          }
        }
        
        // ENSURE: taskIdToUse is never null - every node must open a task
        if (!taskIdToUse || !tasks[taskIdToUse]) {
          console.error('❌ Invalid taskIdToUse, using Level1 as fallback:', taskIdToUse)
          taskIdToUse = 'Level1_ProjectSetup'
        }
        
        // Set selected node for API Tester - try to find matching nodeDetails key
        let nodeIdForApiTester = null
        
        // Build list of possible task IDs for debugging
        const possibleTaskIds = [taskIdToUse, ...nameVariations.map(v => mapNodeToLevel(v)).filter(Boolean)]
        
        console.log('🔍 Looking for node details:', { nodeName, nodeId, possibleTaskIds, taskIdToUse })
        
        // Clean up node name - remove common prefixes/suffixes and normalize
        const cleanedNodeName = nodeName
          .replace(/^Level\s*\d+[:\s]*/i, '') // Remove "Level 1:" prefix
          .replace(/\s*\[ADVANCED\]/i, '') // Remove [ADVANCED] tag
          .replace(/🚀\s*/g, '') // Remove rocket emoji
          .replace(/\s+/g, '') // Remove spaces
          .trim()
        
        // Build comprehensive list of variations to try
        const variations = []
        
        // Add nodeId first (from Mermaid, e.g., "AdminC", "OrderC")
        if (nodeId) {
          variations.push(nodeId)
          // Expand shortened names (AdminC -> AdminController)
          if (nodeId.endsWith('C') && nodeId.length > 1) {
            variations.push(nodeId.slice(0, -1) + 'Controller')
          }
          if (nodeId.endsWith('S') && nodeId.length > 1) {
            variations.push(nodeId.slice(0, -1) + 'Service')
          }
        }
        
        // Add cleaned node name variations
        variations.push(
          cleanedNodeName,
          cleanedNodeName + 'Controller',
          cleanedNodeName + 'Service',
          cleanedNodeName.replace(/C$/, 'Controller'),
          cleanedNodeName.replace(/S$/, 'Service'),
          cleanedNodeName.replace(/Controller$/, ''),
          cleanedNodeName.replace(/Service$/, ''),
          nodeName.replace(/\s+/g, '') + 'Controller',
          nodeName.replace(/\s+/g, '') + 'Service',
          nodeName.replace(/\s+/g, ''),
          nodeName
        )
        
        // Also try extracting from nodeName if it contains "Controller" or "Service"
        const controllerMatch = nodeName.match(/(\w+)\s*Controller/i)
        if (controllerMatch) {
          variations.push(controllerMatch[1] + 'Controller')
        }
        const serviceMatch = nodeName.match(/(\w+)\s*Service/i)
        if (serviceMatch) {
          variations.push(serviceMatch[1] + 'Service')
        }
        
        // Remove duplicates
        const uniqueVariations = [...new Set(variations.filter(v => v && v.length > 0))]
        
        console.log('🔍 Trying variations:', uniqueVariations)
        
        // Try all variations
        for (const variation of uniqueVariations) {
          const details = getNodeDetails(variation)
          if (details && details.endpoints && details.endpoints.length > 0) {
            nodeIdForApiTester = variation
            console.log('✅ Match found:', variation)
            break
          }
        }
        
        // Try task IDs as last resort (unlikely to have endpoints, but worth checking)
        if (!nodeIdForApiTester) {
          for (const taskId of possibleTaskIds) {
            const details = getNodeDetails(taskId)
            if (details && details.endpoints && details.endpoints.length > 0) {
              nodeIdForApiTester = taskId
              console.log('✅ Match found with taskId:', taskId)
              break
            }
          }
        }
        
        console.log('📌 Final nodeIdForApiTester:', nodeIdForApiTester)
        
        // Set the selected node (use the matched nodeDetails key if found, otherwise null)
        // Only set if we found a match with endpoints, otherwise leave it null so API tester shows empty state
        if (nodeIdForApiTester) {
          setSelectedNode(nodeIdForApiTester)
          console.log('✅ Set selectedNode to:', nodeIdForApiTester)
        } else {
          // Clear selection if no match found
          setSelectedNode(null)
          console.log('⚠️ No matching nodeDetails found for API tester')
        }
        
        // If API Tester is open, just update the selected node and don't open TODO panel
        if (showApiTester) {
          // API Tester will automatically update with the new selectedNode
          return
        }
        
        // EDIT MODE: Don't open task panel in edit mode
        if (window.__isEditMode) {
          return
        }
        
        // Otherwise, open TODO panel with this task
        setSelectedTask(taskIdToUse)
        setShowTodoPanel(true)
      }
      
      // Store handler reference and add listener
      node._clickHandler = newClickHandler
      node.addEventListener('click', newClickHandler, true) // Use capture phase to intercept before Mermaid
      
      // Add hover effect with detailed tooltip
      node.addEventListener('mouseenter', (e) => {
        // Clean up any existing tooltips first
        document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
        
        const rect = node.getBoundingClientRect()
        const textElement = node.querySelector('text, .nodeLabel')
        if (!textElement) return
        
        // Extract text from SVG - handle tspan elements for line breaks
        let nodeText = ''
        const tspans = textElement.querySelectorAll('tspan')
        if (tspans.length > 0) {
          // Get text from each tspan with line breaks preserved
          nodeText = Array.from(tspans).map(t => t.textContent?.trim() || '').join('\n')
        } else {
          nodeText = textElement.textContent?.trim() || ''
        }
        
        // Store original node text before removing emojis (for title extraction)
        const originalNodeText = nodeText
        
        // Remove status emojis for processing, but keep original for title
        nodeText = nodeText.replace(/[✅🔄⏸️🚫]/g, '').trim()
        
        // Extract node name - handle concatenated text like "CoinControllerGET /api/..."
        // Use original text first line to preserve title even with emojis
        let nodeName = originalNodeText.split(/\n|<br\/>|•/)[0].trim()
        // Remove emojis from the extracted name
        nodeName = nodeName.replace(/[✅🔄⏸️🚫]/g, '').trim()
        
        // If the name contains an HTTP method, extract just the part before it
        const methodMatch = nodeName.match(/^(.+?)(GET|POST|PUT|DELETE|PATCH)/)
        if (methodMatch) {
          nodeName = methodMatch[1].trim()
        }
        
        // Store the clean node name for title display
        const displayTitle = nodeName || 'Component'
        
        console.log('=== HOVER DEBUG ===')
        console.log('Full node text:', nodeText.substring(0, 200))
        console.log('Extracted node name:', nodeName)
        
        // Skip legend, labels, and other non-interactive nodes
        const skipKeywords = ['legend', 'project status', 'click components', 'completed', 'in progress', 'not started', 'blocked']
        const shouldSkip = skipKeywords.some(keyword => 
          nodeName.toLowerCase().includes(keyword) || 
          nodeText.toLowerCase().includes(keyword)
        )
        
        if (shouldSkip) {
          return  // Don't show tooltip for these
        }
        
        // Try to find node details or task info with better name matching
        const possibleIds = [
          nodeName,
          nodeName + 'Controller',
          nodeName + 'Service',
          nodeName.replace(/C$/, 'Controller'),  // AdminC -> AdminController
          nodeName.replace(/S$/, 'Service'),  // OrderS -> OrderService
          nodeName.replace(/Controller$/, '') + 'Controller',  // Clean and re-add
          nodeName.replace(/Service$/, '') + 'Service',
          nodeName.replace(/\s+/g, ''),  // Remove all spaces
          // Also try without common prefixes/suffixes
          nodeName.split(/\s+/)[0],  // First word only
          nodeName.split(/\s+/)[0] + 'Controller',
          nodeName.split(/\s+/)[0] + 'Service',
        ]
        
        console.log('Trying to match with IDs:', possibleIds)
        
        let details = null
        let taskInfo = null
        
        // Check for node details (endpoints, etc.)
        for (const id of possibleIds) {
          details = getNodeDetails(id)
          if (details) {
            console.log('✅ Found node details for ID:', id)
            console.log('   Endpoints count:', details.endpoints?.length || 0)
            break
          }
        }
        
        // Check for task info
        for (const id of possibleIds) {
          if (tasks[id]) {
            taskInfo = tasks[id]
            console.log('Found task info for:', id)
            break
          }
        }
        
        // Debug: Log what we're looking for
        if (!details && !taskInfo) {
          console.log('No details found for node:', nodeName, 'Tried IDs:', possibleIds)
        }
        
        // ALWAYS create tooltip - show SOMETHING for every box
        if (details || taskInfo || true) {  // Always show tooltip
          const tooltip = document.createElement('div')
          tooltip.className = 'diagram-tooltip'
          tooltip.style.position = 'fixed'
          
          // Smart positioning: check if there's space on the right
          const spaceOnRight = window.innerWidth - rect.right
          if (spaceOnRight > 500) {
            tooltip.style.left = `${rect.right + 20}px`
          } else {
            // Position on left side if not enough space on right
            tooltip.style.right = `${window.innerWidth - rect.left + 20}px`
          }
          
          // Vertical positioning: try to align with node, but keep on screen
          const preferredTop = rect.top
          tooltip.style.top = `${Math.max(10, Math.min(preferredTop, window.innerHeight - 400))}px`
          
          tooltip.setAttribute('data-tooltip', 'true')
          
          let content = ''
          
          // If we don't have details, extract from node text
          if (!details) {
            // Parse node text for endpoints
            // First try splitting by newlines
            let lines = nodeText.split(/\n/).map(l => l.trim()).filter(l => l)
            const endpoints = []
            
            console.log('Raw node text:', nodeText)
            console.log('Lines after split:', lines)
            
            // If we only have one line but it contains multiple methods, it's concatenated
            if (lines.length === 1 && lines[0].match(/(GET|POST|PUT|DELETE|PATCH)/g)?.length > 1) {
              console.log('Detected concatenated endpoints, splitting...')
              // Split by method keywords - match method followed by path
              const text = lines[0]
              // Match method + path where path is /api/... up to the next method keyword
              const methodPattern = /(GET|POST|PUT|DELETE|PATCH)\s*(\/[^\s]+?)(?=(?:GET|POST|PUT|DELETE|PATCH)|$)/g
              const matches = text.matchAll(methodPattern)
              for (const match of matches) {
                const path = match[2].trim()
                endpoints.push({
                  method: match[1],
                  path: path
                })
                console.log('Found endpoint:', match[1], path)
              }
            } else {
              // Normal line-by-line parsing
              lines.forEach(line => {
                // Match patterns like "POST /api/...", "GET /api/..."
                const endpointMatch = line.match(/(GET|POST|PUT|DELETE|PATCH)\s+(\/[^\s]+)/)
                if (endpointMatch) {
                  endpoints.push({
                    method: endpointMatch[1],
                    path: endpointMatch[2]
                  })
                  console.log('Found endpoint:', endpointMatch[1], endpointMatch[2])
                }
              })
            }
            
            console.log('Total endpoints extracted:', endpoints.length)
            
            if (endpoints.length > 0 || lines.length > 1) {
              details = {
                title: displayTitle || nodeName || 'Component',
                icon: nodeName.includes('Controller') ? '🎛️' : 
                      nodeName.includes('Service') ? '⚙️' : 
                      nodeName.includes('Database') || nodeName.includes('Table') ? '💾' : '📦',
                description: `Component with ${endpoints.length} endpoint${endpoints.length !== 1 ? 's' : ''}`,
                endpoints: endpoints.length > 0 ? endpoints : null
              }
            }
          }
          
          // Show endpoints and component details FIRST (priority)
          if (details) {
            // Ensure we always have a title - use details.title if available, otherwise use displayTitle
            const tooltipTitle = details.title || displayTitle || nodeName || 'Component'
            content += `
              <div class="tooltip-header">
                <span class="tooltip-icon">${details.icon || '📦'}</span>
                <span class="tooltip-title">${tooltipTitle}</span>
              </div>
              <div class="tooltip-description">${details.description || 'Component details'}</div>
            `
            
            // ENDPOINTS - Most important!
            if (details.endpoints && details.endpoints.length > 0) {
              console.log(`Rendering ${details.endpoints.length} endpoints for ${details.title}`)
              content += '<div class="tooltip-section"><strong>📡 Endpoints:</strong></div>'
              
              const endpointsToShow = details.endpoints.slice(0, 10) // Show up to 10
              endpointsToShow.forEach((ep, idx) => {
                const methodColor = {
                  'GET': '#10b981',
                  'POST': '#3b82f6',
                  'PUT': '#f59e0b',
                  'DELETE': '#ef4444',
                  'PATCH': '#a855f7'
                }[ep.method] || '#6b7280'
                
                console.log(`  Endpoint ${idx + 1}: ${ep.method} ${ep.path}`)
                
                content += `
                  <div class="tooltip-endpoint">
                    <span class="endpoint-method" style="background: ${methodColor}">${ep.method}</span>
                    <span class="endpoint-path">${ep.path}</span>
                  </div>
                  ${ep.description ? `<div class="endpoint-desc">→ ${ep.description}</div>` : ''}
                `
              })
              
              if (details.endpoints.length > 10) {
                content += `<div class="endpoint-desc" style="text-align: center; margin-top: 8px; font-style: italic;">... and ${details.endpoints.length - 10} more</div>`
              }
            }
            
            // Services used
            if (details.services && details.services.length > 0) {
              content += `<div class="tooltip-section"><strong>⚙️ Uses:</strong> ${details.services.slice(0, 5).join(', ')}</div>`
            }
            
            // Database tables
            if (details.tables && details.tables.length > 0) {
              content += `<div class="tooltip-section"><strong>💾 Tables:</strong> ${details.tables.slice(0, 5).join(', ')}</div>`
            }
            
            // Schema info for database tables
            if (details.schema) {
              content += `<div class="tooltip-section"><strong>📋 Columns:</strong> ${Object.keys(details.schema).slice(0, 6).join(', ')}</div>`
            }
          }
          
          // Show project status AFTER endpoints
          if (taskInfo) {
            // If we don't have a header yet (no details), add one with the task title
            if (!details) {
              const taskTitle = taskInfo.title || displayTitle || nodeName || 'Component'
              const taskIcon = taskInfo.category === 'Infrastructure' ? '🏗️' :
                              taskInfo.category === 'Core Services' ? '⚙️' :
                              taskInfo.category === 'Business Logic' ? '💼' :
                              taskInfo.category === 'Integration' ? '🔗' :
                              taskInfo.category === 'Security' ? '🔐' :
                              taskInfo.category === 'Documentation' ? '📚' : '📦'
              
              content = `
                <div class="tooltip-header">
                  <span class="tooltip-icon">${taskIcon}</span>
                  <span class="tooltip-title">${taskTitle}</span>
                </div>
                <div class="tooltip-description">${taskInfo.description || 'Task details'}</div>
              ` + content
            }
            
            const statusColors = {
              'completed': '#10b981',
              'in_progress': '#3b82f6',
              'blocked': '#ef4444',
              'not_started': '#6b7280'
            }
            const statusColor = statusColors[taskInfo.status] || '#6b7280'
            const statusEmoji = {
              'completed': '✅',
              'in_progress': '🔄',
              'blocked': '🚫',
              'not_started': '⏸️'
            }[taskInfo.status] || '⏸️'
            
            content += `
              <div class="tooltip-project">
                <div class="project-status" style="color: ${statusColor}">
                  ${statusEmoji} <strong>Status:</strong> ${taskInfo.status.replace(/_/g, ' ').toUpperCase()}
                </div>
                <div class="project-progress">
                  ⏱️ ${taskInfo.actualHours}h / ${taskInfo.estimatedHours}h estimated
                </div>
                <div class="project-hint">💡 Click to manage task</div>
              </div>
            `
          }
          
          // If we have NO content at all, show basic info
          if (!content || content.trim() === '') {
            content = `
              <div class="tooltip-header">
                <span class="tooltip-icon">📦</span>
                <span class="tooltip-title">${displayTitle || nodeName || 'Component'}</span>
              </div>
              <div class="tooltip-description">Component from diagram</div>
              <div class="tooltip-project">
                <div class="project-hint">💡 Click to track progress</div>
              </div>
            `
          }
          
          tooltip.innerHTML = content
          document.body.appendChild(tooltip)
          
          // Store tooltip reference on node for cleanup
          node._tooltip = tooltip
        }
      })
      
      node.addEventListener('mouseleave', (e) => {
        // Remove tooltip
        if (node._tooltip) {
          node._tooltip.remove()
          node._tooltip = null
        }
        
        // Also remove any orphaned tooltips
        document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
      })
    })
  }

  // Pan handling - drag empty space to pan
  const handleMouseDown = (e) => {
    // Clean up tooltips when panning starts
    document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
    
    // EDIT MODE: Start node dragging (only if move mode is active)
    if (isEditMode && isMoving) {
      const node = e.target.closest('g[id*="flowchart"], g[id*="graph"], .node, rect')
      if (node) {
        // Extract node ID for dragging
        let nodeId = node.getAttribute('id') || ''
        const parentGroup = node.closest('g')
        
        // Try to extract from parent group ID (Mermaid format: "flowchart_NodeName_123")
        if (parentGroup) {
          const parentId = parentGroup.getAttribute('id') || ''
          if (parentId.includes('_')) {
            const parts = parentId.split('_')
            if (parts.length >= 2 && (parts[0] === 'flowchart' || parts[0] === 'graph')) {
              const nameIndex = parts.findIndex(p => /^[A-Z]/.test(p))
              if (nameIndex >= 0) {
                nodeId = parts[nameIndex]
              } else if (parts.length >= 2) {
                nodeId = parts[1]
              }
            }
          }
        }
        
        // Also try to get from text content if still no nodeId
        if (!nodeId) {
          const textElement = node.querySelector('text') || parentGroup?.querySelector('text')
          if (textElement) {
            const text = textElement.textContent?.trim() || ''
            nodeId = text.split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g, '')
          }
        }
        
        if (nodeId) {
          console.log('🎯 Starting drag for node:', nodeId)
          setEditingNode(nodeId)
          setIsDragging(true)
          
          // Use SVG's built-in coordinate transformation
          const svgElement = containerRef.current?.querySelector('svg')
          if (svgElement) {
            const nodeGroups = svgElement.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
            for (const group of nodeGroups) {
              const groupId = group.getAttribute('id') || ''
              // Extract node ID from group ID and compare
              const extractedId = extractNodeIdFromMermaidId(groupId)
              if (extractedId === nodeId || groupId.includes(nodeId)) {
                // Get SVG's coordinate transformation matrix
                const svgPoint = svgElement.createSVGPoint()
                svgPoint.x = e.clientX
                svgPoint.y = e.clientY
                
                // Transform screen coordinates to SVG coordinates
                const ctm = svgElement.getScreenCTM()
                if (ctm) {
                  const invertedCTM = ctm.inverse()
                  const svgCoords = svgPoint.matrixTransform(invertedCTM)
                  
                  // Get current node position
                  const transform = group.getAttribute('transform') || ''
                  const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/)
                  if (match) {
                    const nodeX = parseFloat(match[1]) || 0
                    const nodeY = parseFloat(match[2]) || 0
                    
                    // Calculate offset from node to mouse click point
                    const offsetX = svgCoords.x - nodeX
                    const offsetY = svgCoords.y - nodeY
                    
                    // Store for dragging
                    setDragStart({ x: offsetX, y: offsetY })
                    setLastMousePos({ x: e.clientX, y: e.clientY })
                    
                    console.log('📍 Drag start - SVG coords:', svgCoords, 'Node:', { nodeX, nodeY }, 'Offset:', { offsetX, offsetY })
                  }
                } else {
                  // Fallback: use simple calculation
                  const viewportRect = viewportRef.current?.getBoundingClientRect()
                  if (viewportRect) {
                    const scrollX = viewportRef.current?.scrollLeft || 0
                    const scrollY = viewportRef.current?.scrollTop || 0
                    const mouseXInSvg = (e.clientX - viewportRect.left + scrollX) / zoomLevel
                    const mouseYInSvg = (e.clientY - viewportRect.top + scrollY) / zoomLevel
                    
                    const transform = group.getAttribute('transform') || ''
                    const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/)
                    if (match) {
                      const nodeX = parseFloat(match[1]) || 0
                      const nodeY = parseFloat(match[2]) || 0
                      setDragStart({ x: mouseXInSvg - nodeX, y: mouseYInSvg - nodeY })
                      setLastMousePos({ x: e.clientX, y: e.clientY })
                    }
                  }
                }
                break
              }
            }
          }
          
          e.preventDefault()
          e.stopPropagation()
          return
        } else {
          console.warn('⚠️ Could not extract node ID for dragging')
        }
      }
    }
    
    // Don't interfere with node clicks (in non-edit mode or non-move mode)
    const node = e.target.closest('g[id*="flowchart"], g[id*="graph"], .node, rect, path')
    if (node && (!isEditMode || !isMoving)) {
      // Let click handlers work on nodes
      return
    }
    
    // Start panning on empty space with left mouse button
    if (e.button === 0 && viewportRef.current && (!isEditMode || !isMoving)) {
      setIsPanning(true)
      setPanStart({ x: e.clientX, y: e.clientY })
      setPanOffset({ 
        x: viewportRef.current.scrollLeft, 
        y: viewportRef.current.scrollTop 
      })
      e.preventDefault()
    }
  }

  const handleMouseMove = (e) => {
    if (isEditMode && isMoving && editingNode) {
      // Handle node dragging in edit mode (only when move mode is active)
      handleEditNodeDrag(e)
      return
    }
    
    if (isPanning && viewportRef.current && (!isEditMode || !isMoving)) {
      const dx = e.clientX - panStart.x
      const dy = e.clientY - panStart.y
      viewportRef.current.scrollLeft = panOffset.x - dx
      viewportRef.current.scrollTop = panOffset.y - dy
    }
  }

  const handleMouseUp = () => {
    // Save position immediately when mouse is released (not just debounced)
    if (isEditMode && isMoving && editingNode) {
      const svgElement = containerRef.current?.querySelector('svg')
      if (svgElement) {
        const nodeGroups = svgElement.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
        for (const group of nodeGroups) {
          const groupId = group.getAttribute('id') || ''
          // Extract node ID from group ID and compare with editingNode
          const extractedId = extractNodeIdFromMermaidId(groupId)
          if (extractedId === editingNode || groupId.includes(editingNode)) {
            const rect = group.querySelector('rect')
            if (rect) {
              // SIMPLIFIED: Save transform position directly
              const transform = group.getAttribute('transform') || ''
              let nodeX = 0, nodeY = 0
              const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/)
              if (match) {
                nodeX = parseFloat(match[1]) || 0
                nodeY = parseFloat(match[2]) || 0
              } else {
                // Fallback to bbox if no transform
                try {
                  const bbox = rect.getBBox()
                  nodeX = bbox.x
                  nodeY = bbox.y
                } catch (e) {
                  return // Can't get position
                }
              }
              
              const width = parseFloat(rect.getAttribute('width')) || 180
              const height = parseFloat(rect.getAttribute('height')) || 90
              console.log(`💾 Saving position for ${editingNode}: (${nodeX}, ${nodeY})`)
              updateNodePosition(editingNode, nodeX, nodeY, width, height)
            }
            break
          }
        }
      }
    }
    
    setIsDragging(false)
    setIsPanning(false)
    if (isEditMode && isMoving) {
      setEditingNode(null)
    }
  }

  // Pan with middle mouse button or space + drag
  const handlePanStart = (e) => {
    // Middle mouse button (button 1) or space key + mouse
    if (e.button === 1 || (e.button === 0 && e.spaceKey)) {
      e.preventDefault()
      setIsPanning(true)
      setPanStart({ x: e.clientX, y: e.clientY })
      setPanOffset({ x: viewportRef.current?.scrollLeft || 0, y: viewportRef.current?.scrollTop || 0 })
    }
  }
  
  const handlePanMove = (e) => {
    if (isPanning && viewportRef.current) {
      const dx = e.clientX - panStart.x
      const dy = e.clientY - panStart.y
      viewportRef.current.scrollLeft = panOffset.x - dx
      viewportRef.current.scrollTop = panOffset.y - dy
    }
  }
  
  const handlePanEnd = () => {
    setIsPanning(false)
  }

  // ========== EDIT MODE FUNCTIONS ==========
  
  // Update node position in database
  const updateNodePosition = async (nodeId, x, y, width, height) => {
    try {
      const { API_ENDPOINTS } = await import('../config/api')
      
      // Find the node entity from savedDiagram
      const nodeEntity = savedDiagram?.nodeEntities?.find(n => n.nodeId === nodeId)
      if (!nodeEntity) {
        console.warn(`Node entity not found for ${nodeId}`)
        return
      }
      
      // Update node position
      const response = await fetch(`${API_ENDPOINTS.nodeById(nodeEntity.id)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          position: { x, y },
          style: { width, height, ...(nodeEntity.style || {}) }
        })
      })
      
      if (!response.ok) throw new Error('Failed to update node position')
      
      // Update local state
      setSavedDiagram(prev => ({
        ...prev,
        nodeEntities: prev.nodeEntities.map(n => 
          n.nodeId === nodeId 
            ? { ...n, position: { x, y }, style: { ...n.style, width, height } }
            : n
        )
      }))
      
      console.log(`✅ Updated position for node ${nodeId}`)
    } catch (error) {
      console.error('Failed to update node position:', error)
    }
  }
  
  // Update node color in database
  const updateNodeColor = async (nodeId, color) => {
    try {
      const { API_ENDPOINTS } = await import('../config/api')
      
      const nodeEntity = savedDiagram?.nodeEntities?.find(n => n.nodeId === nodeId)
      if (!nodeEntity) {
        console.warn(`Node entity not found for ${nodeId}`)
        return
      }
      
      const response = await fetch(`${API_ENDPOINTS.nodeById(nodeEntity.id)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          style: { ...(nodeEntity.style || {}), fill: color, stroke: color }
        })
      })
      
      if (!response.ok) throw new Error('Failed to update node color')
      
      // Update local state and re-render
      setSavedDiagram(prev => ({
        ...prev,
        nodeEntities: prev.nodeEntities.map(n => 
          n.nodeId === nodeId 
            ? { ...n, style: { ...n.style, fill: color, stroke: color } }
            : n
        )
      }))
      
      // Re-render diagram to show new color
      if (currentDiagram) {
        renderDiagram()
      }
      
      console.log(`✅ Updated color for node ${nodeId} to ${color}`)
    } catch (error) {
      console.error('Failed to update node color:', error)
    }
  }
  
  // Add new node to diagram
  const addNewNode = async () => {
    if (!newNodeData.label.trim()) {
      alert('Please enter a node label')
      return
    }
    
    try {
      const { API_ENDPOINTS, extractNodesFromMermaid } = await import('../utils/diagramBackend')
      
      // Generate unique node ID
      const nodeId = newNodeData.label.replace(/[^a-zA-Z0-9]/g, '_') + '_' + Date.now()
      
      // Create node entity
      const newNode = {
        nodeId: nodeId,
        label: newNodeData.label,
        type: newNodeData.type || 'default',
        position: { x: 100, y: 100 }, // Default position
        style: {
          width: 180,
          height: 90,
          fill: newNodeData.color || '#60a5fa',
          stroke: newNodeData.color || '#60a5fa'
        },
        diagramId: savedDiagram?.dbId || currentView,
        taskNodeId: 'Level1_ProjectSetup' // Default task
      }
      
      // Save to database
      const response = await fetch(API_ENDPOINTS.nodes, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNode)
      })
      
      if (!response.ok) throw new Error('Failed to create node')
      
      // Update Mermaid code to include new node
      const updatedCode = currentDiagram.code + `\n  ${nodeId}["${newNodeData.label}"]`
      
      // Update diagram
      const { saveDiagramToBackend } = await import('../utils/diagramBackend')
      await saveDiagramToBackend(currentView, {
        mermaidCode: updatedCode,
        code: updatedCode
      })
      
      // Reload diagram
      window.dispatchEvent(new Event('diagram-saved'))
      
      setShowAddNodeDialog(false)
      setNewNodeData({ label: '', type: 'default', color: '#60a5fa' })
      
      console.log(`✅ Added new node: ${nodeId}`)
    } catch (error) {
      console.error('Failed to add node:', error)
      alert('Failed to add node: ' + error.message)
    }
  }
  
  // Clear all saved node positions (reset to Mermaid default layout)
  const clearAllPositions = async () => {
    if (!confirm('⚠️ This will clear all saved node positions and reset to default layout. Continue?')) {
      return
    }
    
    try {
      const { API_ENDPOINTS } = await import('../config/api')
      
      if (!savedDiagram?.nodeEntities) {
        alert('No nodes to clear')
        return
      }
      
      let clearedCount = 0
      for (const nodeEntity of savedDiagram.nodeEntities) {
        if (nodeEntity.id && nodeEntity.position) {
          try {
            const response = await fetch(`${API_ENDPOINTS.nodeById(nodeEntity.id)}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                position: null // Clear position
              })
            })
            if (response.ok) {
              clearedCount++
            }
          } catch (error) {
            console.warn(`Failed to clear position for ${nodeEntity.nodeId}:`, error)
          }
        }
      }
      
      // Reload diagram to apply default layout
      window.dispatchEvent(new Event('diagram-saved'))
      alert(`✅ Cleared ${clearedCount} node positions. Diagram will use default layout.`)
    } catch (error) {
      console.error('Failed to clear positions:', error)
      alert('❌ Failed to clear positions: ' + error.message)
    }
  }
  
  // Save all changes to database
  const saveAllChanges = async () => {
    try {
      if (!currentDiagram || !savedDiagram) {
        console.warn('No diagram to save')
        alert('❌ No diagram to save')
        return
      }
      
      const { saveDiagramToBackend, saveNodesToBackend, extractEdgesFromMermaid } = await import('../utils/diagramBackend')
      const { API_ENDPOINTS } = await import('../config/api')
      
      // Get current Mermaid code
      const svgElement = containerRef.current?.querySelector('svg')
      if (!svgElement) {
        console.warn('No SVG element found')
      }
      
      // Update node positions and styles from SVG - get ALL nodes from SVG, not just saved ones
      const nodeGroups = svgElement ? svgElement.querySelectorAll('g[id*="flowchart"], g[id*="graph"]') : []
      const updatedNodes = []
      
      if (svgElement && nodeGroups.length > 0) {
        for (const group of nodeGroups) {
          const groupId = group.getAttribute('id') || ''
          
          // Extract node ID from group ID using helper function
          let nodeId = extractNodeIdFromMermaidId(groupId)
          
          if (!nodeId) {
            // Try to get from text
            const textElement = group.querySelector('text')
            if (textElement) {
              const text = textElement.textContent?.trim() || ''
              nodeId = text.split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g, '')
            }
          }
          
          if (!nodeId) continue
          
          // Find or create node entity
          let nodeEntity = savedDiagram?.nodeEntities?.find(n => n.nodeId === nodeId)
          
          const rect = group.querySelector('rect')
          if (!rect) continue
          
          // SIMPLIFIED: Save transform position directly (not absolute bbox)
          // This is more reliable and matches what we apply back
          const transform = group.getAttribute('transform') || ''
          let x = 0, y = 0
          const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/)
          if (match) {
            x = parseFloat(match[1]) || 0
            y = parseFloat(match[2]) || 0
          } else {
            // No transform - use bbox as fallback
            try {
              const bbox = rect.getBBox()
              x = bbox.x
              y = bbox.y
            } catch (e) {
              // Skip if we can't get position
              continue
            }
          }
          
          const width = parseFloat(rect.getAttribute('width')) || 180
          const height = parseFloat(rect.getAttribute('height')) || 90
          const fill = rect.getAttribute('fill') || rect.style.fill || null
          const stroke = rect.getAttribute('stroke') || rect.style.stroke || null
          
          const updatedNode = {
            ...(nodeEntity || {}),
            nodeId,
            position: { x: Math.round(x), y: Math.round(y) },
            style: {
              ...(nodeEntity?.style || {}),
              width,
              height,
              ...(fill ? { fill } : {}),
              ...(stroke ? { stroke } : {})
            }
          }
          
          // Update node in database
          if (nodeEntity?.id) {
            try {
              const response = await fetch(`${API_ENDPOINTS.nodeById(nodeEntity.id)}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  position: updatedNode.position,
                  style: updatedNode.style
                })
              })
              if (response.ok) {
                updatedNodes.push(updatedNode)
                console.log(`✅ Saved position for ${nodeId}: (${x}, ${y})`)
              } else {
                console.warn(`Failed to save node ${nodeId}:`, response.statusText)
              }
            } catch (error) {
              console.warn(`Failed to update node ${nodeId}:`, error)
            }
          } else {
            console.warn(`Node entity not found for ${nodeId}, skipping save`)
          }
        }
      }
      
      // Save edges
      const edges = extractEdgesFromMermaid(currentDiagram.code || '')
      if (edges.length > 0) {
        await saveDiagramToBackend(currentView, {
          ...currentDiagram,
          edges: edges
        })
        console.log(`✅ Saved ${edges.length} edges`)
      }
      
      // Save diagram metadata
      await saveDiagramToBackend(currentView, {
        title: currentDiagram.title,
        description: currentDiagram.description || '',
        mermaidCode: currentDiagram.code,
        code: currentDiagram.code
      })
      
      // Set flag to apply positions after reload
      window.__shouldApplyPositions = true
      
      // Reload to get updated data
      window.dispatchEvent(new Event('diagram-saved'))
      
      console.log(`✅ All changes saved successfully! (${updatedNodes.length} nodes updated)`)
      alert(`✅ All changes saved successfully! (${updatedNodes.length} nodes updated)`)
    } catch (error) {
      console.error('Failed to save changes:', error)
      alert('❌ Failed to save changes: ' + error.message)
    }
  }
  
  // Add edge between two nodes
  const addEdge = async (sourceNodeId, targetNodeId) => {
    try {
      const { API_ENDPOINTS } = await import('../config/api')
      
      // Check if edge already exists
      const existingEdges = savedDiagram?.edges || []
      const edgeExists = existingEdges.some(e => 
        (e.source === sourceNodeId || e.sourceNodeId === sourceNodeId) &&
        (e.target === targetNodeId || e.targetNodeId === targetNodeId)
      )
      
      if (edgeExists) {
        console.log('Edge already exists')
        return
      }
      
      // Create edge entity
      const newEdge = {
        sourceNodeId: sourceNodeId,
        targetNodeId: targetNodeId,
        type: 'directed',
        diagramId: savedDiagram?.dbId || currentView
      }
      
      // For now, update the diagram's edges array (we'll need an edges API later)
      const updatedEdges = [...(savedDiagram?.edges || []), {
        source: sourceNodeId,
        target: targetNodeId,
        sourceNodeId: sourceNodeId,
        targetNodeId: targetNodeId,
        type: 'directed'
      }]
      
      // Update Mermaid code
      const updatedCode = currentDiagram.code + `\n  ${sourceNodeId} --> ${targetNodeId}`
      
      const { saveDiagramToBackend } = await import('../utils/diagramBackend')
      await saveDiagramToBackend(currentView, {
        mermaidCode: updatedCode,
        code: updatedCode,
        edges: updatedEdges
      })
      
      // Reload diagram
      window.dispatchEvent(new Event('diagram-saved'))
      
      setIsConnecting(false)
      setConnectionStart(null)
      
      console.log(`✅ Added edge: ${sourceNodeId} --> ${targetNodeId}`)
    } catch (error) {
      console.error('Failed to add edge:', error)
      alert('Failed to add edge: ' + error.message)
    }
  }
  
  // Helper function to extract actual node ID from Mermaid group ID
  const extractNodeIdFromMermaidId = (mermaidId) => {
    if (!mermaidId) return null
    
    // Handle both underscore and hyphen formats: "flowchart_NodeName_123" or "flowchart-NodeName-0"
    let parts = []
    if (mermaidId.includes('_')) {
      parts = mermaidId.split('_')
    } else if (mermaidId.includes('-')) {
      parts = mermaidId.split('-')
    } else {
      return mermaidId // Already a simple ID
    }
    
    if (parts.length >= 2 && (parts[0] === 'flowchart' || parts[0] === 'graph')) {
      // Find the first part that starts with a capital letter (the node name)
      const nameIndex = parts.findIndex(p => /^[A-Z]/.test(p))
      if (nameIndex >= 0) {
        return parts[nameIndex]
      } else if (parts.length >= 2) {
        return parts[1] // Fallback to second part
      }
    }
    
    return null
  }
  
  // Handle node click in edit mode
  const handleEditNodeClick = (e, nodeElement) => {
    if (!isEditMode) return
    
    e.stopPropagation()
    
    // Extract node ID from Mermaid structure
    let nodeId = nodeElement.getAttribute('id') || ''
    const parentGroup = nodeElement.closest('g')
    
    // Try to extract from parent group ID (Mermaid format: "flowchart_NodeName_123" or "flowchart-NodeName-0")
    if (parentGroup) {
      const parentId = parentGroup.getAttribute('id') || ''
      const extractedId = extractNodeIdFromMermaidId(parentId)
      if (extractedId) {
        nodeId = extractedId
      }
    }
    
    // Also try to get from text content
    if (!nodeId || nodeId.includes('flowchart') || nodeId.includes('graph')) {
      const textElement = nodeElement.querySelector('text') || parentGroup?.querySelector('text')
      if (textElement) {
        const text = textElement.textContent?.trim() || ''
        nodeId = text.split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g, '')
      }
    }
    
    if (!nodeId) {
      console.warn('Could not extract node ID for editing')
      return
    }
    
    if (isConnecting) {
      // Edge connection mode
      if (connectionStart) {
        if (connectionStart !== nodeId) {
          addEdge(connectionStart, nodeId)
        } else {
          setIsConnecting(false)
          setConnectionStart(null)
        }
      } else {
        setConnectionStart(nodeId)
        console.log('🔗 Connection started from:', nodeId)
      }
    } else if (isMoving) {
      // Move mode: start dragging
      setEditingNode(nodeId)
      setIsDragging(true)
    } else {
      // Node selection for editing (show color picker)
      setEditingNode(nodeId)
      setShowColorPicker(nodeId)
    }
  }
  
  // Handle node drag in edit mode - using SVG coordinate transformation
  const handleEditNodeDrag = (e) => {
    if (!isEditMode || !isMoving || !editingNode) return
    
    e.stopPropagation()
    e.preventDefault()
    
    const svgElement = containerRef.current?.querySelector('svg')
    if (!svgElement) return
    
    // Find the node group by editingNode ID
    const nodeGroups = svgElement.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
    let nodeGroup = null
    for (const group of nodeGroups) {
      const groupId = group.getAttribute('id') || ''
      // Extract node ID from group ID and compare with editingNode
      const extractedId = extractNodeIdFromMermaidId(groupId)
      if (extractedId === editingNode || groupId.includes(editingNode)) {
        nodeGroup = group
        break
      }
    }
    
    if (!nodeGroup) {
      console.warn('⚠️ Node group not found for:', editingNode)
      return
    }
    
    // Use SVG's built-in coordinate transformation
    const svgPoint = svgElement.createSVGPoint()
    svgPoint.x = e.clientX
    svgPoint.y = e.clientY
    
    const ctm = svgElement.getScreenCTM()
    let mouseXInSvg, mouseYInSvg
    
    if (ctm) {
      // Transform screen coordinates to SVG coordinates using SVG's transformation matrix
      const invertedCTM = ctm.inverse()
      const svgCoords = svgPoint.matrixTransform(invertedCTM)
      mouseXInSvg = svgCoords.x
      mouseYInSvg = svgCoords.y
    } else {
      // Fallback: manual calculation
      const viewportRect = viewportRef.current?.getBoundingClientRect()
      if (!viewportRect) return
      
      const scrollX = viewportRef.current.scrollLeft || 0
      const scrollY = viewportRef.current.scrollTop || 0
      mouseXInSvg = (e.clientX - viewportRect.left + scrollX) / zoomLevel
      mouseYInSvg = (e.clientY - viewportRect.top + scrollY) / zoomLevel
    }
    
    // Get drag offset (where on the node the mouse clicked)
    const offsetX = dragStart.x || 0
    const offsetY = dragStart.y || 0
    
    // Calculate node position: mouse position minus the offset
    const nodeX = mouseXInSvg - offsetX
    const nodeY = mouseYInSvg - offsetY
    
    // Update node position
    nodeGroup.setAttribute('transform', `translate(${nodeX}, ${nodeY})`)
    
    // Get current dimensions (for edge updates)
    const rect = nodeGroup.querySelector('rect')
    if (!rect) return
    
    const width = parseFloat(rect.getAttribute('width')) || 180
    const height = parseFloat(rect.getAttribute('height')) || 90
    
    // Update all edges connected to this node (call immediately on every move)
    console.log(`🔄 Updating edges for node: ${editingNode} at (${nodeX + width/2}, ${nodeY + height/2})`)
    // Use requestAnimationFrame to ensure DOM is updated before calculating edges
    requestAnimationFrame(() => {
      updateEdgesForNode(svgElement, editingNode, nodeX + width/2, nodeY + height/2)
    })
    
    // Save position to database (debounced)
    clearTimeout(window.nodePositionSaveTimeout)
    window.nodePositionSaveTimeout = setTimeout(() => {
      // Save transform position directly (simpler and more reliable)
      console.log(`💾 Saving position for ${editingNode}: (${nodeX}, ${nodeY})`)
      updateNodePosition(editingNode, nodeX, nodeY, width, height)
    }, 500)
    
    // Also save immediately on mouse up (handled in handleMouseUp)
  }
  
  // Update edge paths when a node is moved
  const updateEdgesForNode = (svgElement, nodeId, nodeCenterX, nodeCenterY) => {
    // Get all node groups and build a comprehensive map
    const allNodeGroups = svgElement.querySelectorAll('g[id*="flowchart"]')
    const nodeMap = new Map() // Maps node name to { group, x, y, width, height, centerX, centerY }
    
    // Build a map of all node positions and groups
    allNodeGroups.forEach(group => {
      const groupId = group.getAttribute('id') || ''
      const rect = group.querySelector('rect')
      if (rect) {
        const transform = group.getAttribute('transform') || ''
        const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/)
        if (match) {
          const x = parseFloat(match[1]) || 0
          const y = parseFloat(match[2]) || 0
          const width = parseFloat(rect.getAttribute('width')) || 180
          const height = parseFloat(rect.getAttribute('height')) || 90
          const centerX = x + width/2
          const centerY = y + height/2
          
          // Extract node name from group ID - try multiple strategies
          let nodeName = ''
          
          // Strategy 1: Extract from group ID (e.g., "flowchart_NodeName_123" -> "NodeName")
          if (groupId.includes('_')) {
            const parts = groupId.split('_')
            const nameIndex = parts.findIndex(p => /^[A-Z]/.test(p))
            if (nameIndex >= 0) {
              nodeName = parts[nameIndex]
            } else if (parts.length >= 2) {
              nodeName = parts[1]
            }
          }
          
          // Strategy 2: Try to get from text content if group ID didn't work
          if (!nodeName) {
            const textElement = group.querySelector('text')
            if (textElement) {
              const text = textElement.textContent?.trim() || ''
              nodeName = text.split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g, '')
            }
          }
          
          if (nodeName) {
            nodeMap.set(nodeName, {
              group,
              x,
              y,
              width,
              height,
              centerX,
              centerY
            })
          }
        }
      }
    })
    
    // Get edges from saved diagram data if available
    const diagramEdges = savedDiagram?.edges || []
    
    // Find all path elements that are edges
    const allPaths = svgElement.querySelectorAll('path[class*="flowchart"], path[class*="edge"], path')
    
    allPaths.forEach((path, pathIndex) => {
      // Skip paths that are clearly not edges (like node borders)
      const pathClass = path.getAttribute('class') || ''
      if (pathClass.includes('node') && !pathClass.includes('edge')) {
        return
      }
      
      const pathData = path.getAttribute('d') || ''
      if (!pathData || pathData.length < 10) return
      
      // Extract first and last points from path
      const firstPointMatch = pathData.match(/M\s*([\d.-]+)\s*([\d.-]+)/)
      const lastPointMatch = pathData.match(/(?:L|M)\s*([\d.-]+)\s*([\d.-]+)(?:\s|$)/g)
      
      if (!firstPointMatch) return
      
      const startPoint = {
        x: parseFloat(firstPointMatch[1]),
        y: parseFloat(firstPointMatch[2])
      }
      
      // Get last point - extract all L/M commands and take the last one
      let endPoint = startPoint
      if (lastPointMatch && lastPointMatch.length > 0) {
        const lastCommand = lastPointMatch[lastPointMatch.length - 1]
        const lastMatch = lastCommand.match(/(?:L|M)\s*([\d.-]+)\s*([\d.-]+)/)
        if (lastMatch) {
          endPoint = {
            x: parseFloat(lastMatch[1]),
            y: parseFloat(lastMatch[2])
          }
        }
      }
      
      // Check if this path connects to our moved node
      const startDist = Math.sqrt(Math.pow(startPoint.x - nodeCenterX, 2) + Math.pow(startPoint.y - nodeCenterY, 2))
      const endDist = Math.sqrt(Math.pow(endPoint.x - nodeCenterX, 2) + Math.pow(endPoint.y - nodeCenterY, 2))
      const threshold = 250 // Increased threshold
      
      if (startDist < threshold || endDist < threshold) {
        // Find which nodes this edge connects
        let sourceNode = null
        let targetNode = null
        
        // Try to find source and target nodes
        nodeMap.forEach((nodeData, name) => {
          const distToStart = Math.sqrt(Math.pow(nodeData.centerX - startPoint.x, 2) + Math.pow(nodeData.centerY - startPoint.y, 2))
          const distToEnd = Math.sqrt(Math.pow(nodeData.centerX - endPoint.x, 2) + Math.pow(nodeData.centerY - endPoint.y, 2))
          
          // If this node is close to start point, it's likely the source
          if (distToStart < threshold && (!sourceNode || distToStart < Math.sqrt(Math.pow(sourceNode.centerX - startPoint.x, 2) + Math.pow(sourceNode.centerY - startPoint.y, 2)))) {
            sourceNode = { name, ...nodeData }
          }
          
          // If this node is close to end point, it's likely the target
          if (distToEnd < threshold && (!targetNode || distToEnd < Math.sqrt(Math.pow(targetNode.centerX - endPoint.x, 2) + Math.pow(targetNode.centerY - endPoint.y, 2)))) {
            targetNode = { name, ...nodeData }
          }
        })
        
        // If we found both nodes, update the path
        if (sourceNode && targetNode) {
          // Calculate connection points on node boundaries (not centers)
          const sourceConnPoint = getConnectionPoint(
            sourceNode.x, sourceNode.y, sourceNode.width, sourceNode.height,
            targetNode.centerX, targetNode.centerY
          )
          const targetConnPoint = getConnectionPoint(
            targetNode.x, targetNode.y, targetNode.width, targetNode.height,
            sourceNode.centerX, sourceNode.centerY
          )
          
          // Create path connecting the two nodes
          const d = `M ${sourceConnPoint.x} ${sourceConnPoint.y} L ${targetConnPoint.x} ${targetConnPoint.y}`
          path.setAttribute('d', d)
          
          console.log(`🔗 Updated edge: ${sourceNode.name} -> ${targetNode.name}`)
        } else if (startDist < threshold || endDist < threshold) {
          // If we only found one node (the moved one), try to find the other from edges data
          const movedNode = startDist < endDist ? 
            nodeMap.get(nodeId) : 
            nodeMap.get(nodeId)
          
          if (movedNode) {
            // Look for edges in saved diagram data
            const connectedEdges = diagramEdges.filter(e => 
              (e.source === nodeId || e.sourceNodeId === nodeId) ||
              (e.target === nodeId || e.targetNodeId === nodeId)
            )
            
            for (const edge of connectedEdges) {
              const otherNodeId = (edge.source === nodeId || edge.sourceNodeId === nodeId) 
                ? (edge.target || edge.targetNodeId)
                : (edge.source || edge.sourceNodeId)
              
              const otherNode = nodeMap.get(otherNodeId)
              if (otherNode) {
                const sourceNode = (edge.source === nodeId || edge.sourceNodeId === nodeId) ? movedNode : otherNode
                const targetNode = (edge.source === nodeId || edge.sourceNodeId === nodeId) ? otherNode : movedNode
                
                const sourceConnPoint = getConnectionPoint(
                  sourceNode.x, sourceNode.y, sourceNode.width, sourceNode.height,
                  targetNode.centerX, targetNode.centerY
                )
                const targetConnPoint = getConnectionPoint(
                  targetNode.x, targetNode.y, targetNode.width, targetNode.height,
                  sourceNode.centerX, sourceNode.centerY
                )
                
                const d = `M ${sourceConnPoint.x} ${sourceConnPoint.y} L ${targetConnPoint.x} ${targetConnPoint.y}`
                path.setAttribute('d', d)
                
                console.log(`🔗 Updated edge from data: ${sourceNode.name || nodeId} -> ${targetNode.name || otherNodeId}`)
                break
              }
            }
          }
        }
      }
    })
  }
  
  // Helper function to calculate connection point on node boundary
  const getConnectionPoint = (nodeX, nodeY, nodeWidth, nodeHeight, targetX, targetY) => {
    const centerX = nodeX + nodeWidth / 2
    const centerY = nodeY + nodeHeight / 2
    
    // Calculate angle from node center to target
    const dx = targetX - centerX
    const dy = targetY - centerY
    const angle = Math.atan2(dy, dx)
    
    // Calculate intersection point on node rectangle
    const halfWidth = nodeWidth / 2
    const halfHeight = nodeHeight / 2
    
    // Find which edge the line intersects
    const tan = Math.abs(Math.tan(angle))
    const cot = Math.abs(1 / Math.tan(angle))
    
    let x, y
    
    if (Math.abs(dx) > Math.abs(dy)) {
      // Intersects left or right edge
      x = dx > 0 ? nodeX + nodeWidth : nodeX
      y = centerY + (x - centerX) * Math.tan(angle)
      
      // Clamp to node bounds
      if (y < nodeY) y = nodeY
      if (y > nodeY + nodeHeight) y = nodeY + nodeHeight
    } else {
      // Intersects top or bottom edge
      y = dy > 0 ? nodeY + nodeHeight : nodeY
      x = centerX + (y - centerY) / Math.tan(angle)
      
      // Clamp to node bounds
      if (x < nodeX) x = nodeX
      if (x > nodeX + nodeWidth) x = nodeX + nodeWidth
    }
    
    return { x, y }
  }

  const { getProgress } = useTodoStore()
  const progress = getProgress()

  return (
    <div 
      className={`diagram-canvas ${isEditMode ? 'edit-mode' : ''} ${isConnecting ? 'is-connecting' : ''} ${isMoving ? 'is-moving' : ''}`}
    >
      {/* Edit Mode Toolbar */}
      {isEditMode && (
        <div className="edit-toolbar">
          <div className="edit-toolbar-section">
            <button
              className={`edit-toolbar-btn ${isMoving ? 'active' : ''}`}
              onClick={() => {
                setIsMoving(!isMoving)
                setIsConnecting(false)
                setConnectionStart(null)
              }}
              title="Move nodes (click and drag nodes to reposition)"
            >
              <span>↔️</span>
              <span>Move</span>
            </button>
            <button
              className={`edit-toolbar-btn ${isConnecting ? 'active' : ''}`}
              onClick={() => {
                setIsConnecting(!isConnecting)
                setIsMoving(false)
                setConnectionStart(null)
              }}
              title="Connect nodes (click two nodes to create an edge)"
            >
              <span>🔗</span>
              <span>Connect</span>
            </button>
            <button
              className="edit-toolbar-btn"
              onClick={() => setShowAddNodeDialog(true)}
              title="Add new node"
            >
              <span>➕</span>
              <span>Add Node</span>
            </button>
          </div>
          <div className="edit-toolbar-section">
            <button
              className="edit-toolbar-btn save-btn"
              onClick={saveAllChanges}
              title="Save all changes to database"
            >
              <span>💾</span>
              <span>Save</span>
            </button>
            <button
              className="edit-toolbar-btn"
              onClick={clearAllPositions}
              title="Clear all saved positions and reset to default layout"
              style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', fontSize: '12px' }}
            >
              <span>🔄</span>
              <span>Reset Layout</span>
            </button>
          </div>
        </div>
      )}
      
      {/* Add Node Dialog */}
      {showAddNodeDialog && (
        <div className="edit-dialog-overlay" onClick={() => setShowAddNodeDialog(false)}>
          <div className="edit-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Node</h3>
            <div className="edit-dialog-content">
              <label>
                Node Label:
                <input
                  type="text"
                  value={newNodeData.label}
                  onChange={(e) => setNewNodeData({ ...newNodeData, label: e.target.value })}
                  placeholder="Enter node name"
                  autoFocus
                />
              </label>
              <label>
                Type:
                <select
                  value={newNodeData.type}
                  onChange={(e) => setNewNodeData({ ...newNodeData, type: e.target.value })}
                >
                  <option value="default">Default</option>
                  <option value="controller">Controller</option>
                  <option value="service">Service</option>
                  <option value="database">Database</option>
                </select>
              </label>
              <label>
                Color:
                <input
                  type="color"
                  value={newNodeData.color}
                  onChange={(e) => setNewNodeData({ ...newNodeData, color: e.target.value })}
                />
              </label>
            </div>
            <div className="edit-dialog-actions">
              <button onClick={addNewNode}>Add</button>
              <button onClick={() => setShowAddNodeDialog(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Color Picker Dialog */}
      {showColorPicker && (
        <div className="edit-dialog-overlay" onClick={() => setShowColorPicker(null)}>
          <div className="edit-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>Change Node Color</h3>
            <div className="edit-dialog-content">
              <label>
                Color:
                <input
                  type="color"
                  defaultValue="#60a5fa"
                  onChange={(e) => {
                    updateNodeColor(showColorPicker, e.target.value)
                    setShowColorPicker(null)
                  }}
                />
              </label>
              <div className="color-presets">
                {['#60a5fa', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'].map(color => (
                  <button
                    key={color}
                    className="color-preset"
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      updateNodeColor(showColorPicker, color)
                      setShowColorPicker(null)
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="edit-dialog-actions">
              <button onClick={() => setShowColorPicker(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Project Status Legend */}
      <div className={`diagram-legend ${isLegendOpen ? 'open' : 'closed'}`}>
        <button 
          className="legend-toggle"
          onClick={toggleLegend}
          title={isLegendOpen ? 'Close project status' : 'Open project status'}
        >
          <span className="legend-toggle-icon">
            {isLegendOpen ? '▼' : '▶'}
          </span>
          <span className="legend-title">Project Status</span>
          <span className="legend-badge">{progress.percentage}%</span>
        </button>
        
        {isLegendOpen && (
          <div className="legend-content">
            <div className="legend-items">
              <div className="legend-item">
                <span>
                  <span className="legend-emoji">✅</span>
                  Completed
                </span>
                <span style={{ fontWeight: 600, color: '#10b981' }}>{progress.completed}</span>
              </div>
              <div className="legend-item">
                <span>
                  <span className="legend-emoji">🔄</span>
                  In Progress
                </span>
                <span style={{ fontWeight: 600, color: '#3b82f6' }}>{progress.inProgress}</span>
              </div>
              <div className="legend-item">
                <span>
                  <span className="legend-emoji">⏸️</span>
                  Not Started
                </span>
                <span style={{ fontWeight: 600, color: '#6b7280' }}>{progress.notStarted}</span>
              </div>
              <div className="legend-item">
                <span>
                  <span className="legend-emoji">🚫</span>
                  Blocked
                </span>
                <span style={{ fontWeight: 600, color: '#ef4444' }}>{progress.blocked}</span>
              </div>
            </div>
            <div className="legend-progress">
              <div className="legend-progress-bar">
                <div 
                  className="legend-progress-fill" 
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>
              <span className="legend-progress-text">{progress.percentage}%</span>
            </div>
            <div className="legend-hint">Click components to track</div>
          </div>
        )}
      </div>

      <div 
        ref={viewportRef}
        className={`canvas-viewport ${isPanning ? 'panning' : ''} ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onContextMenu={(e) => e.preventDefault()} // Prevent context menu on right click
        style={{ cursor: isPanning ? 'grabbing' : 'grab' }}
      >
        <div 
          className="canvas-content"
          style={{ 
            transform: `scale(${zoomLevel})`,
            transformOrigin: '50% 50%',
            transition: isPanning ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          {isLoading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <div className="loading-text">Rendering {currentDiagram?.title || currentView}...</div>
            </div>
          )}
          {!currentDiagram && !isLoading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <div className="loading-text">Loading diagram...</div>
            </div>
          )}
          <div 
            ref={containerRef}
            className="diagram-container interactive"
          />
        </div>
      </div>
    </div>
  )
}

export default DiagramCanvas
