import React from 'react'
import { useAppStore } from '../store/AppStore'
import { useTodoStore } from '../store/TodoStore'
import { getDiagram } from '../data/diagramRegistry'

const Toolbar = () => {
  const { 
    currentView, 
    breadcrumbs, 
    navigateToView, 
    toggleMinimap, 
    showMinimap,
    toggleSidebar,
    toggleFullscreen,
    showApiTester,
    setShowApiTester,
    selectedNode,
    isEditMode,
    setIsEditMode
  } = useAppStore()

  const { setShowTodoPanel, getProgress } = useTodoStore()
  const progress = getProgress()

  const currentDiagram = getDiagram(currentView)

  const handleFullscreen = () => {
    toggleFullscreen()
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <div className="toolbar">
      <div className="toolbar-title">
        <div className="breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="breadcrumb-separator">/</span>}
              <span 
                className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
                onClick={() => index === 0 && navigateToView('overview')}
              >
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="toolbar-actions">
        <button 
          className="toolbar-btn"
          onClick={() => setShowTodoPanel(true)}
          style={{ 
            background: progress.percentage > 0 ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : undefined,
            color: progress.percentage > 0 ? '#fff' : undefined,
            fontWeight: progress.percentage > 0 ? '600' : undefined
          }}
        >
          <span className="toolbar-btn-icon">✅</span>
          <span>Project Progress ({progress.percentage}%)</span>
        </button>


        <button 
          className={`toolbar-btn ${showApiTester ? 'active' : ''}`}
          onClick={() => setShowApiTester(!showApiTester)}
          title="API Endpoint Tester (Swagger-like)"
        >
          <span className="toolbar-btn-icon">🧪</span>
          <span>API Tester</span>
        </button>

        <button 
          className={`toolbar-btn ${showMinimap ? 'active' : ''}`}
          onClick={toggleMinimap}
        >
          <span className="toolbar-btn-icon">🗺️</span>
          <span>Minimap</span>
        </button>
        
        <button 
          className={`toolbar-btn ${isEditMode ? 'active' : ''}`}
          onClick={() => setIsEditMode(!isEditMode)}
          title="Enable edit mode to add nodes, connect them, and change colors"
        >
          <span className="toolbar-btn-icon">✏️</span>
          <span>{isEditMode ? 'Exit Edit' : 'Edit Diagram'}</span>
        </button>
        
        <button className="toolbar-btn" onClick={handleFullscreen}>
          <span className="toolbar-btn-icon">⛶</span>
          <span>Fullscreen</span>
        </button>
      </div>
    </div>
  )
}

export default Toolbar

