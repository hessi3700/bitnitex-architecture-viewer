import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useAppStore } from '../store/AppStore'
import { getDiagram } from '../data/diagramRegistry'
import { API_ENDPOINTS } from '../config/api'
import './DiagramEditor.css'

// Connection Preview Component
const ConnectionPreview = ({ startNode, canvasRef }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [canvasRef])

  const x1 = startNode.x + startNode.width / 2
  const y1 = startNode.y + startNode.height / 2

  return (
    <svg className="connection-preview" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1000 }}>
      <line
        x1={x1}
        y1={y1}
        x2={mousePos.x}
        y2={mousePos.y}
        stroke="#10b981"
        strokeWidth="2"
        strokeDasharray="5,5"
        className="connection-line"
      />
    </svg>
  )
}

const InlineDiagramEditor = ({ canvasRef, viewportRef }) => {
  const { currentView, setShowDiagramEditor } = useAppStore()
  const [nodes, setNodes] = useState([])
  const [edges, setEdges] = useState([])
  const [selectedNode, setSelectedNode] = useState(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectionStart, setConnectionStart] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [showAddNodeDialog, setShowAddNodeDialog] = useState(false)
  const [newNodeData, setNewNodeData] = useState({ label: '', type: 'default', parent: null })
  const [showDeleteWarning, setShowDeleteWarning] = useState(null)
  const [hoveredEdge, setHoveredEdge] = useState(null)
  const [showParentDialog, setShowParentDialog] = useState(null)
  const [showResetWarning, setShowResetWarning] = useState(false)
  const [viewportOffset, setViewportOffset] = useState({ x: 0, y: 0 })

  const currentDiagram = getDiagram(currentView)

  // Listen for toolbar events
  useEffect(() => {
    const handleAddNode = () => setShowAddNodeDialog(true)
    const handleConnect = () => {
      if (isConnecting) {
        cancelConnection()
      } else {
        setIsConnecting(true)
      }
    }
    const handleReset = () => setShowResetWarning(true)
    const handleSave = () => saveDiagram()

    window.addEventListener('editor-add-node', handleAddNode)
    window.addEventListener('editor-connect-nodes', handleConnect)
    window.addEventListener('editor-reset', handleReset)
    window.addEventListener('editor-save', handleSave)

    return () => {
      window.removeEventListener('editor-add-node', handleAddNode)
      window.removeEventListener('editor-connect-nodes', handleConnect)
      window.removeEventListener('editor-reset', handleReset)
      window.removeEventListener('editor-save', handleSave)
    }
  }, [isConnecting])

  // Update viewport offset on scroll
  useEffect(() => {
    if (!viewportRef.current) return

    const updateOffset = () => {
      setViewportOffset({
        x: viewportRef.current?.scrollLeft || 0,
        y: viewportRef.current?.scrollTop || 0
      })
    }

    viewportRef.current.addEventListener('scroll', updateOffset)
    updateOffset()

    return () => {
      viewportRef.current?.removeEventListener('scroll', updateOffset)
    }
  }, [viewportRef])

  useEffect(() => {
    loadDiagram()
  }, [currentView])

  const loadDiagram = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(API_ENDPOINTS.diagramByDiagramId(currentView))
      if (response.ok) {
        const data = await response.json()
        if (data.nodes && data.edges && data.nodes.length > 0) {
          // Always re-parse from Mermaid to get correct structure with <br/> tags
          parseMermaidToNodes()
          // After parsing, update positions from saved data
          setTimeout(() => {
            setNodes(prevNodes => {
              const nodeMap = new Map(prevNodes.map(n => [n.id, n]))
              data.nodes.forEach(savedNode => {
                const parsedNode = nodeMap.get(savedNode.id)
                if (parsedNode) {
                  parsedNode.x = savedNode.x || parsedNode.x
                  parsedNode.y = savedNode.y || parsedNode.y
                  parsedNode.locked = savedNode.locked || false
                  parsedNode.parent = savedNode.parent || null
                }
              })
              return Array.from(nodeMap.values())
            })
            setEdges(data.edges)
          }, 100)
        } else {
          parseMermaidToNodes()
        }
      } else {
        parseMermaidToNodes()
      }
    } catch (error) {
      console.error('Error loading diagram:', error)
      parseMermaidToNodes()
    } finally {
      setIsLoading(false)
    }
  }

  const parseMermaidToNodes = () => {
    if (!currentDiagram?.code) return

    const code = currentDiagram.code
    const nodeMap = new Map()
    const edgeList = []

    const nodeRegex = /(\w+)\[["']?([^"'\]]+)["']?\]/g
    let match
    const allNodeIds = new Set()

    while ((match = nodeRegex.exec(code)) !== null) {
      const id = match[1]
      let label = match[2]
      const originalLabel = label
      const displayLabel = label.replace(/<br\s*\/?>/gi, '\n').trim()
      
      let type = 'default'
      const labelLower = label.toLowerCase()
      if (labelLower.includes('controller')) {
        type = 'controller'
      } else if (labelLower.includes('service')) {
        type = 'service'
      } else if (labelLower.includes('database') || labelLower.includes('table')) {
        type = 'database'
      } else if (labelLower.includes('external') || labelLower.includes('api') || labelLower.includes('gateway')) {
        type = 'external'
      } else if (labelLower.includes('wallet') || labelLower.includes('payment')) {
        type = 'service'
      } else if (labelLower.includes('blockchain')) {
        type = 'external'
      } else if (labelLower.includes('notification')) {
        type = 'service'
      }

      const lines = displayLabel.split('\n')
      const maxLineLength = Math.max(...lines.map(l => l.length), 10)
      const lineCount = lines.length

      allNodeIds.add(id)
      nodeMap.set(id, {
        id,
        label: displayLabel,
        originalLabel: originalLabel,
        width: Math.max(180, maxLineLength * 7 + 40),
        height: Math.max(90, lineCount * 24 + 50),
        type,
        parent: null,
        locked: false
      })
    }

    const nodeCount = nodeMap.size
    const cols = Math.ceil(Math.sqrt(nodeCount))
    const rows = Math.ceil(nodeCount / cols)
    const spacingX = 280
    const spacingY = 220
    const startX = 150
    const startY = 150

    let index = 0
    nodeMap.forEach((node, id) => {
      const col = index % cols
      const row = Math.floor(index / cols)
      node.x = startX + col * spacingX
      node.y = startY + row * spacingY
      index++
    })

    const edgeRegex = /(\w+)\s*-->\s*(?:\|.*?\|\s*)?(\w+)/g
    while ((match = edgeRegex.exec(code)) !== null) {
      const source = match[1]
      const target = match[2]
      
      if (allNodeIds.has(source) && allNodeIds.has(target)) {
        const exists = edgeList.some(
          e => (e.source === source && e.target === target) ||
               (e.source === target && e.target === source)
        )
        if (!exists) {
          edgeList.push({
            id: `edge-${edgeList.length}`,
            source,
            target
          })
        }
      }
    }

    setNodes(Array.from(nodeMap.values()))
    setEdges(edgeList)
  }

  const saveDiagram = async () => {
    try {
      const validNodeIds = new Set(nodes.map(n => n.id))
      const validEdges = edges.filter(edge => {
        const sourceExists = validNodeIds.has(edge.source)
        const targetExists = validNodeIds.has(edge.target)
        if (!sourceExists || !targetExists) {
          console.warn(`Removing invalid edge: ${edge.id}`)
          return false
        }
        return true
      })

      const nodesForSave = nodes.map(node => ({
        ...node,
        label: node.originalLabel || node.label.replace(/\n/g, '<br/>')
      }))

      const diagramData = {
        diagramId: currentView,
        title: currentDiagram?.title || currentView,
        description: currentDiagram?.description || '',
        mermaidCode: currentDiagram?.code || '',
        nodes: nodesForSave || [],
        edges: validEdges || [],
        metadata: {
          zoom: 1,
          pan: { x: 0, y: 0 }
        }
      }

      const response = await fetch(API_ENDPOINTS.diagramByDiagramId(currentView), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(diagramData)
      })

      if (response.ok) {
        window.dispatchEvent(new CustomEvent('diagram-saved'))
        alert('✅ Diagram saved successfully!')
      } else {
        const createResponse = await fetch(API_ENDPOINTS.diagrams, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(diagramData)
        })
        
        if (createResponse.ok) {
          window.dispatchEvent(new CustomEvent('diagram-saved'))
          alert('✅ Diagram saved successfully!')
        }
      }
    } catch (error) {
      console.error('Error saving diagram:', error)
      alert(`❌ Error saving diagram: ${error.message}`)
    }
  }

  // Calculate node positions relative to viewport
  const getNodePosition = useCallback((node) => {
    if (!viewportRef.current || !canvasRef.current) {
      return { x: node.x, y: node.y }
    }
    const viewportRect = viewportRef.current.getBoundingClientRect()
    const canvasRect = canvasRef.current.getBoundingClientRect()
    return {
      x: node.x - viewportOffset.x + (canvasRect.left - viewportRect.left),
      y: node.y - viewportOffset.y + (canvasRect.top - viewportRect.top)
    }
  }, [viewportRef, canvasRef, viewportOffset])

  const handleNodeMouseDown = (e, node) => {
    e.stopPropagation()
    if (node.locked && !isConnecting) {
      return
    }
    if (isConnecting) {
      if (connectionStart && connectionStart.id !== node.id) {
        const edgeExists = edges.some(
          edge => (edge.source === connectionStart.id && edge.target === node.id) ||
                  (edge.source === node.id && edge.target === connectionStart.id)
        )
        if (!edgeExists) {
          const newEdge = {
            id: `edge-${Date.now()}`,
            source: connectionStart.id,
            target: node.id
          }
          setEdges([...edges, newEdge])
        }
        setIsConnecting(false)
        setConnectionStart(null)
      } else if (connectionStart && connectionStart.id === node.id) {
        cancelConnection()
      }
    } else {
      setSelectedNode(node)
      setIsDragging(true)
      const nodePos = getNodePosition(node)
      setDragOffset({
        x: e.clientX - nodePos.x,
        y: e.clientY - nodePos.y
      })
    }
  }

  const handleMouseMove = useCallback((e) => {
    if (isDragging && selectedNode) {
      // Calculate new position in diagram coordinates (not viewport)
      let newX = e.clientX - dragOffset.x
      let newY = e.clientY - dragOffset.y

      // Convert from screen coordinates to diagram coordinates
      if (viewportRef.current && canvasRef.current) {
        const viewportRect = viewportRef.current.getBoundingClientRect()
        const canvasRect = canvasRef.current.getBoundingClientRect()
        newX = newX - (canvasRect.left - viewportRect.left) + viewportOffset.x
        newY = newY - (canvasRect.top - viewportRect.top) + viewportOffset.y
      }

      const node = nodes.find(n => n.id === selectedNode.id)
      if (node && node.parent) {
        const parent = nodes.find(n => n.id === node.parent)
        if (parent) {
          const padding = 10
          const minX = parent.x + padding
          const minY = parent.y + padding
          const maxX = parent.x + parent.width - node.width - padding
          const maxY = parent.y + parent.height - node.height - padding
          
          newX = Math.max(minX, Math.min(maxX, newX))
          newY = Math.max(minY, Math.min(maxY, newY))
        }
      } else {
        newX = Math.max(0, newX)
        newY = Math.max(0, newY)
      }

      setNodes(prevNodes =>
        prevNodes.map(node =>
          node.id === selectedNode.id
            ? { ...node, x: newX, y: newY }
            : node
        )
      )
    }
  }, [isDragging, selectedNode, dragOffset, nodes, viewportRef, canvasRef, viewportOffset])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setSelectedNode(null)
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const handleAddNode = () => {
    if (!newNodeData.label.trim()) {
      alert('Please enter a node label')
      return
    }

    const existingNodes = nodes
    let newX = 200
    let newY = 200
    let attempts = 0
    const minDistance = 200

    while (attempts < 50) {
      const tooClose = existingNodes.some(n => {
        const dx = n.x - newX
        const dy = n.y - newY
        return Math.sqrt(dx * dx + dy * dy) < minDistance
      })
      if (!tooClose) break
      newX = Math.random() * 800 + 100
      newY = Math.random() * 600 + 100
      attempts++
    }

    const lines = newNodeData.label.split('\n')
    const maxLineLength = Math.max(...lines.map(l => l.length), 10)
    const lineCount = lines.length

    const newNode = {
      id: `node-${Date.now()}`,
      label: newNodeData.label,
      originalLabel: newNodeData.label.replace(/\n/g, '<br/>'),
      x: newX,
      y: newY,
      width: Math.max(180, maxLineLength * 7 + 40),
      height: Math.max(90, lineCount * 24 + 50),
      type: newNodeData.type,
      parent: newNodeData.parent || null,
      locked: false
    }

    if (newNode.parent) {
      const parent = nodes.find(n => n.id === newNode.parent)
      if (parent) {
        newNode.x = parent.x + 20
        newNode.y = parent.y + 20
      }
    }

    setNodes([...nodes, newNode])
    setShowAddNodeDialog(false)
    setNewNodeData({ label: '', type: 'default', parent: null })
  }

  const handleDeleteNode = (nodeId) => {
    const connectedEdges = edges.filter(e => e.source === nodeId || e.target === nodeId)
    
    if (connectedEdges.length > 0) {
      setShowDeleteWarning({ nodeId, edgeCount: connectedEdges.length })
    } else {
      confirmDelete(nodeId)
    }
  }

  const confirmDelete = (nodeId) => {
    setNodes(prevNodes => prevNodes.filter(n => n.id !== nodeId))
    setEdges(prevEdges => prevEdges.filter(e => e.source !== nodeId && e.target !== nodeId))
    setShowDeleteWarning(null)
  }

  const handleDeleteEdge = (edgeId) => {
    setEdges(prevEdges => prevEdges.filter(e => e.id !== edgeId))
  }

  const toggleNodeLock = (nodeId) => {
    setNodes(prevNodes =>
      prevNodes.map(node =>
        node.id === nodeId
          ? { ...node, locked: !node.locked }
          : node
      )
    )
  }

  const setNodeParent = (nodeId, parentId) => {
    setNodes(prevNodes =>
      prevNodes.map(node =>
        node.id === nodeId
          ? { ...node, parent: parentId || null }
          : node
      )
    )
  }

  const resetToDefault = async () => {
    parseMermaidToNodes()
    
    setTimeout(async () => {
      try {
        const diagramData = {
          diagramId: currentView,
          title: currentDiagram?.title || currentView,
          description: currentDiagram?.description || '',
          mermaidCode: currentDiagram?.code || '',
          customMermaidCode: null,
          nodes: [],
          edges: [],
          metadata: {
            zoom: 1,
            pan: { x: 0, y: 0 }
          }
        }

        const response = await fetch(API_ENDPOINTS.diagramByDiagramId(currentView), {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(diagramData)
        })

        if (response.ok) {
          window.dispatchEvent(new CustomEvent('diagram-saved'))
          alert('✅ Diagram reset to default successfully!')
        } else {
          const createResponse = await fetch(API_ENDPOINTS.diagrams, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(diagramData)
          })
          
          if (createResponse.ok) {
            window.dispatchEvent(new CustomEvent('diagram-saved'))
            alert('✅ Diagram reset to default successfully!')
          }
        }
      } catch (error) {
        console.error('Error resetting diagram:', error)
        alert('⚠️ Diagram reset locally, but failed to save to database.')
      }
    }, 100)
    
    setShowResetWarning(false)
  }

  const startConnection = (nodeId) => {
    const node = nodes.find(n => n.id === nodeId)
    if (node) {
      if (isConnecting && connectionStart && connectionStart.id === nodeId) {
        cancelConnection()
      } else {
        setIsConnecting(true)
        setConnectionStart(node)
      }
    }
  }

  const cancelConnection = () => {
    setIsConnecting(false)
    setConnectionStart(null)
  }

  const getNodeColor = (type) => {
    const colors = {
      default: '#1e3a5f',
      controller: '#3b82f6',
      service: '#10b981',
      database: '#ef4444',
      external: '#8b5cf6'
    }
    return colors[type] || colors.default
  }

  if (isLoading) {
    return null
  }

  return (
    <div className="inline-diagram-editor" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 100 }}>
      {/* Render edges */}
      <svg className="editor-edges-layer" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}>
        {edges.map(edge => {
          const sourceNode = nodes.find(n => n.id === edge.source)
          const targetNode = nodes.find(n => n.id === edge.target)
          if (!sourceNode || !targetNode) return null

          const sourcePos = getNodePosition(sourceNode)
          const targetPos = getNodePosition(targetNode)
          const x1 = sourcePos.x + sourceNode.width / 2
          const y1 = sourcePos.y + sourceNode.height / 2
          const x2 = targetPos.x + targetNode.width / 2
          const y2 = targetPos.y + targetNode.height / 2
          const midX = (x1 + x2) / 2
          const midY = (y1 + y2) / 2
          const isHovered = hoveredEdge === edge.id

          return (
            <g 
              key={edge.id}
              onMouseEnter={() => setHoveredEdge(edge.id)}
              onMouseLeave={() => setHoveredEdge(null)}
              style={{ pointerEvents: 'all' }}
            >
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isHovered ? "#ef4444" : "#60a5fa"}
                strokeWidth={isHovered ? "3.5" : "2.5"}
                strokeOpacity="0.8"
                markerEnd="url(#editor-arrowhead)"
                style={{ pointerEvents: 'none' }}
              />
              <circle
                cx={midX}
                cy={midY}
                r={isHovered ? "16" : "12"}
                fill="#ef4444"
                stroke="#fff"
                strokeWidth="2.5"
                className="edge-delete-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  handleDeleteEdge(edge.id)
                }}
                onMouseDown={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
                style={{ 
                  cursor: 'pointer', 
                  transition: 'r 0.2s ease',
                  pointerEvents: 'all'
                }}
                title="Click to delete connection"
              />
              {isHovered && (
                <text
                  x={midX}
                  y={midY - 22}
                  textAnchor="middle"
                  fill="#ef4444"
                  fontSize="13"
                  fontWeight="bold"
                  pointerEvents="none"
                  style={{ userSelect: 'none' }}
                >
                  Delete
                </text>
              )}
            </g>
          )
        })}
        <defs>
          <marker
            id="editor-arrowhead"
            markerWidth="12"
            markerHeight="12"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 12 3.5, 0 7" fill="#60a5fa" stroke="#60a5fa" strokeWidth="0.5" />
          </marker>
        </defs>
      </svg>

      {/* Render nodes */}
      {nodes
        .sort((a, b) => {
          if (a.parent && !b.parent) return 1
          if (!a.parent && b.parent) return -1
          return 0
        })
        .map(node => {
          const children = nodes.filter(n => n.parent === node.id)
          const nodePos = getNodePosition(node)
          return (
            <div
              key={node.id}
              className={`diagram-node ${selectedNode?.id === node.id ? 'selected' : ''} ${isConnecting && connectionStart?.id === node.id ? 'connecting' : ''} ${node.locked ? 'locked' : ''} ${node.parent ? 'child-node' : 'parent-node'}`}
              style={{
                position: 'absolute',
                left: nodePos.x,
                top: nodePos.y,
                width: node.width,
                height: node.height,
                borderColor: getNodeColor(node.type),
                backgroundColor: getNodeColor(node.type) + '20',
                opacity: node.locked ? 0.85 : 1,
                borderWidth: !node.parent && children.length > 0 ? '3px' : '2px',
                borderStyle: !node.parent && children.length > 0 ? 'dashed' : 'solid',
                zIndex: node.parent ? 10 : 5,
                pointerEvents: 'all'
              }}
              onMouseDown={(e) => handleNodeMouseDown(e, node)}
            >
              <div className="node-header">
                <div className="node-label">
                  {node.locked && <span className="lock-icon" title="Node is locked">🔒</span>}
                  <div className="node-label-content">
                    {(node.label || '').split('\n').filter(line => line.trim()).map((line, idx) => (
                      <div key={idx} className="node-label-line">
                        {line.trim()}
                      </div>
                    ))}
                  </div>
                  {!node.parent && children.length > 0 && <span style={{ fontSize: '10px', opacity: 0.6, marginLeft: '6px' }}> ({children.length})</span>}
                </div>
                <div className="node-actions">
                  {!isConnecting && (
                    <>
                      <button
                        className="node-action-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleNodeLock(node.id)
                        }}
                        title={node.locked ? "Unlock Node" : "Lock Node in Place"}
                        style={node.locked ? { background: 'rgba(245, 158, 11, 0.3)', color: '#f59e0b' } : {}}
                      >
                        {node.locked ? '🔓' : '🔒'}
                      </button>
                      <button
                        className="node-action-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          setShowParentDialog(node.id)
                        }}
                        title="Set Parent/Cluster"
                      >
                        📦
                      </button>
                      <button
                        className="node-action-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          startConnection(node.id)
                        }}
                        title="Start Connection from this node"
                      >
                        🔗
                      </button>
                    </>
                  )}
                  {isConnecting && connectionStart?.id === node.id && (
                    <button
                      className="node-action-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        cancelConnection()
                      }}
                      title="Cancel Connection"
                      style={{ background: 'rgba(239, 68, 68, 0.3)', color: '#ef4444' }}
                    >
                      ✕
                    </button>
                  )}
                  {isConnecting && connectionStart?.id !== node.id && (
                    <span className="node-connect-hint" title="Click to connect to this node">
                      ✓
                    </span>
                  )}
                  <button
                    className="node-action-btn node-delete-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDeleteNode(node.id)
                    }}
                    title="Delete Node"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="node-type-badge">
                {node.type}
                {node.parent && <span className="parent-badge" title={`Inside: ${nodes.find(n => n.id === node.parent)?.label || node.parent}`}>📦</span>}
              </div>
            </div>
          )
        })}

      {/* Connection preview */}
      {isConnecting && connectionStart && (
        <ConnectionPreview
          startNode={connectionStart}
          canvasRef={canvasRef}
        />
      )}

      {/* Dialogs */}
      {showAddNodeDialog && (
        <div className="editor-dialog-overlay" onClick={() => setShowAddNodeDialog(false)}>
          <div className="editor-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Node</h3>
            <div className="dialog-form">
              <label>
                Node Label:
                <input
                  type="text"
                  value={newNodeData.label}
                  onChange={(e) => setNewNodeData({ ...newNodeData, label: e.target.value })}
                  placeholder="Enter node label"
                  autoFocus
                />
              </label>
              <label>
                Node Type:
                <select
                  value={newNodeData.type}
                  onChange={(e) => setNewNodeData({ ...newNodeData, type: e.target.value })}
                >
                  <option value="default">Default</option>
                  <option value="controller">Controller</option>
                  <option value="service">Service</option>
                  <option value="database">Database</option>
                  <option value="external">External</option>
                </select>
              </label>
              <label>
                Parent/Cluster (Optional):
                <select
                  value={newNodeData.parent || ''}
                  onChange={(e) => setNewNodeData({ ...newNodeData, parent: e.target.value || null })}
                >
                  <option value="">None (Top Level)</option>
                  {nodes.filter(n => !n.parent).map(node => (
                    <option key={node.id} value={node.id}>{node.label}</option>
                  ))}
                </select>
                <small style={{ color: 'var(--text-secondary)', fontSize: '12px', display: 'block', marginTop: '4px' }}>
                  Select a parent node to keep this node inside it
                </small>
              </label>
              <div className="dialog-actions">
                <button className="editor-btn editor-btn-primary" onClick={handleAddNode}>
                  Add Node
                </button>
                <button className="editor-btn" onClick={() => setShowAddNodeDialog(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showParentDialog && (
        <div className="editor-dialog-overlay" onClick={() => setShowParentDialog(null)}>
          <div className="editor-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>Set Parent/Cluster</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Select a parent node to keep this node inside it. The node will be constrained within the parent's bounds.
            </p>
            <div className="dialog-form">
              <label>
                Parent Node:
                <select
                  value={nodes.find(n => n.id === showParentDialog)?.parent || ''}
                  onChange={(e) => {
                    setNodeParent(showParentDialog, e.target.value || null)
                    setShowParentDialog(null)
                  }}
                >
                  <option value="">None (Top Level)</option>
                  {nodes.filter(n => n.id !== showParentDialog && !n.parent).map(node => (
                    <option key={node.id} value={node.id}>{node.label}</option>
                  ))}
                </select>
              </label>
              <div className="dialog-actions">
                <button
                  className="editor-btn"
                  onClick={() => setShowParentDialog(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showResetWarning && (
        <div className="editor-dialog-overlay" onClick={() => setShowResetWarning(false)}>
          <div className="editor-dialog editor-dialog-warning" onClick={(e) => e.stopPropagation()}>
            <h3>⚠️ Reset to Default</h3>
            <p>
              This will restore the diagram to its <strong>original default structure</strong> from the diagram registry.
            </p>
            <p>
              <strong>All custom changes will be lost:</strong>
            </p>
            <ul style={{ color: 'var(--text-primary)', margin: '12px 0', paddingLeft: '24px', lineHeight: '1.8' }}>
              <li>All added nodes will be removed</li>
              <li>All custom connections will be removed</li>
              <li>All node positions will be reset</li>
              <li>All parent/child relationships will be cleared</li>
              <li>All lock states will be reset</li>
            </ul>
            <p style={{ color: '#f59e0b', fontWeight: '600' }}>
              This action cannot be undone. Are you sure you want to continue?
            </p>
            <div className="dialog-actions">
              <button
                className="editor-btn editor-btn-warning"
                onClick={resetToDefault}
                style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white' }}
              >
                🔄 Yes, Reset to Default
              </button>
              <button
                className="editor-btn"
                onClick={() => setShowResetWarning(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteWarning && (
        <div className="editor-dialog-overlay" onClick={() => setShowDeleteWarning(null)}>
          <div className="editor-dialog editor-dialog-warning" onClick={(e) => e.stopPropagation()}>
            <h3>⚠️ Delete Node Warning</h3>
            <p>
              This node has <strong>{showDeleteWarning.edgeCount} connection(s)</strong>.
              Deleting it will also remove all connected edges.
            </p>
            <p>Are you sure you want to delete this node?</p>
            <div className="dialog-actions">
              <button
                className="editor-btn editor-btn-danger"
                onClick={() => confirmDelete(showDeleteWarning.nodeId)}
              >
                Yes, Delete
              </button>
              <button
                className="editor-btn"
                onClick={() => setShowDeleteWarning(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default InlineDiagramEditor

