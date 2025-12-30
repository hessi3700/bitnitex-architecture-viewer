import React, { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import { useAppStore } from '../store/AppStore'
import { useTodoStore } from '../store/TodoStore'
import { getDiagram } from '../data/diagramRegistry' // Only for fallback/seeding
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
  const { currentView, zoomLevel, setSelectedNode, navigateToView, showApiTester } = useAppStore()
  const { tasks, setShowTodoPanel, setSelectedTask, getOrCreateTask, mapNodeToLevel } = useTodoStore()
  const containerRef = useRef(null)
  const viewportRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
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

  // Load diagram - use registry as primary, DB for persistence
  useEffect(() => {
    const loadDiagram = async () => {
      setIsLoading(true)
      setCurrentDiagram(null)
      setSavedDiagram(null)
      
      try {
        // PRIMARY: Use registry (always works, always has code)
        const registryDiagram = getDiagram(currentView)
        if (!registryDiagram) {
          console.error('❌ Diagram not found in registry:', currentView)
          setIsLoading(false)
          return
        }
        
        console.log('✅ Using diagram from registry:', currentView)
        setCurrentDiagram(registryDiagram)
        
        // Try to load nodes/edges from DB in background (non-blocking)
        try {
          const { loadNodesFromBackend, loadEdgesFromBackend } = await import('../utils/diagramBackend')
          const response = await fetch(API_ENDPOINTS.diagramByDiagramId(currentView))
          if (response.ok) {
            const data = await response.json()
            
            // Load nodes from Node entity table
            let nodeEntities = []
            try {
              nodeEntities = await loadNodesFromBackend(data.id || currentView)
            } catch (error) {
              // Ignore errors
            }
            
            // Load edges
            let edges = []
            try {
              edges = await loadEdgesFromBackend(currentView)
            } catch (error) {
              edges = data.edges || []
            }
            
            // Set saved diagram data (for node/edge persistence)
            if (nodeEntities.length > 0 || edges.length > 0) {
              setSavedDiagram({
                ...data,
                nodes: nodeEntities.length > 0 ? nodeEntities : (data.nodes || []),
                edges: edges,
                nodeEntities: nodeEntities
              })
            }
            
            // If no nodes in DB, extract and save them (background, non-blocking)
            if (nodeEntities.length === 0 && registryDiagram.code) {
              setTimeout(() => {
                autoSaveDiagram(currentView).catch(() => {})
              }, 1000)
            }
          }
        } catch (error) {
          // Ignore DB errors, just use registry
          console.warn('Could not load from DB, using registry only:', error)
        }
      } catch (error) {
        console.error('❌ Error loading diagram from database:', error)
        // Fallback to registry
        const fallbackDiagram = getDiagram(currentView)
        if (fallbackDiagram) {
          setCurrentDiagram(fallbackDiagram)
          setSavedDiagram(null)
        }
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
  
  // Auto-save diagram and extract nodes
  const autoSaveDiagram = async (diagramId) => {
    try {
      const { saveDiagramToBackend, extractNodesFromMermaid, saveNodesToBackend, loadDiagramFromBackend } = await import('../utils/diagramBackend')
      
      // Load diagram from DB first
      let diagram = await loadDiagramFromBackend(diagramId)
      
      // If not in DB, use registry as fallback for seeding
      if (!diagram) {
        const fallbackDiagram = getDiagram(diagramId)
        if (!fallbackDiagram) {
          console.error('❌ Diagram not found in DB or registry:', diagramId)
          return
        }
        diagram = fallbackDiagram
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

  useEffect(() => {
    if (currentDiagram) {
      renderDiagram()
    }
    
    // Cleanup function
    return () => {
      // Remove all tooltips when component unmounts or re-renders
      document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
    }
  }, [currentView, tasks, savedDiagram, currentDiagram])

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
        console.error('❌ No diagram code available, trying registry fallback')
        // Last resort: try registry
        const fallbackDiagram = getDiagram(currentView)
        if (fallbackDiagram && fallbackDiagram.code) {
          diagramCode = fallbackDiagram.code
          console.log('✅ Using registry code as fallback')
        } else {
          console.error('❌ No diagram code available anywhere')
          setIsLoading(false)
          return
        }
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
            // Just style it better
            clusterRect.setAttribute('stroke-width', '3')
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
        
        // Also find large rectangles that are cluster boxes (fallback)
        const allRects = svgElement.querySelectorAll('rect')
        allRects.forEach(rect => {
          const width = parseFloat(rect.getAttribute('width')) || 0
          const height = parseFloat(rect.getAttribute('height')) || 0
          
          // Large rectangles that aren't inside node groups are likely cluster boxes
          const parentGroup = rect.closest('g')
          const isNodeRect = parentGroup && (
            parentGroup.id?.includes('flowchart') || 
            parentGroup.id?.includes('graph') ||
            parentGroup.querySelector('text')?.textContent?.includes('<br/>')
          )
          
          // If it's a large rect and not a node, it's probably a cluster
          // DON'T shrink it - just style it
          if (width > 400 && height > 300 && !isNodeRect) {
            rect.setAttribute('stroke-width', '3')
            rect.setAttribute('stroke', '#60a5fa')
            rect.setAttribute('fill-opacity', '0.15')
            rect.setAttribute('rx', '8')
            rect.setAttribute('ry', '8')
          }
        })
        
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
        const nodeGroups = svgElement.querySelectorAll('g[id*="flowchart"], g[id*="graph"]')
        
        // Apply styling to nodes - ensure they're properly sized
        nodeGroups.forEach(nodeGroup => {
          // Get all rects in this node group
          const allRects = nodeGroup.querySelectorAll('rect')
          
          // Find the main node rect (usually the largest one, or the one with the node class)
          let mainRect = null
          let maxArea = 0
          
          allRects.forEach(rect => {
            // Skip if this rect is part of a cluster/subgraph (those are handled separately)
            const parent = rect.closest('g')
            if (parent && (parent.classList?.contains('cluster') || parent.getAttribute('class')?.includes('cluster'))) {
              return
            }
            
            // Check if this is a node rect (not a background or border-only rect)
            const width = parseFloat(rect.getAttribute('width')) || 0
            const height = parseFloat(rect.getAttribute('height')) || 0
            const area = width * height
            
            // The main node rect is usually the largest visible rect
            // Also check if it has fill (not just stroke)
            const fill = rect.getAttribute('fill')
            const fillOpacity = parseFloat(rect.getAttribute('fill-opacity') || '1')
            
            // Prefer rects with actual fill (not transparent)
            if (area > maxArea && (fill && fill !== 'none' && fillOpacity > 0.1)) {
              maxArea = area
              mainRect = rect
            }
          })
          
          // Fallback: if no main rect found, use the first/largest one
          if (!mainRect && allRects.length > 0) {
            allRects.forEach(rect => {
              const width = parseFloat(rect.getAttribute('width')) || 0
              const height = parseFloat(rect.getAttribute('height')) || 0
              const area = width * height
              if (area > maxArea) {
                maxArea = area
                mainRect = rect
              }
            })
          }
          
          if (!mainRect) return
          
          // Remove any duplicate/overlapping rects (keep only the main one)
          allRects.forEach(rect => {
            if (rect !== mainRect) {
              const rectX = parseFloat(rect.getAttribute('x')) || 0
              const rectY = parseFloat(rect.getAttribute('y')) || 0
              const rectWidth = parseFloat(rect.getAttribute('width')) || 0
              const rectHeight = parseFloat(rect.getAttribute('height')) || 0
              
              const mainX = parseFloat(mainRect.getAttribute('x')) || 0
              const mainY = parseFloat(mainRect.getAttribute('y')) || 0
              const mainWidth = parseFloat(mainRect.getAttribute('width')) || 0
              const mainHeight = parseFloat(mainRect.getAttribute('height')) || 0
              
              // If this rect overlaps significantly with the main rect, remove it
              const overlapX = Math.max(0, Math.min(rectX + rectWidth, mainX + mainWidth) - Math.max(rectX, mainX))
              const overlapY = Math.max(0, Math.min(rectY + rectHeight, mainY + mainHeight) - Math.max(rectY, mainY))
              const overlapArea = overlapX * overlapY
              const rectArea = rectWidth * rectHeight
              
              // If more than 80% overlap, it's likely a duplicate
              if (overlapArea > rectArea * 0.8 && rectArea < mainWidth * mainHeight) {
                rect.remove()
              }
            }
          })
          
          // Get current size
          let currentWidth = parseFloat(mainRect.getAttribute('width')) || 200
          let currentHeight = parseFloat(mainRect.getAttribute('height')) || 100
          
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
          
          mainRect.setAttribute('width', currentWidth)
          mainRect.setAttribute('height', currentHeight)
          
          // Add rounded corners (only if not already set)
          if (!mainRect.getAttribute('rx')) {
            mainRect.setAttribute('rx', '8')
          }
          if (!mainRect.getAttribute('ry')) {
            mainRect.setAttribute('ry', '8')
          }
          
          // Ensure stroke is set properly (but don't override if already set by Mermaid)
          const currentStroke = mainRect.getAttribute('stroke')
          if (!currentStroke || currentStroke === 'none') {
            mainRect.setAttribute('stroke', '#60a5fa')
          }
          
          // Set stroke-width only if not already set (Mermaid sets it via theme)
          if (!mainRect.getAttribute('stroke-width')) {
            mainRect.setAttribute('stroke-width', '2')
          }
        })
        
        // Extract and save node positions after rendering
        setTimeout(async () => {
          await extractAndSaveNodePositions(svgElement, currentView)
        }, 1000)
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
      const interceptMermaidClicks = () => {
        // Override hashchange to intercept Mermaid clicks
        const originalHashChange = window.onhashchange
        window.addEventListener('hashchange', (e) => {
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
        }, true)
      }
      
      // Add click handlers after rendering
      setTimeout(() => {
        interceptMermaidClicks()
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

  // Pan handling - drag empty space to pan
  const handleMouseDown = (e) => {
    // Clean up tooltips when panning starts
    document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
    
    // Don't interfere with node clicks
    const node = e.target.closest('g[id*="flowchart"], g[id*="graph"], .node, rect, path')
    if (node) {
      // Let click handlers work on nodes
      return
    }
    
    // Start panning on empty space with left mouse button
    if (e.button === 0 && viewportRef.current) {
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
    if (isPanning && viewportRef.current) {
      const dx = e.clientX - panStart.x
      const dy = e.clientY - panStart.y
      viewportRef.current.scrollLeft = panOffset.x - dx
      viewportRef.current.scrollTop = panOffset.y - dy
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsPanning(false)
  }

  // Enhanced zoom with mouse wheel (Ctrl/Cmd + Wheel or just Wheel)
  const handleWheel = (e) => {
    // Clean up tooltips when scrolling
    document.querySelectorAll('.diagram-tooltip').forEach(t => t.remove())
    
    // Zoom with Ctrl/Cmd + Wheel or just Wheel (if not over a node)
    if (e.ctrlKey || e.metaKey || !e.target.closest('g[id*="flowchart"], g[id*="graph"]')) {
      e.preventDefault()
      
      const delta = e.deltaY > 0 ? -0.1 : 0.1
      const newZoom = Math.max(0.3, Math.min(3, zoomLevel + delta))
      
      // Zoom towards mouse position
      if (viewportRef.current && containerRef.current) {
        const rect = viewportRef.current.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        
        const zoomChange = newZoom / zoomLevel
        const scrollX = (mouseX - viewportRef.current.scrollLeft) * (1 - zoomChange)
        const scrollY = (mouseY - viewportRef.current.scrollTop) * (1 - zoomChange)
        
        setZoomLevel(newZoom)
        
        // Adjust scroll to zoom towards mouse position
        setTimeout(() => {
          if (viewportRef.current) {
            viewportRef.current.scrollLeft += scrollX
            viewportRef.current.scrollTop += scrollY
          }
        }, 0)
      } else {
        setZoomLevel(newZoom)
      }
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
        className={`canvas-viewport ${isPanning ? 'panning' : ''} ${isDragging ? 'dragging' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        onContextMenu={(e) => e.preventDefault()} // Prevent context menu on right click
        style={{ cursor: isPanning ? 'grabbing' : 'grab' }}
      >
        <div 
          className="canvas-content"
          style={{ 
            transform: `scale(${zoomLevel})`,
            transformOrigin: '0 0',
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
