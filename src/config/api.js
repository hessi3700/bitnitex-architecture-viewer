// API Configuration
// In production (GitHub Pages), if no backend URL is provided, the app will use localStorage
// Set VITE_API_URL environment variable to your backend URL if you have one deployed
const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL
  
  // If explicitly set (even if empty string), use it
  if (import.meta.env.VITE_API_URL !== undefined) {
    return envUrl || null
  }
  
  // In development, default to localhost
  if (import.meta.env.DEV) {
    return 'http://localhost:3001'
  }
  
  // In production without explicit URL, return null (will use localStorage)
  return null
}

export const API_BASE_URL = getApiBaseUrl()

// Check if backend is available
export const isBackendAvailable = () => {
  return API_BASE_URL !== null && API_BASE_URL !== ''
}

// Helper to build API endpoints
const buildEndpoint = (path) => {
  if (!isBackendAvailable()) {
    return null // Signal that backend is not available
  }
  return `${API_BASE_URL}${path}`
}

export const API_ENDPOINTS = {
  tasks: buildEndpoint('/api/tasks'),
  progress: buildEndpoint('/api/tasks/progress'),
  taskByNode: (nodeId) => buildEndpoint(`/api/tasks/node/${nodeId}`),
  task: (id) => buildEndpoint(`/api/tasks/${id}`),
  seedTasks: buildEndpoint('/api/tasks/seed'),
  diagrams: buildEndpoint('/api/diagrams'),
  diagramById: (id) => buildEndpoint(`/api/diagrams/${id}`),
  diagramByDiagramId: (diagramId) => buildEndpoint(`/api/diagrams/diagram-id/${diagramId}`),
  seedDiagrams: buildEndpoint('/api/diagrams/seed'),
  nodes: buildEndpoint('/api/nodes'),
  nodeById: (id) => buildEndpoint(`/api/nodes/${id}`),
  nodesByDiagram: (diagramId) => buildEndpoint(`/api/nodes/diagram/${diagramId}`),
  nodesByNodeId: (nodeId) => buildEndpoint(`/api/nodes/node/${nodeId}`),
  bulkCreateNodes: buildEndpoint('/api/nodes/bulk'),
}

