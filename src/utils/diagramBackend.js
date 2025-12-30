import { API_ENDPOINTS } from '../config/api'
import { diagramRegistry } from '../data/diagramRegistry'

// Map node name to Level task - simplified version
// Full mapping is in TodoStore but we avoid circular dependency
const mapNodeNameToTask = (nodeName) => {
  if (!nodeName) return null
  
  const cleanName = nodeName
    .replace(/[✅🔄⏸️🚫]/g, '')
    .replace(/<br\s*\/?>/gi, ' ')
    .trim()
    .toLowerCase()
  
  // Common mappings - expand as needed
  const mappings = {
    'projectsetup': 'Level1_ProjectSetup',
    'project setup': 'Level1_ProjectSetup',
    'database': 'Level2_DatabaseAuth',
    'auth': 'Level2_DatabaseAuth',
    'security': 'Level2_DatabaseAuth',
    'customer': 'Level3_CustomerIdentity',
    'email': 'Level4_Notifications',
    'sms': 'Level4_Notifications',
    'wallet': 'Level5_WalletServices',
    'blockchain': 'Level6_Blockchain',
    'order': 'Level7_TradingEngine',
    'market': 'Level8_MarketData',
    'payment': 'Level9_PaymentGateways',
    'ticket': 'Level10_SupportSystem',
  }
  
  // Direct match
  if (mappings[cleanName]) return mappings[cleanName]
  
  // Partial match
  for (const [key, level] of Object.entries(mappings)) {
    if (cleanName.includes(key) || key.includes(cleanName)) {
      return level
    }
  }
  
  // Pattern matching
  if (cleanName.includes('controller')) {
    const base = cleanName.replace('controller', '').trim()
    if (mappings[base]) return mappings[base]
  }
  
  if (cleanName.includes('service')) {
    const base = cleanName.replace('service', '').trim()
    if (mappings[base]) return mappings[base]
  }
  
  return null
}

// Extract nodes from Mermaid code
export const extractNodesFromMermaid = (mermaidCode, diagramId) => {
  const nodes = []
  const nodeIdSet = new Set()
  
  // Match node definitions: nodeId["label"] or nodeId[label]
  const nodeRegex = /(\w+)\[["']?([^"'\]]+)["']?\]/g
  let match
  
  while ((match = nodeRegex.exec(mermaidCode)) !== null) {
    const nodeId = match[1]
    const label = match[2].replace(/<br\s*\/?>/gi, ' ').trim()
    
    // Skip if already processed
    if (nodeIdSet.has(nodeId)) continue
    nodeIdSet.add(nodeId)
    
    // Try to map to a Level task
    const taskNodeId = mapNodeNameToTask(label || nodeId)
    
    nodes.push({
      nodeId: nodeId,
      label: label,
      type: inferNodeType(label || nodeId),
      description: null,
      position: null, // Will be set by editor
      style: null,
      metadata: {
        originalLabel: label,
        extractedFrom: 'mermaid'
      },
      diagramId: diagramId,
      taskNodeId: taskNodeId // Link to Level task
    })
  }
  
  return nodes
}

// Map node name to Level task
const mapNodeToTask = (nodeName) => {
  if (!nodeName) return null
  
  // Clean the node name
  const cleanName = nodeName
    .replace(/[✅🔄⏸️🚫]/g, '') // Remove status emojis
    .replace(/<br\s*\/?>/gi, ' ') // Replace <br/> with space
    .trim()
  
  // Direct match
  if (NODE_TO_LEVEL_MAPPING[cleanName]) {
    return NODE_TO_LEVEL_MAPPING[cleanName]
  }
  
  // Case-insensitive match
  const lowerName = cleanName.toLowerCase()
  for (const [key, level] of Object.entries(NODE_TO_LEVEL_MAPPING)) {
    if (key.toLowerCase() === lowerName) {
      return level
    }
  }
  
  // Partial match
  for (const [key, level] of Object.entries(NODE_TO_LEVEL_MAPPING)) {
    if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
      return level
    }
  }
  
  // Try common patterns
  if (cleanName.endsWith('Controller')) {
    const baseName = cleanName.replace('Controller', '')
    if (NODE_TO_LEVEL_MAPPING[baseName]) {
      return NODE_TO_LEVEL_MAPPING[baseName]
    }
  }
  
  if (cleanName.endsWith('Service')) {
    const baseName = cleanName.replace('Service', '')
    if (NODE_TO_LEVEL_MAPPING[baseName]) {
      return NODE_TO_LEVEL_MAPPING[baseName]
    }
  }
  
  return null
}

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

// Extract edges from Mermaid code
export const extractEdgesFromMermaid = (mermaidCode) => {
  const edges = []
  const edgeSet = new Set()
  
  // Match edges: source --> target or source -->|label| target
  const edgeRegex = /(\w+)\s*-->\s*(?:\|([^|]+)\|)?\s*(\w+)/g
  let match
  
  while ((match = edgeRegex.exec(mermaidCode)) !== null) {
    const source = match[1]
    const target = match[3]
    const label = match[2] || null
    const edgeKey = `${source}-->${target}`
    
    // Skip if already processed
    if (edgeSet.has(edgeKey)) continue
    edgeSet.add(edgeKey)
    
    edges.push({
      source: source,
      target: target,
      label: label,
      type: 'directed'
    })
  }
  
  return edges
}

// Save diagram to backend
export const saveDiagramToBackend = async (diagramId, diagramData) => {
  try {
    const { API_ENDPOINTS } = await import('../config/api')
    
    const response = await fetch(API_ENDPOINTS.diagramByDiagramId(diagramId), {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: diagramData.title,
        description: diagramData.description,
        mermaidCode: diagramData.code || diagramData.mermaidCode,
        customMermaidCode: diagramData.customMermaidCode,
        nodes: diagramData.nodes,
        edges: diagramData.edges,
        metadata: diagramData.metadata
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
    
    // Extract and seed nodes for each diagram
    console.log('🌱 Extracting and seeding nodes...')
    let totalNodes = 0
    
    for (const diagram of Object.values(diagramRegistry)) {
      const nodes = extractNodesFromMermaid(diagram.code || '', diagram.id)
      const edges = extractEdgesFromMermaid(diagram.code || '')
      
      if (nodes.length > 0) {
        // Get diagram UUID from backend
        const diagramResponse = await fetch(API_ENDPOINTS.diagramByDiagramId(diagram.id))
        if (diagramResponse.ok) {
          const savedDiagram = await diagramResponse.json()
          
          // Set diagramId for all nodes
          nodes.forEach(node => {
            node.diagramId = savedDiagram.id
          })
          
          // Save nodes
          await saveNodesToBackend(savedDiagram.id, nodes)
          totalNodes += nodes.length
          console.log(`  ✅ Seeded ${nodes.length} nodes for diagram: ${diagram.id}`)
        }
      }
    }
    
    console.log(`✅ Total nodes seeded: ${totalNodes}`)
    return { diagrams: diagramResult, nodes: totalNodes }
  } catch (error) {
    console.error('Failed to seed diagrams and nodes:', error)
    throw error
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

