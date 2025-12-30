import React, { useState } from 'react'
import { useAppStore } from '../store/AppStore'
import { getAllDiagrams } from '../data/diagramRegistry'

const ZoomControls = () => {
  const { zoomLevel, zoomIn, zoomOut, resetZoom, isFullscreen, toggleFullscreen, currentView, navigateToView } = useAppStore()
  const [showTabSwitcher, setShowTabSwitcher] = useState(false)
  const diagrams = getAllDiagrams()
  const mainViews = diagrams.filter(d => d.type === 'composite' || d.type === 'detail')
  const currentDiagram = diagrams.find(d => d.id === currentView)

  const handleExitFullscreen = () => {
    toggleFullscreen()
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }

  return (
    <div className="zoom-controls">
      {/* Fullscreen Tab Switcher - Icons Only */}
      {isFullscreen && (
        <div className="fullscreen-tab-switcher">
          <button 
            className="tab-switcher-btn icon-only"
            onClick={() => setShowTabSwitcher(!showTabSwitcher)}
            title={currentDiagram?.title || 'Switch diagram view'}
          >
            <span className="current-tab-icon">{currentDiagram?.icon || '📊'}</span>
          </button>
          
          {showTabSwitcher && (
            <div className="tab-dropdown">
              {mainViews.map(diagram => (
                <button
                  key={diagram.id}
                  className={`tab-option icon-only ${currentView === diagram.id ? 'active' : ''}`}
                  onClick={() => {
                    navigateToView(diagram.id)
                    setShowTabSwitcher(false)
                  }}
                  title={diagram.title}
                >
                  <span className="tab-option-icon">{diagram.icon}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {isFullscreen && (
        <button className="zoom-btn exit-fullscreen" onClick={handleExitFullscreen} title="Exit Fullscreen">
          ✕
        </button>
      )}
      <button className="zoom-btn" onClick={zoomIn} title="Zoom In">
        +
      </button>
      <div className="zoom-level">{Math.round(zoomLevel * 100)}%</div>
      <button className="zoom-btn" onClick={zoomOut} title="Zoom Out">
        −
      </button>
      <button className="zoom-btn" onClick={resetZoom} title="Reset Zoom">
        ⟲
      </button>
    </div>
  )
}

export default ZoomControls

