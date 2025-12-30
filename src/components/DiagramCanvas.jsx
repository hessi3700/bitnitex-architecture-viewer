import React, { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import { useAppStore } from '../store/AppStore'
import { useTodoStore } from '../store/TodoStore'
import { getDiagram } from '../data/diagramRegistry'
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
    padding: 40,
    nodeSpacing: 100,
    rankSpacing: 150,
    diagramPadding: 30
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
  const { currentView, zoomLevel, setSelectedNode, navigateToView, showApiTester } = useAppStore()
  const { tasks, setShowTodoPanel, setSelectedTask, getOrCreateTask } = useTodoStore()
  const containerRef = useRef(null)
  const viewportRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 })
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

  const currentDiagram = getDiagram(currentView)
  const [savedDiagram, setSavedDiagram] = useState(null)

  // Load saved diagram from backend and seed if needed
  useEffect(() => {
    const loadSavedDiagram = async () => {
      try {
        console.log('🔄 Loading saved diagram for:', currentView)
        const response = await fetch(API_ENDPOINTS.diagramByDiagramId(currentView))
        if (response.ok) {
          const data = await response.json()
          console.log('✅ Loaded saved diagram:', {
            hasNodes: !!data.nodes,
            nodesCount: Array.isArray(data.nodes) ? data.nodes.length : 0,
            hasEdges: !!data.edges,
            edgesCount: Array.isArray(data.edges) ? data.edges.length : 0,
            hasCustomCode: !!data.customMermaidCode
          })
          // Load saved diagram if it has nodes/edges OR customMermaidCode
          if (data.customMermaidCode || (data.nodes && Array.isArray(data.nodes) && data.nodes.length > 0)) {
            setSavedDiagram(data)
          } else {
            console.log('ℹ️ No saved nodes/edges or custom code, using original')
            setSavedDiagram(null)
            // Auto-save diagram and extract nodes if not saved
            await autoSaveDiagram(currentView)
          }
        } else {
          console.log('ℹ️ No saved diagram found, seeding...')
          setSavedDiagram(null)
          // Auto-save diagram and extract nodes
          await autoSaveDiagram(currentView)
        }
      } catch (error) {
        console.error('❌ Error loading saved diagram:', error)
        setSavedDiagram(null)
        // Try to auto-save on error
        await autoSaveDiagram(currentView).catch(() => {})
      }
    }
    loadSavedDiagram()
    
    // Listen for diagram save events
    const handleDiagramSaved = () => {
      console.log('💾 Diagram saved event received, reloading...')
      loadSavedDiagram()
    }
    window.addEventListener('diagram-saved', handleDiagramSaved)
    
    return () => {
      window.removeEventListener('diagram-saved', handleDiagramSaved)
    }
  }, [currentView])
  
  // Auto-save diagram and extract nodes
  const autoSaveDiagram = async (diagramId) => {
    try {
      const { saveDiagramToBackend, extractNodesFromMermaid, saveNodesToBackend } = await import('../utils/diagramBackend')
      const currentDiagram = getDiagram(diagramId)
      if (!currentDiagram) return
      
      // Save diagram
      const savedDiagram = await saveDiagramToBackend(diagramId, {
        title: currentDiagram.title,
        description: currentDiagram.description || currentDiagram.subtitle || '',
        code: currentDiagram.code,
        mermaidCode: currentDiagram.code
      })
      
      // Extract and save nodes
      const nodes = extractNodesFromMermaid(currentDiagram.code || '', savedDiagram.id)
      if (nodes.length > 0) {
        await saveNodesToBackend(savedDiagram.id, nodes)
        console.log(`✅ Auto-saved ${nodes.length} nodes for diagram: ${diagramId}`)
      }
    } catch (error) {
      console.error('Failed to auto-save diagram:', error)
    }
  }

  useEffect(() => {
    renderDiagram()
    
    // Cleanup function
    return () => {
      // Remove all tooltips when component unmounts or re-renders
      document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
    }
  }, [currentView, tasks, savedDiagram])

  const renderDiagram = async () => {
    if (!containerRef.current || !currentDiagram) return

    setIsLoading(true)
    
    // Clean up any tooltips
    document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
    
    try {
      // Clear previous diagram
      containerRef.current.innerHTML = ''
      
      // Create unique ID for this diagram
      const diagramId = `diagram-${Date.now()}`
      
      // Use custom Mermaid code if saved, otherwise check for saved nodes/edges, otherwise use default
      let diagramCode = currentDiagram.code
      if (savedDiagram?.customMermaidCode) {
        // Use explicitly saved custom Mermaid code
        diagramCode = savedDiagram.customMermaidCode
        console.log('📝 Using customMermaidCode for diagram:', currentView)
      } else if (savedDiagram?.nodes && Array.isArray(savedDiagram.nodes) && savedDiagram.nodes.length > 0) {
        // Merge saved nodes/edges with original structure
        console.log('🔄 Merging saved nodes/edges with original:', savedDiagram.nodes.length, 'nodes,', savedDiagram.edges?.length || 0, 'edges')
        const merged = convertNodesEdgesToMermaid(savedDiagram.nodes, savedDiagram.edges, currentDiagram.code)
        if (merged) {
          diagramCode = merged
          console.log('✅ Using merged Mermaid code (preserves original structure)')
        } else {
          console.log('⚠️ Merge returned empty, using original')
        }
      } else {
        console.log('📋 Using original diagram from registry:', currentView)
      }
      // Otherwise use original structure from diagramRegistry
      
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
      
      // Replace the div content with the rendered SVG
      mermaidDiv.innerHTML = svg
      
      // Make sure SVG fills the container properly and is larger
      const svgElement = mermaidDiv.querySelector('svg')
      if (svgElement) {
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
          
          // Make text bigger in SVG (only for actual content)
          const currentSize = text.style.fontSize || '16px'
          const size = parseFloat(currentSize)
          text.style.fontSize = `${size * 1.4}px`
          text.style.fontWeight = '600'
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
        
        // Make nodes bigger with padding and rounded corners
        const rectElements = svgElement.querySelectorAll('rect')
        rectElements.forEach(rect => {
          const width = parseFloat(rect.getAttribute('width'))
          const height = parseFloat(rect.getAttribute('height'))
          if (width && height && width < 800) {
            rect.setAttribute('width', width * 1.2)
            rect.setAttribute('height', height * 1.2)
            rect.setAttribute('rx', '12')
            rect.setAttribute('ry', '12')
          }
        })
      }

      // Add click handlers after rendering
      setTimeout(() => {
        addClickHandlers()
        setIsLoading(false)
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
      
      node.addEventListener('click', async (e) => {
        e.stopPropagation()
        
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
        
        // If the name contains an HTTP method, extract just the part before it
        const methodMatch = nodeName.match(/^(.+?)(GET|POST|PUT|DELETE|PATCH)/)
        if (methodMatch) {
          nodeName = methodMatch[1].trim()
        }
        
        console.log('Clicked node:', nodeName)
        
        // FIRST: Skip legend, labels, and other non-interactive nodes
        const skipKeywords = ['legend', 'project status', 'click components', 'completed', 'in progress', 'not started', 'blocked']
        const shouldSkip = skipKeywords.some(keyword => 
          nodeName.toLowerCase().includes(keyword) || 
          nodeText.toLowerCase().includes(keyword)
        )
        
        if (shouldSkip) {
          return  // Don't handle clicks or hovers on these
        }
        
        // SECOND: Check if this is a NAVIGATION node (redirect to other diagrams)
        // These are high-level category boxes that should navigate
        const navigationPatterns = {
          'controllers': /controllers.*25\+|25\+.*controllers/i,
          'services': /services|core services|wallet services|identity kyc|notifications|content support/i,
          'database': /database.*81|81.*database|database.*tables/i,
          'flows': /flows|key flows/i,
          'external': /external|integrations/i
        }
        
        for (const [view, pattern] of Object.entries(navigationPatterns)) {
          if (pattern.test(nodeTextSingleLine)) {
            console.log('Navigation node clicked:', view)
            navigateToView(view)
            return
          }
        }
        
        // SECOND: Map diagram node to Level task (one of the 30 Level tasks)
        // This ensures clicking on diagram nodes opens the correct Level task instead of creating new tasks
        let taskIdToUse = null
        
        // Try to map node name to a Level task
        const possibleTaskIds = [
          nodeName,
          nodeName + 'Controller',
          nodeName + 'Service',
          nodeName.replace(/\s+/g, ''),
          nodeName.replace(/C$/, 'Controller'),  // AdminC -> AdminController
          nodeName.replace(/S$/, 'Service'),  // OrderS -> OrderService
          nodeName.replace('Controller', '').trim() + 'Controller',
          nodeName.replace('Service', '').trim() + 'Service',
        ]
        
        // Try to find existing Level task by mapping node name
        for (const taskId of possibleTaskIds) {
          // Check if it's already a Level task
          if (taskId.startsWith('Level') && tasks[taskId]) {
            taskIdToUse = taskId
            console.log('Found Level task:', taskId)
            break
          }
          
          // Try to get mapped Level task using getOrCreateTask (which now maps to Level tasks)
          const mappedTask = await getOrCreateTask(taskId)
          if (mappedTask && mappedTask.id && mappedTask.id.startsWith('Level')) {
            taskIdToUse = mappedTask.id
            console.log('Mapped to Level task:', taskIdToUse, 'from node:', nodeName)
            break
          }
        }
        
        // If we still can't find a Level task, don't create a new one - just return
        if (!taskIdToUse) {
          console.warn('Could not map diagram node to any Level task:', nodeName)
          return // Don't open TODO panel if we can't map to a Level task
        }
        
        // Set selected node for API Tester - try to find matching nodeDetails key
        let nodeIdForApiTester = null
        // First try the possible task IDs
        for (const taskId of possibleTaskIds) {
          const details = getNodeDetails(taskId)
          if (details && details.endpoints && details.endpoints.length > 0) {
            nodeIdForApiTester = taskId
            break
          }
        }
        // If no match found, try variations of the node name
        if (!nodeIdForApiTester) {
          const variations = [
            nodeName + 'Controller',
            nodeName + 'Service',
            nodeName.replace(/C$/, 'Controller'),
            nodeName.replace(/S$/, 'Service'),
            nodeName.replace(/\s+/g, ''),
            nodeName
          ]
          for (const variation of variations) {
            const details = getNodeDetails(variation)
            if (details && details.endpoints && details.endpoints.length > 0) {
              nodeIdForApiTester = variation
              break
            }
          }
        }
        // Set the selected node (use the matched nodeDetails key if found, otherwise use taskId)
        setSelectedNode(nodeIdForApiTester || taskIdToUse)
        
        // If API Tester is open, just update the selected node and don't open TODO panel
        if (showApiTester) {
          // API Tester will automatically update with the new selectedNode
          return
        }
        
        // Otherwise, open TODO panel with this task
        setSelectedTask(taskIdToUse)
        setShowTodoPanel(true)
      })
      
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

  // Pan handling
  const handleMouseDown = (e) => {
    // Clean up tooltips when panning starts
    document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
    
    if (e.button === 0) {
      setIsDragging(true)
      setDragStart({ x: e.clientX, y: e.clientY })
      setScrollPos({ 
        x: viewportRef.current.scrollLeft, 
        y: viewportRef.current.scrollTop 
      })
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    
    const dx = e.clientX - dragStart.x
    const dy = e.clientY - dragStart.y
    
    viewportRef.current.scrollLeft = scrollPos.x - dx
    viewportRef.current.scrollTop = scrollPos.y - dy
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Zoom with mouse wheel
  const handleWheel = (e) => {
    // Clean up tooltips when scrolling
    document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
    
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault()
    }
  }

  const { getProgress } = useTodoStore()
  const progress = getProgress()

  return (
    <div 
      className="diagram-canvas"
      onWheel={handleWheel}
    >
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
        className={`canvas-viewport ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          className="canvas-content"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {isLoading && (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <div className="loading-text">Rendering {currentDiagram.title}...</div>
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
