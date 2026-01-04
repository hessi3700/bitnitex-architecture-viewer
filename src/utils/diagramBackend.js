import { API_ENDPOINTS } from '../config/api'
import { diagramRegistry } from '../data/diagramRegistry'

// Map node name to Level task - uses database-driven mapping from TodoStore
let mapNodeToLevelFunction = null

// Initialize mapping from TodoStore
const initializeMapping = async () => {
  if (mapNodeToLevelFunction) return
  
  try {
    // Import TodoStore to get the mapping function
    const todoStoreModule = await import('../store/TodoStore')
    if (todoStoreModule.mapNodeToLevel) {
      mapNodeToLevelFunction = todoStoreModule.mapNodeToLevel
    }
  } catch (error) {
    console.warn('Could not import mapping from TodoStore:', error)
  }
}

// Map node name to Level task - uses database-driven mapping
// Note: This function requires nodeMappings to be passed from TodoStore
// The actual mapping is done by mapNodeToLevel in TodoStore which uses database mappings
const mapNodeNameToTask = async (nodeName, nodeMappings = {}) => {
  if (!nodeName) return null
  
  await initializeMapping()
  
  // Use the mapNodeToLevel function with database mappings
  if (mapNodeToLevelFunction) {
    return mapNodeToLevelFunction(nodeName, nodeMappings)
  }
  
  console.warn(`⚠️ mapNodeToLevel function not available. Node "${nodeName}" cannot be mapped.`)
  return null
}

// Extract nodes from Mermaid code
// nodeMappings: Optional database-driven node-to-task mappings from TodoStore
export const extractNodesFromMermaid = async (mermaidCode, diagramId, nodeMappings = {}) => {
  const nodes = []
  const nodeIdSet = new Set()
  
  if (!mermaidCode) return nodes
  
  // Match various node patterns:
  // 1. Regular nodes: nodeId["label"] or nodeId[label]
  // 2. Database nodes: nodeId[(label)]
  // 3. Subgraph labels: subgraph Name["label"]
  // 4. Nodes in subgraphs: nodeId["label"] (inside subgraph)
  const patterns = [
    // Regular nodes: nodeId["label"] or nodeId[label]
    /(\w+)\[["']?([^"'\]]+)["']?\]/g,
    // Database nodes: nodeId[(label)]
    /(\w+)\[\(([^)]+)\)\]/g,
  ]
  
  for (const pattern of patterns) {
    let match
    while ((match = pattern.exec(mermaidCode)) !== null) {
      const nodeId = match[1]
      let label = match[2] || match[3] || ''
      
      // Skip if already processed
      if (nodeIdSet.has(nodeId)) continue
      nodeIdSet.add(nodeId)
      
      // Clean label
      label = label.replace(/<br\s*\/?>/gi, ' ').trim()
      
      // Skip empty labels or internal Mermaid IDs
      if (!label || label.match(/^flowchart[_-]/i)) continue
      
      // Try to map to a Level task - CRITICAL: every node MUST have a taskNodeId
      // Use database mappings if available
      let taskNodeId = await mapNodeNameToTask(label || nodeId, nodeMappings)
      
      // If no mapping found, try with nodeId
      if (!taskNodeId) {
        taskNodeId = await mapNodeNameToTask(nodeId, nodeMappings)
      }
      
      // If still no mapping, use fallback based on keywords
      if (!taskNodeId) {
        const lowerLabel = (label || nodeId).toLowerCase()
        const fallbackMap = {
          'admin': 'Level13_AdminRBAC',
          'customer': 'Level3_CustomerIdentity',
          'order': 'Level7_TradingEngine',
          'trade': 'Level7_TradingEngine',
          'wallet': 'Level5_WalletServices',
          'payment': 'Level11_PaymentGateways',
          'blockchain': 'Level6_Blockchain',
          'market': 'Level8_MarketManagement',
          'coin': 'Level8_MarketManagement',
          'email': 'Level4_Notifications',
          'sms': 'Level4_Notifications',
          'notification': 'Level4_Notifications',
          'ticket': 'Level15_SupportContent',
          'database': 'Level2_DatabaseAuth',
          'security': 'Level2_DatabaseAuth',
          'auth': 'Level2_DatabaseAuth',
        }
        
        for (const [keyword, level] of Object.entries(fallbackMap)) {
          if (lowerLabel.includes(keyword)) {
            taskNodeId = level
            break
          }
        }
      }
      
      // Ultimate fallback: Level 1
      if (!taskNodeId) {
        taskNodeId = 'Level1_ProjectSetup'
        console.warn(`⚠️ Node "${label || nodeId}" could not be mapped, using Level1 as fallback`)
      }
      
      // Calculate initial position based on node importance (for better layout)
      const importance = getNodeImportance(nodeId, label)
      const initialPosition = calculateInitialPosition(nodeId, importance)
      
      // Calculate node size based on importance
      const lines = label.split(/\n|<br\s*\/?>/).filter(l => l.trim())
      const maxLineLength = Math.max(...lines.map(l => l.length), 10)
      const lineCount = lines.length || 1
      
      let baseWidth = Math.max(180, maxLineLength * 7 + 40)
      let baseHeight = Math.max(90, lineCount * 24 + 50)
      
      // Adjust size based on importance
      switch (importance) {
        case 'high':
          baseWidth *= 1.5
          baseHeight *= 1.5
          break
        case 'medium':
          baseWidth *= 1.2
          baseHeight *= 1.2
          break
      }
      
      nodes.push({
        nodeId: nodeId,
        label: label,
        type: inferNodeType(label || nodeId),
        description: null,
        position: initialPosition, // Initial calculated position
        style: {
          width: baseWidth,
          height: baseHeight
        },
        metadata: {
          originalLabel: label,
          extractedFrom: 'mermaid',
          diagramId: diagramId,
          importance: importance
        },
        diagramId: diagramId,
        taskNodeId: taskNodeId // Link to Level task - CRITICAL: every node has a related task
      })
    }
  }
  
  console.log(`📊 Extracted ${nodes.length} nodes from diagram ${diagramId}, ${nodes.filter(n => n.taskNodeId).length} mapped to Level tasks`)
  return nodes
}

// Removed mapNodeToTask - use mapNodeNameToTask instead which uses database mappings

// Infer node type from label
const inferNodeType = (label) => {
  const lower = label.toLowerCase()
  if (lower.includes('controller') || lower.includes('api')) return 'controller'
  if (lower.includes('service')) return 'service'
  if (lower.includes('database') || lower.includes('db') || lower.includes('table')) return 'database'
  if (lower.includes('wallet')) return 'wallet'
  if (lower.includes('blockchain') || lower.includes('crypto')) return 'blockchain'
  if (lower.includes('payment') || lower.includes('gateway')) return 'payment'
  if (lower.includes('client') || lower.includes('user')) return 'client'
  if (lower.includes('security') || lower.includes('auth')) return 'security'
  return 'component'
}

// Get node importance for sizing
const getNodeImportance = (nodeId, label) => {
  const lowerId = (nodeId || '').toLowerCase()
  const lowerLabel = (label || '').toLowerCase()
  
  // High importance nodes (bigger)
  if (lowerId.includes('controllers') || lowerId.includes('services') || 
      lowerId.includes('database') || lowerId.includes('everything') ||
      lowerId.includes('advanced') || lowerId.includes('missing') ||
      lowerLabel.includes('controllers') || lowerLabel.includes('services') ||
      lowerLabel.includes('database') || lowerLabel.includes('everything') ||
      lowerLabel.includes('advanced') || lowerLabel.includes('missing')) {
    return 'high'
  }
  
  // Medium importance (core services)
  if (lowerId.includes('order') || lowerId.includes('trade') || 
      lowerId.includes('wallet') || lowerId.includes('customer') ||
      lowerId.includes('payment') || lowerId.includes('blockchain') ||
      lowerId.includes('security') || lowerId.includes('auth')) {
    return 'medium'
  }
  
  // Low importance (smaller)
  return 'low'
}

// Calculate initial position based on node importance and type
const calculateInitialPosition = (nodeId, importance) => {
  // Use a simple grid layout with importance-based spacing
  // This is just an initial position - actual positions will be extracted from SVG
  const baseX = 100
  const baseY = 100
  
  // Simple hash-based positioning for consistency
  let hash = 0
  for (let i = 0; i < nodeId.length; i++) {
    hash = ((hash << 5) - hash) + nodeId.charCodeAt(i)
    hash = hash & hash
  }
  
  const spacing = importance === 'high' ? 400 : importance === 'medium' ? 300 : 250
  const x = baseX + (Math.abs(hash) % 10) * spacing
  const y = baseY + (Math.floor(Math.abs(hash) / 10) % 10) * spacing
  
  return { x, y }
}

// Extract edges from Mermaid code
export const extractEdgesFromMermaid = (mermaidCode) => {
  const edges = []
  const edgeSet = new Set()
  
  // Match edges: source --> target, source -.-> target, source --- target
  // Also match: source -->|label| target
  const edgeRegex = /(\w+)\s*(?:-->|-.->|---)\s*(?:\|([^|]+)\|)?\s*(\w+)/g
  let match
  
  while ((match = edgeRegex.exec(mermaidCode)) !== null) {
    const source = match[1]
    const target = match[3]
    const label = match[2] || null
    const edgeType = match[0].includes('-.->') ? 'dashed' : 'directed'
    const edgeKey = `${source}-->${target}`
    
    // Skip if already processed
    if (edgeSet.has(edgeKey)) continue
    edgeSet.add(edgeKey)
    
    edges.push({
      source: source,
      target: target,
      label: label,
      type: edgeType,
      metadata: {
        extractedFrom: 'mermaid',
        originalEdge: match[0]
      }
    })
  }
  
  return edges
}

// Save diagram to backend
export const saveDiagramToBackend = async (diagramId, diagramData) => {
  try {
    const { API_ENDPOINTS } = await import('../config/api')
    
    // Extract edges if not provided
    const edges = diagramData.edges || extractEdgesFromMermaid(diagramData.code || diagramData.mermaidCode || '')
    
    const response = await fetch(API_ENDPOINTS.diagramByDiagramId(diagramId), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: diagramData.title,
        description: diagramData.description,
        mermaidCode: diagramData.code || diagramData.mermaidCode,
        customMermaidCode: diagramData.customMermaidCode,
        nodes: diagramData.nodes,
        edges: edges, // Always include edges
        metadata: {
          ...diagramData.metadata,
          edgesCount: edges.length,
          nodesCount: diagramData.nodes?.length || 0
        }
      })
    })
    
    if (!response.ok) throw new Error('Failed to save diagram')
    return await response.json()
  } catch (error) {
    console.error('Failed to save diagram to backend:', error)
    throw error
  }
}

// Save nodes to backend
export const saveNodesToBackend = async (diagramId, nodes) => {
  try {
    const { API_ENDPOINTS } = await import('../config/api')
    
    // First, remove existing nodes for this diagram
    await fetch(`${API_ENDPOINTS.nodesByDiagram(diagramId)}`, {
      method: 'DELETE'
    }).catch(() => {}) // Ignore errors if no nodes exist
    
    // Then create new nodes in bulk
    if (nodes.length > 0) {
      const response = await fetch(API_ENDPOINTS.bulkCreateNodes, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nodes)
      })
      
      if (!response.ok) throw new Error('Failed to save nodes')
      return await response.json()
    }
    
    return []
  } catch (error) {
    console.error('Failed to save nodes to backend:', error)
    throw error
  }
}

// Seed all diagrams and nodes to backend
export const seedDiagramsAndNodes = async () => {
  try {
    const { API_ENDPOINTS } = await import('../config/api')
    
    // Prepare diagrams for seeding
    const diagrams = Object.values(diagramRegistry).map(diagram => ({
      diagramId: diagram.id,
      title: diagram.title,
      description: diagram.description || diagram.subtitle || '',
      mermaidCode: diagram.code || '',
      customMermaidCode: null,
      nodes: null, // Will be extracted and saved separately
      edges: null,
      metadata: {
        type: diagram.type,
        icon: diagram.icon,
        children: diagram.children || [],
        parent: diagram.parent || null
      }
    }))
    
    // Seed diagrams
    console.log('🌱 Seeding diagrams to backend...')
    const diagramResponse = await fetch(API_ENDPOINTS.seedDiagrams, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(diagrams)
    })
    
    if (!diagramResponse.ok) throw new Error('Failed to seed diagrams')
    const diagramResult = await diagramResponse.json()
    console.log(`✅ Seeded ${diagramResult.created} diagrams, skipped ${diagramResult.skipped}`)
    
    // Extract and seed nodes and edges for each diagram
    console.log('🌱 Extracting and seeding nodes and edges...')
    let totalNodes = 0
    let totalEdges = 0
    
    for (const diagram of Object.values(diagramRegistry)) {
      // Extract nodes and edges
      const nodes = await extractNodesFromMermaid(diagram.code || '', diagram.id)
      const edges = extractEdgesFromMermaid(diagram.code || '')
      
      // Get diagram UUID from backend
      const diagramResponse = await fetch(API_ENDPOINTS.diagramByDiagramId(diagram.id))
      if (diagramResponse.ok) {
        const savedDiagram = await diagramResponse.json()
        
        // Set diagramId for all nodes
        nodes.forEach(node => {
          node.diagramId = savedDiagram.id
        })
        
        // Save nodes
        if (nodes.length > 0) {
          await saveNodesToBackend(savedDiagram.id, nodes)
          totalNodes += nodes.length
          console.log(`  ✅ Seeded ${nodes.length} nodes for diagram: ${diagram.id}`)
        }
        
        // Save edges in diagram metadata
        if (edges.length > 0) {
          await saveDiagramToBackend(diagram.id, {
            title: diagram.title,
            description: diagram.description || diagram.subtitle || '',
            code: diagram.code,
            mermaidCode: diagram.code,
            edges: edges
          })
          totalEdges += edges.length
          console.log(`  ✅ Seeded ${edges.length} edges for diagram: ${diagram.id}`)
        }
      }
    }
    
    console.log(`✅ Total nodes seeded: ${totalNodes}, Total edges seeded: ${totalEdges}`)
    return { diagrams: diagramResult, nodes: totalNodes, edges: totalEdges }
  } catch (error) {
    console.error('Failed to seed diagrams and nodes:', error)
    throw error
  }
}

// Load edges for a diagram from Edge entity table
export const loadEdgesFromBackend = async (diagramId) => {
  try {
    const { API_ENDPOINTS } = await import('../config/api')
    
    // Load diagram with edgeEntities relation
    const response = await fetch(API_ENDPOINTS.diagramByDiagramId(diagramId))
    if (response.ok) {
      const diagram = await response.json()
      
      // Priority: Use edgeEntities from database (proper Edge entities)
      if (diagram.edgeEntities && Array.isArray(diagram.edgeEntities) && diagram.edgeEntities.length > 0) {
        console.log(`✅ Loaded ${diagram.edgeEntities.length} edges from Edge entity table`)
        // Transform Edge entities to match expected format
        return diagram.edgeEntities.map(edge => ({
          id: edge.id,
          source: edge.sourceNodeId,
          target: edge.targetNodeId,
          sourceNodeId: edge.sourceNodeId,
          targetNodeId: edge.targetNodeId,
          label: edge.label || null,
          type: edge.type || 'directed',
          style: edge.style || {},
          metadata: {
            ...edge.metadata,
            // Edge paths/positions can be stored in style or metadata
            path: edge.style?.path || edge.metadata?.path || null,
            waypoints: edge.style?.waypoints || edge.metadata?.waypoints || null
          },
          diagramId: edge.diagramId
        }))
      }
      
      // Fallback: Extract edges from Mermaid code (not from legacy JSON field)
      const mermaidCode = diagram.customMermaidCode || diagram.mermaidCode || ''
      if (mermaidCode) {
        const extractedEdges = extractEdgesFromMermaid(mermaidCode)
        if (extractedEdges.length > 0) {
          console.log(`✅ Extracted ${extractedEdges.length} edges from Mermaid code`)
          return extractedEdges
        }
      }
      
      return []
    }
    
    return []
  } catch (error) {
    console.error('Failed to load edges from backend:', error)
    return []
  }
}

// Load all diagrams from database
export const loadAllDiagramsFromBackend = async () => {
  try {
    const { API_ENDPOINTS, isBackendAvailable } = await import('../config/api')
    
    // Check if backend is available
    if (!isBackendAvailable() || !API_ENDPOINTS.diagrams) {
      console.error('❌ Backend not available - API_ENDPOINTS.diagrams is null')
      throw new Error('Backend API not configured. Please ensure backend is running on http://localhost:3001')
    }
    
    console.log('📡 Fetching diagrams from:', API_ENDPOINTS.diagrams)
    
    let response
    try {
      response = await fetch(API_ENDPOINTS.diagrams, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Add mode to handle CORS
        mode: 'cors',
        credentials: 'omit',
      })
    } catch (fetchError) {
      console.error('❌ Fetch error (network/CORS):', fetchError)
      throw new Error(`Network error: ${fetchError.message}. Check if backend is running and CORS is configured.`)
    }
    
    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Could not read error response')
      console.error(`❌ Failed to load diagrams: HTTP ${response.status}`, errorText)
      throw new Error(`Backend returned ${response.status}: ${errorText.substring(0, 100)}`)
    }
    
    let diagrams
    try {
      diagrams = await response.json()
    } catch (parseError) {
      console.error('❌ Failed to parse JSON response:', parseError)
      const text = await response.text()
      console.error('Response text:', text.substring(0, 200))
      throw new Error(`Invalid JSON response from backend: ${parseError.message}`)
    }
    
    console.log(`✅ Received ${diagrams?.length || 0} diagrams from backend`)
    
    if (!Array.isArray(diagrams)) {
      console.error('❌ Invalid response format - expected array, got:', typeof diagrams)
      throw new Error('Invalid response format from backend')
    }
    
    // Transform database diagrams to match registry format
    const transformed = diagrams.map(diagram => ({
      id: diagram.diagramId,
      title: diagram.title,
      subtitle: diagram.description || '',
      icon: diagram.metadata?.icon || '📊',
      type: diagram.metadata?.type || 'detail',
      description: diagram.description || '',
      code: diagram.mermaidCode || diagram.customMermaidCode || '',
      children: diagram.metadata?.children || [],
      parent: diagram.metadata?.parent || null,
      // Include database fields
      dbId: diagram.id,
      customMermaidCode: diagram.customMermaidCode,
      nodes: diagram.nodes,
      edges: diagram.edges,
      metadata: diagram.metadata
    }))
    
    console.log(`✅ Transformed ${transformed.length} diagrams`)
    return transformed
  } catch (error) {
    console.error('❌ Failed to load diagrams from backend:', error)
    // Re-throw with more context
    if (error.message) {
      throw error
    }
    throw new Error(`Failed to connect to backend: ${error.message || error}`)
  }
}

// Load a single diagram from database by diagramId
export const loadDiagramFromBackend = async (diagramId) => {
  try {
    const { API_ENDPOINTS } = await import('../config/api')
    
    const response = await fetch(API_ENDPOINTS.diagramByDiagramId(diagramId))
    if (response.ok) {
      const diagram = await response.json()
      
      // Get code - prioritize customMermaidCode, then mermaidCode
      const code = diagram.customMermaidCode || diagram.mermaidCode || ''
      
      // If no code in DB, return null so it falls back to registry
      if (!code || code.trim() === '') {
        console.log(`⚠️ Diagram ${diagramId} in DB has no code, will use registry`)
        return null
      }
      
      // Transform to match registry format
      return {
        id: diagram.diagramId,
        title: diagram.title,
        subtitle: diagram.description || '',
        icon: diagram.metadata?.icon || '📊',
        type: diagram.metadata?.type || 'detail',
        description: diagram.description || '',
        code: code,
        children: diagram.metadata?.children || [],
        parent: diagram.metadata?.parent || null,
        // Include database fields
        dbId: diagram.id,
        customMermaidCode: diagram.customMermaidCode,
        mermaidCode: diagram.mermaidCode,
        nodes: diagram.nodes,
        edges: diagram.edges,
        metadata: diagram.metadata
      }
    }
    
    return null
  } catch (error) {
    console.error('Failed to load diagram from backend:', error)
    return null
  }
}

// Load nodes for a diagram
export const loadNodesFromBackend = async (diagramId) => {
  try {
    const { API_ENDPOINTS } = await import('../config/api')
    
    // First try to get by diagram UUID
    let response = await fetch(`${API_ENDPOINTS.nodes}?diagramId=${diagramId}`)
    if (!response.ok) {
      // Try to get diagram by diagramId first
      const diagramResponse = await fetch(API_ENDPOINTS.diagramByDiagramId(diagramId))
      if (diagramResponse.ok) {
        const diagram = await diagramResponse.json()
        response = await fetch(`${API_ENDPOINTS.nodes}?diagramId=${diagram.id}`)
      }
    }
    
    if (response.ok) {
      return await response.json()
    }
    
    return []
  } catch (error) {
    console.error('Failed to load nodes from backend:', error)
    return []
  }
}

