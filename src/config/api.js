// API Configuration
// - npm run start / dev: always uses local backend (http://localhost:3001)
// - Production build: uses VITE_API_URL from .env (e.g. Worker URL) or null for static only
const getApiBaseUrl = () => {
  // In development (npm run start), always use local backend
  if (import.meta.env.DEV) {
    const hostname = window.location.hostname
    if (hostname && hostname !== 'localhost' && hostname !== '127.0.0.1') {
      return `http://${hostname}:3001`
    }
    return 'http://localhost:3001'
  }

  // Production: use VITE_API_URL if set (e.g. Worker), otherwise null
  const envUrl = import.meta.env.VITE_API_URL
  if (envUrl !== undefined && envUrl !== '') {
    return envUrl
  }
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
  nodeMappings: buildEndpoint('/api/nodes/mappings'),
}

