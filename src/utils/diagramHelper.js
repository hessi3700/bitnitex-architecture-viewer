import { TaskStatus } from '../store/TodoStore'

// Get status emoji for visual representation
export const getStatusEmoji = (status) => {
  switch (status) {
    case TaskStatus.COMPLETED: return '✅'
    case TaskStatus.IN_PROGRESS: return '🔄'
    case TaskStatus.BLOCKED: return '🚫'
    case TaskStatus.NOT_STARTED: return '⏸️'
    default: return '⏸️'
  }
}

// Get status color for styling
export const getStatusColor = (status) => {
  switch (status) {
    case TaskStatus.COMPLETED: return '#10b981'
    case TaskStatus.IN_PROGRESS: return '#3b82f6'
    case TaskStatus.BLOCKED: return '#ef4444'
    case TaskStatus.NOT_STARTED: return '#6b7280'
    default: return '#6b7280'
  }
}

// Generate mermaid style for a node based on status
export const generateNodeStyle = (nodeId, status) => {
  const color = getStatusColor(status)
  let fill = '#1e3a5f'
  
  switch (status) {
    case TaskStatus.COMPLETED:
      fill = '#064e3b' // dark green
      break
    case TaskStatus.IN_PROGRESS:
      fill = '#1e3a8a' // dark blue
      break
    case TaskStatus.BLOCKED:
      fill = '#7f1d1d' // dark red
      break
    default:
      fill = '#1e3a5f' // default blue
  }
  
  return `style ${nodeId} fill:${fill},stroke:${color},stroke-width:4px,color:#e1e8f0`
}

// Add status badges to node labels
export const addStatusToLabel = (label, status, showEmoji = true) => {
  const emoji = showEmoji ? getStatusEmoji(status) : ''
  return `${emoji} ${label}`
}

// Generate enhanced diagram code with status indicators and lock states
export const enhanceDiagramWithStatus = (baseCode, tasks, savedDiagram = null) => {
  let enhancedCode = baseCode
  let styles = '\n\n  %% Project Status Styles\n'
  let styledNodes = []
  const lockedNodes = new Set()

  // Check for locked nodes in saved diagram
  if (savedDiagram?.nodes && Array.isArray(savedDiagram.nodes)) {
    savedDiagram.nodes.forEach(node => {
      if (node.locked) {
        // Map node.id to possible Mermaid node IDs
        const possibleIds = [
          node.id,
          node.id.replace(/[^a-zA-Z0-9]/g, '_'),
          node.label?.split(/\s+/)[0] || node.id
        ]
        possibleIds.forEach(id => lockedNodes.add(id))
      }
    })
  }

  // Add status indicators to nodes ONLY if they exist in the diagram
  Object.values(tasks).forEach(task => {
    if (!task || !task.id) return
    
    const emoji = getStatusEmoji(task.status)
    
    // Check multiple node ID patterns
    const possibleNodeIds = [
      task.id,  // exact match
      task.id.replace('Controller', 'C'),  // AdminC, OrderC, etc.
      task.id.replace('Service', 'S'),  // OrderS, WalletS, etc.
    ]
    
    // Try to find and update the node label
    let nodeFound = false
    for (const nodeId of possibleNodeIds) {
      const nodePattern = new RegExp(`(${nodeId}\\[)([^\\]]+)(\\])`, 'g')
      
      const newCode = enhancedCode.replace(nodePattern, (match, p1, p2, p3) => {
        // Don't add emoji if already present
        if (p2.includes('✅') || p2.includes('🔄') || p2.includes('🚫') || p2.includes('⏸️')) {
          return match
        }
        nodeFound = true
        styledNodes.push(nodeId)
        // Add lock emoji if node is locked
        const lockEmoji = lockedNodes.has(nodeId) ? '🔒 ' : ''
        return `${p1}${lockEmoji}${emoji} ${p2}${p3}`
      })
      
      if (newCode !== enhancedCode) {
        enhancedCode = newCode
        // Add style ONLY if we found the node
        let styleLine = generateNodeStyle(nodeId, task.status)
        // Add lock styling if node is locked
        if (lockedNodes.has(nodeId)) {
          styleLine = styleLine.replace(/stroke-width:(\d+)px/, 'stroke-width:$1px,stroke-dasharray:5,5')
          styleLine += ',opacity:0.85'
        }
        styles += `  ${styleLine}\n`
        break // Found and styled this node, move to next task
      }
    }
  })

  // Add lock styles for nodes that are locked but don't have tasks
  lockedNodes.forEach(nodeId => {
    if (!styledNodes.includes(nodeId)) {
      styles += `  style ${nodeId} fill:#1e3a5f,stroke:#f59e0b,stroke-width:3px,stroke-dasharray:5,5,opacity:0.85\n`
    }
  })

  // Only add styles if we actually styled some nodes
  return styledNodes.length > 0 || lockedNodes.size > 0 ? enhancedCode + styles : enhancedCode
}

// Calculate category progress percentage
export const calculateCategoryProgress = (tasks, category) => {
  const categoryTasks = Object.values(tasks).filter(t => t.category === category)
  if (categoryTasks.length === 0) return 0
  
  const completed = categoryTasks.filter(t => t.status === TaskStatus.COMPLETED).length
  return Math.round((completed / categoryTasks.length) * 100)
}

// Generate a legend for the diagram
export const generateStatusLegend = () => {
  return `
  subgraph Legend["📊 Project Status"]
    L1["✅ Completed"]
    L2["🔄 In Progress"]
    L3["⏸️ Not Started"]
    L4["🚫 Blocked"]
  end
  
  style Legend fill:#0f1419,stroke:#2a3441,stroke-width:2px
  style L1 fill:#10b981,stroke:#059669,stroke-width:2px
  style L2 fill:#3b82f6,stroke:#2563eb,stroke-width:2px
  style L3 fill:#6b7280,stroke:#4b5563,stroke-width:2px
  style L4 fill:#ef4444,stroke:#dc2626,stroke-width:2px
`
}

// Add progress indicators to category labels
export const addProgressToCategory = (categoryLabel, tasks, category) => {
  const progress = calculateCategoryProgress(tasks, category)
  return `${categoryLabel} - ${progress}% Complete`
}

