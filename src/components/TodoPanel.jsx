import React, { useState, useEffect } from 'react'
import { useTodoStore, TaskStatus, TaskPriority } from '../store/TodoStore'
import { getNextTask, getTaskGuide, stepByStepGuides } from '../data/stepByStepGuides'
import StepByStepGuide from './StepByStepGuide'
import './TodoPanel.css'

// Subtask Item Component - separate component to allow hooks
const SubtaskItem = ({ subtask, idx, taskId, isCompleted, toggleSubtask }) => {
  const [showAIPrompt, setShowAIPrompt] = useState(false)
  const subtaskId = subtask.id || `subtask-${idx}-${subtask.title}`
  const aiPrompt = subtask.aiPrompt || null

  return (
    <div className="subtask-item">
      <div className="subtask-main">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => {
            e.stopPropagation()
            console.log('🔄 Toggling subtask:', subtaskId, 'Current state:', isCompleted)
            toggleSubtask(taskId, subtaskId)
          }}
          onClick={(e) => e.stopPropagation()}
          className="subtask-checkbox"
        />
        <span className={isCompleted ? 'completed' : ''}>
          {subtask.title || subtask.name || `Subtask ${idx + 1}`}
        </span>
        {aiPrompt && (
          <button
            className="subtask-ai-btn"
            onClick={(e) => {
              e.stopPropagation()
              setShowAIPrompt(!showAIPrompt)
            }}
            title="Show AI Prompt"
          >
            🤖 AI
          </button>
        )}
      </div>
      {showAIPrompt && aiPrompt && (
        <div className="subtask-ai-prompt">
          <div className="ai-prompt-header">
            <span>🤖 AI Assistant Prompt</span>
            <button 
              className="ai-prompt-close"
              onClick={(e) => {
                e.stopPropagation()
                setShowAIPrompt(false)
              }}
            >
              ✕
            </button>
          </div>
          <div className="ai-prompt-content">
            <p>{aiPrompt}</p>
            <button
              className="ai-prompt-copy"
              onClick={(e) => {
                e.stopPropagation()
                navigator.clipboard.writeText(aiPrompt)
                alert('AI prompt copied to clipboard!')
              }}
            >
              📋 Copy Prompt
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const TodoPanel = () => {
  const {
    tasks,
    showTodoPanel,
    setShowTodoPanel,
    selectedTask,
    setSelectedTask,
    filterStatus,
    filterCategory,
    setFilterStatus,
    setFilterCategory,
    updateTaskStatus,
    updateTaskPriority,
    addSubtask,
    toggleSubtask,
    addNote,
    updateActualHours,
    getProgress,
    getCategoryProgress,
    getOrCreateTask
  } = useTodoStore()

  const [newSubtask, setNewSubtask] = useState('')
  const [newNote, setNewNote] = useState('')
  const [editingHours, setEditingHours] = useState(null)
  const [showGuide, setShowGuide] = useState(true) // Show guide by default
  const [loadingTask, setLoadingTask] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)

  // Handle async task loading - FIXED: removed getOrCreateTask from deps to prevent infinite loop
  React.useEffect(() => {
    let cancelled = false
    
    const loadTask = async () => {
      if (!selectedTask) {
        setCurrentTask(null)
        setLoadingTask(false)
        return
      }

      console.log('🔄 useEffect: Loading task:', selectedTask, 'Current task:', currentTask?.id)

      // If task exists in store, use it immediately
      if (tasks[selectedTask]) {
        console.log('✅ Task found in store:', selectedTask)
        if (!cancelled) {
          setCurrentTask(tasks[selectedTask])
          setLoadingTask(false)
        }
        return
      }

      // Otherwise, create it
      setLoadingTask(true)
      try {
        console.log('📦 Creating task:', selectedTask)
        const task = await getOrCreateTask(selectedTask)
        
        if (!task) {
          console.error('❌ Task is null:', selectedTask)
          if (!cancelled) {
            setLoadingTask(false)
          }
          return
        }
        
        console.log('✅ Task created:', task.id, task.title)
        
        if (!cancelled) {
          // Set immediately
          setCurrentTask(task)
          setLoadingTask(false)
          
          // Also wait a bit and check tasks again in case state updated
          setTimeout(() => {
            if (!cancelled && tasks[selectedTask]) {
              console.log('🔄 Syncing from store:', selectedTask)
              setCurrentTask(tasks[selectedTask])
            }
          }, 200)
        }
      } catch (error) {
        console.error('❌ Error loading task:', error)
        if (!cancelled) {
          // Create a fallback task object so UI always renders
          const fallbackTask = {
            id: selectedTask,
            nodeId: selectedTask,
            title: `${selectedTask} Development`,
            description: `Task for ${selectedTask}`,
            status: TaskStatus.NOT_STARTED,
            priority: TaskPriority.MEDIUM,
            category: 'Other',
            estimatedHours: 4,
            actualHours: 0,
            subtasks: [],
            notes: [],
            dependencies: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
          setCurrentTask(fallbackTask)
          setLoadingTask(false)
        }
      }
    }

    loadTask()
    
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTask]) // Only depend on selectedTask, not tasks or getOrCreateTask
  
  // Also sync when tasks change (but only if we have a selectedTask and it matches)
  React.useEffect(() => {
    if (selectedTask && tasks[selectedTask]) {
      const taskFromStore = tasks[selectedTask]
      // Only update if it's different from current
      if (!currentTask || currentTask.id !== taskFromStore.id || currentTask.status !== taskFromStore.status) {
        console.log('🔄 Syncing task from store:', selectedTask, 'Status:', taskFromStore.status)
        setCurrentTask(taskFromStore)
      }
    }
  }, [tasks, selectedTask, currentTask]) // eslint-disable-line react-hooks/exhaustive-deps

  // Update currentTask when task in store changes (for initial load and when tasks update)
  React.useEffect(() => {
    if (selectedTask && tasks[selectedTask]) {
      // Always sync currentTask with store to ensure UI updates
      setCurrentTask(tasks[selectedTask])
    }
  }, [selectedTask, tasks])

  // Use task from store directly - it will always be up-to-date
  // currentTask is only used for initial loading state
  const task = selectedTask ? tasks[selectedTask] : null

  if (!showTodoPanel) return null

  const progress = getProgress()
  // Only show Level tasks (the 30 main tasks) - filter out old hidden tasks
  const filteredTasks = Object.values(tasks).filter(task => {
    // Only show tasks that start with "Level" (the 30 main tasks)
    if (!task || !task.id || !task.id.startsWith('Level')) return false
    if (filterStatus && task.status !== filterStatus) return false
    if (filterCategory && task.category !== filterCategory) return false
    return true
  })

  // Only show categories from Level tasks (the 30 main tasks) - filter out old hidden tasks
  const categories = [...new Set(Object.values(tasks)
    .filter(t => t && t.id && t.id.startsWith('Level') && t.category)
    .map(t => t.category))]

  const getStatusColor = (status) => {
    switch (status) {
      case TaskStatus.COMPLETED: return '#10b981'
      case TaskStatus.IN_PROGRESS: return '#3b82f6'
      case TaskStatus.BLOCKED: return '#ef4444'
      default: return '#6b7280'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case TaskPriority.CRITICAL: return '#ef4444'
      case TaskPriority.HIGH: return '#f59e0b'
      case TaskPriority.MEDIUM: return '#3b82f6'
      default: return '#6b7280'
    }
  }

  const handleAddSubtask = (taskId) => {
    if (newSubtask.trim()) {
      addSubtask(taskId, {
        id: `${taskId}-subtask-${Date.now()}`,
        title: newSubtask.trim()
      })
      setNewSubtask('')
    }
  }

  const handleAddNote = (taskId) => {
    if (newNote.trim()) {
      addNote(taskId, newNote.trim())
      setNewNote('')
    }
  }
  
  // Normalize notes and subtasks to always be arrays
  const normalizedTask = task ? {
    ...task,
    notes: Array.isArray(task.notes) 
      ? task.notes 
      : (task.notes && typeof task.notes === 'string' && task.notes.trim())
        ? task.notes.split('\n').filter(n => n.trim()).map((content, idx) => ({
            id: `note-${idx}`,
            content: content.trim(),
            createdAt: new Date().toISOString()
          }))
        : [],
    subtasks: (() => {
      // Normalize subtasks to always be an array
      if (Array.isArray(task.subtasks)) {
        return task.subtasks.map((st, idx) => {
          if (typeof st === 'string') {
            return { id: `subtask-${idx}`, title: st, completed: false, aiPrompt: null }
          }
          if (typeof st === 'object' && st !== null) {
            return {
              id: st.id || `subtask-${idx}`,
              title: st.title || st.name || String(st),
              completed: st.completed === true || st.completed === 'true' || st.completed === 1 || false,
              aiPrompt: st.aiPrompt || null
            }
          }
          return { id: `subtask-${idx}`, title: String(st), completed: false, aiPrompt: null }
        })
      } else if (task.subtasks && typeof task.subtasks === 'string') {
        // Try to parse JSON string
        try {
          const parsed = JSON.parse(task.subtasks)
          if (Array.isArray(parsed)) {
            return parsed.map((st, idx) => {
              if (typeof st === 'string') {
                return { id: `subtask-${idx}`, title: st, completed: false, aiPrompt: null }
              }
              if (typeof st === 'object' && st !== null) {
                return {
                  id: st.id || `subtask-${idx}`,
                  title: st.title || st.name || String(st),
                  completed: st.completed === true || st.completed === 'true' || st.completed === 1 || false,
                  aiPrompt: st.aiPrompt || null
                }
              }
              return { id: `subtask-${idx}`, title: String(st), completed: false, aiPrompt: null }
            })
          }
        } catch (e) {
          console.warn('Failed to parse subtasks JSON:', e)
        }
      }
      return []
    })()
  } : null
  
  // Get next available task for "Start Here" button
  const nextTask = getNextTask(tasks)
  
  // Check if any tasks are completed (to show "Continue" vs "Start")
  const hasCompletedTasks = Object.values(tasks).some(t => t.status === TaskStatus.COMPLETED)
  
  // Check if current task has a guide (always true now - auto-generated if needed)
  const hasGuide = normalizedTask !== null
  
  // Use normalizedTask for display, but keep task for operations (to maintain original structure)
  const displayTask = normalizedTask || task

  return (
    <div className="todo-panel-overlay">
      <div className="todo-panel">
        <div className="todo-panel-header">
          <div>
            <h2>🚀 BitniTex Project Tracker</h2>
            <p className="todo-subtitle">Track your project progress step by step</p>
          </div>
          <button className="todo-close-btn" onClick={() => setShowTodoPanel(false)}>
            ✕
          </button>
        </div>

        {/* Progress Overview */}
        <div className="todo-progress-section">
          {!selectedTask && nextTask && (
            <div className="start-here-banner">
              <div className="start-here-content">
                <div className="start-here-icon">🎮</div>
                <div>
                  <h3>{hasCompletedTasks ? 'Ready to Continue?' : 'Ready to Start?'}</h3>
                  <p>{hasCompletedTasks ? 'Continue with' : 'Begin with'}: <strong>{nextTask.guide?.title || nextTask.title || 'Next Task'}</strong></p>
                </div>
              </div>
              <button 
                className="start-here-btn"
                onClick={async () => {
                  // Use the task ID from nextTask object (returned by getNextTask)
                  const taskId = nextTask?.id || 'ProjectSetup'
                  console.log('🚀 Starting from "Start Here" button:', taskId, 'Task status:', tasks[taskId]?.status)
                  
                  // Ensure task exists
                  if (!tasks[taskId]) {
                    await getOrCreateTask(taskId)
                  }
                  
                  setSelectedTask(taskId)
                  setShowGuide(true)
                }}
              >
                {hasCompletedTasks ? '▶️ Continue' : '🚀 Start Here'}
              </button>
            </div>
          )}
          
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${progress.percentage}%` }}></div>
            <span className="progress-bar-text">{progress.percentage}% Complete</span>
          </div>
          
          <div className="progress-stats">
            <div className="progress-stat">
              <span className="stat-value">{progress.completed}</span>
              <span className="stat-label">Completed</span>
            </div>
            <div className="progress-stat">
              <span className="stat-value">{progress.inProgress}</span>
              <span className="stat-label">In Progress</span>
            </div>
            <div className="progress-stat">
              <span className="stat-value">{progress.notStarted}</span>
              <span className="stat-label">Not Started</span>
            </div>
            <div className="progress-stat">
              <span className="stat-value">{progress.totalEstimated}h</span>
              <span className="stat-label">Estimated</span>
            </div>
            <div className="progress-stat">
              <span className="stat-value">{progress.totalActual}h</span>
              <span className="stat-label">Actual</span>
            </div>
          </div>
        </div>

        <div className="todo-content">
          {/* Sidebar - Task List */}
          <div className="todo-sidebar">
            {/* Filters */}
            <div className="todo-filters">
              <select 
                value={filterCategory || ''} 
                onChange={(e) => setFilterCategory(e.target.value || null)}
                className="todo-filter-select"
              >
                <option value="">All Categories</option>
                {categories.map(cat => {
                  const catProgress = getCategoryProgress(cat)
                  return (
                    <option key={cat} value={cat}>
                      {cat} ({catProgress.percentage}%)
                    </option>
                  )
                })}
              </select>

              <select 
                value={filterStatus || ''} 
                onChange={(e) => setFilterStatus(e.target.value || null)}
                className="todo-filter-select"
              >
                <option value="">All Status</option>
                <option value={TaskStatus.NOT_STARTED}>Not Started</option>
                <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
                <option value={TaskStatus.COMPLETED}>Completed</option>
                <option value={TaskStatus.BLOCKED}>Blocked</option>
              </select>
            </div>

            {/* Task List */}
            <div className="todo-task-list">
              {filteredTasks.filter(t => t && t.id).map(task => {
                const completedSubtasks = task.subtasks?.filter(st => st.completed).length || 0
                const totalSubtasks = task.subtasks?.length || 0

                return (
                  <div
                    key={task.id}
                    className={`todo-task-item ${selectedTask === task.id ? 'active' : ''}`}
                    onClick={() => setSelectedTask(task.id)}
                  >
                    <div className="task-item-header">
                      <div 
                        className="task-status-indicator" 
                        style={{ backgroundColor: getStatusColor(task.status) }}
                      />
                      <div className="task-item-content">
                        <h4>{task.title}</h4>
                        <div className="task-item-meta">
                          <span className="task-category">{task.category}</span>
                          <span 
                            className="task-priority" 
                            style={{ color: getPriorityColor(task.priority) }}
                          >
                            {task.priority}
                          </span>
                        </div>
                        {totalSubtasks > 0 && (
                          <div className="task-subtasks-progress">
                            {completedSubtasks}/{totalSubtasks} subtasks
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Main Content - Task Details */}
          <div className="todo-main">
            {loadingTask && !task ? (
              <div className="task-loading">
                <div className="loading-spinner"></div>
                <p>Loading task...</p>
              </div>
            ) : task ? (
              <>
                <div className="task-detail-header">
                  <div>
                    <h3>{task.title}</h3>
                    <p className="task-description">{task.description}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    {hasGuide && (
                      <button
                        className={`guide-toggle-btn ${showGuide ? 'active' : ''}`}
                        onClick={() => setShowGuide(!showGuide)}
                        title={showGuide ? 'Hide Step-by-Step Guide' : 'Show Step-by-Step Guide'}
                      >
                        {showGuide ? '📖 Guide' : '📋 Details'}
                      </button>
                    )}
                    <div 
                      className="task-priority-badge" 
                      style={{ 
                        backgroundColor: getPriorityColor(task.priority),
                        color: '#fff'
                      }}
                    >
                      {task.priority}
                    </div>
                  </div>
                </div>

                {/* Step-by-Step Guide */}
                {showGuide && hasGuide && task && task.id && (
                  <StepByStepGuide 
                    task={task}
                    onCompleteStep={() => {
                      // Mark current step as complete
                      if (task) {
                        updateTaskStatus(task.id, TaskStatus.COMPLETED)
                      }
                    }}
                    onNextTask={async (nextTaskId) => {
                      try {
                        // Get fresh task reference from store to avoid stale closure
                        const currentTaskFromStore = tasks[selectedTask] || task
                        
                        console.log('🔄 Starting next task:', nextTaskId)
                        console.log('📊 Current task before transition:', currentTaskFromStore?.id, 'Status:', currentTaskFromStore?.status)
                        console.log('📊 Selected task ID:', selectedTask)
                        
                        // Prevent any hash navigation that might interfere
                        if (window.location.hash) {
                          window.history.replaceState(null, '', window.location.pathname + window.location.search)
                        }
                        
                        // CRITICAL: Ensure current task is marked as completed BEFORE moving to next
                        if (currentTaskFromStore && currentTaskFromStore.status !== TaskStatus.COMPLETED) {
                          console.log('⚠️ Marking current task as completed:', currentTaskFromStore.id)
                          updateTaskStatus(currentTaskFromStore.id, TaskStatus.COMPLETED)
                          // Wait longer for state to update
                          await new Promise(resolve => setTimeout(resolve, 300))
                        }
                        
                        // Create/get the NEXT task FIRST
                        console.log('📦 Creating/getting NEXT task:', nextTaskId)
                        const createdTask = await getOrCreateTask(nextTaskId)
                        console.log('✅ Next task created/loaded:', createdTask.id, createdTask.status)
                        
                        // Wait for task to be in store
                        await new Promise(resolve => setTimeout(resolve, 200))
                        
                        // IMPORTANT: Set the new task BEFORE clearing the old one
                        // This prevents the blank screen
                        console.log('🎯 Setting NEW task:', nextTaskId)
                        setCurrentTask(createdTask)
                        setSelectedTask(nextTaskId)
                        setShowGuide(true)
                        
                        // Verify after a moment
                        await new Promise(resolve => setTimeout(resolve, 100))
                        
                        // Force a re-check after a delay
                        setTimeout(async () => {
                          // Verify task is loaded
                          if (!tasks[nextTaskId]) {
                            console.log('⚠️ Task not in store, reloading...')
                            const reloadedTask = await getOrCreateTask(nextTaskId)
                            setCurrentTask(reloadedTask)
                          } else {
                            setCurrentTask(tasks[nextTaskId])
                          }
                          
                          // Scroll to top
                          const panel = document.querySelector('.todo-panel')
                          if (panel) {
                            panel.scrollTop = 0
                          }
                        }, 300)
                      } catch (error) {
                        console.error('❌ Error:', error)
                        // Fallback - create a basic task and set it
                        const fallbackTask = {
                          id: nextTaskId,
                          nodeId: nextTaskId,
                          title: `${nextTaskId} Development`,
                          description: `Task for ${nextTaskId}`,
                          status: TaskStatus.NOT_STARTED,
                          priority: TaskPriority.MEDIUM,
                          category: 'Infrastructure',
                          estimatedHours: 8,
                          actualHours: 0,
                          subtasks: [],
                          notes: [],
                          dependencies: [],
                          createdAt: new Date().toISOString(),
                          updatedAt: new Date().toISOString()
                        }
                        setCurrentTask(fallbackTask)
                        setSelectedTask(nextTaskId)
                        setShowGuide(true)
                        console.log('⚠️ Using fallback task:', fallbackTask)
                      }
                    }}
                  />
                )}

                {/* Regular Task Details (shown when guide is hidden or not available) */}
                {(!showGuide || !hasGuide) && (
                  <>

                {/* Status Selector */}
                <div className="task-section">
                  <label className="section-label">Status</label>
                  <div className="status-buttons">
                    {Object.values(TaskStatus).map((status, idx) => (
                      <button
                        key={status}
                        className={`status-btn ${normalizedTask?.status === status ? 'active' : ''}`}
                        style={{
                          backgroundColor: normalizedTask?.status === status ? getStatusColor(status) : 'transparent',
                          borderColor: getStatusColor(status),
                          color: normalizedTask?.status === status ? '#fff' : getStatusColor(status)
                        }}
                        onClick={() => updateTaskStatus(task.id, status)}
                      >
                        {status.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Tracking */}
                <div className="task-section">
                  <label className="section-label">Time Tracking</label>
                  <div className="time-tracking">
                    <div className="time-item">
                      <span>Estimated:</span>
                      <strong>{normalizedTask?.estimatedHours || 0}h</strong>
                    </div>
                    <div className="time-item">
                      <span>Actual:</span>
                      {editingHours === task.id ? (
                        <input
                          type="number"
                          value={normalizedTask?.actualHours || 0}
                          onChange={(e) => updateActualHours(task.id, parseFloat(e.target.value) || 0)}
                          onBlur={() => setEditingHours(null)}
                          autoFocus
                          className="hours-input"
                        />
                      ) : (
                        <strong onClick={() => setEditingHours(task.id)} style={{ cursor: 'pointer' }}>
                          {normalizedTask?.actualHours || 0}h ✏️
                        </strong>
                      )}
                    </div>
                  </div>
                </div>

                {/* Dependencies */}
                {normalizedTask?.dependencies && Array.isArray(normalizedTask.dependencies) && normalizedTask.dependencies.length > 0 && (
                  <div className="task-section">
                    <label className="section-label">Dependencies</label>
                    <div className="dependencies">
                      {normalizedTask.dependencies.map(dep => (
                        <span key={dep} className="dependency-tag">{dep}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Subtasks */}
                <div className="task-section">
                  <label className="section-label">
                    Subtasks ({normalizedTask?.subtasks?.filter(st => st.completed).length || 0}/{normalizedTask?.subtasks?.length || 0})
                  </label>
                  <div className="subtasks-list">
                    {(() => {
                      // Debug logging
                      if (normalizedTask) {
                        console.log('🔍 Subtasks Debug:', {
                          hasNormalizedTask: !!normalizedTask,
                          subtasksRaw: task?.subtasks,
                          subtasksNormalized: normalizedTask.subtasks,
                          subtasksLength: normalizedTask.subtasks?.length,
                          subtasksType: typeof normalizedTask.subtasks,
                          isArray: Array.isArray(normalizedTask.subtasks)
                        })
                      }
                      
                      if (normalizedTask?.subtasks && Array.isArray(normalizedTask.subtasks) && normalizedTask.subtasks.length > 0) {
                        return normalizedTask.subtasks.map((subtask, idx) => {
                          const subtaskId = subtask.id || `subtask-${idx}-${subtask.title}`
                          const isCompleted = subtask.completed === true || subtask.completed === 'true' || subtask.completed === 1
                          
                          return (
                            <SubtaskItem
                              key={subtaskId}
                              subtask={subtask}
                              idx={idx}
                              taskId={task.id}
                              isCompleted={isCompleted}
                              toggleSubtask={toggleSubtask}
                            />
                          )
                        })
                      }
                      return <div className="no-subtasks">No subtasks yet</div>
                    })()}
                  </div>
                  
                  <div className="add-subtask">
                    <input
                      type="text"
                      value={newSubtask}
                      onChange={(e) => setNewSubtask(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddSubtask(task.id)}
                      placeholder="Add new subtask..."
                      className="subtask-input"
                    />
                    <button onClick={() => handleAddSubtask(task.id)} className="add-btn">+</button>
                  </div>
                </div>

                {/* Notes */}
                <div className="task-section">
                  <label className="section-label">Notes</label>
                  <div className="notes-list">
                    {normalizedTask?.notes && Array.isArray(normalizedTask.notes) && normalizedTask.notes.length > 0 ? (
                      normalizedTask.notes.map((note, idx) => {
                        const noteId = typeof note === 'object' ? (note.id || `note-${idx}`) : `note-${idx}`
                        const noteContent = typeof note === 'object' ? note.content : note
                        const noteDate = typeof note === 'object' && note.createdAt ? note.createdAt : new Date().toISOString()
                        return (
                          <div key={noteId} className="note-item">
                            <p>{noteContent}</p>
                            <span className="note-date">{new Date(noteDate).toLocaleString()}</span>
                          </div>
                        )
                      })
                    ) : (
                      <div className="no-notes">No notes yet</div>
                    )}
                  </div>
                  
                  <div className="add-note">
                    <textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Add a note..."
                      className="note-textarea"
                    />
                    <button onClick={() => handleAddNote(task.id)} className="add-btn">Add Note</button>
                  </div>
                </div>
                  </>
                )}
              </>
            ) : (
              <div className="no-task-selected">
                <div className="empty-state-icon">📋</div>
                <p>Select a task to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoPanel
