import React from 'react'
import { useAppStore } from '../store/AppStore'
import { getAllDiagrams } from '../data/diagramRegistry'

const Sidebar = () => {
  const { currentView, sidebarCollapsed, navigateToView, toggleSidebar } = useAppStore()
  const diagrams = getAllDiagrams()

  const mainViews = diagrams.filter(d => d.type === 'composite' || d.type === 'detail')

  return (
    <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
      {/* Collapse Toggle Button */}
      <button 
        className="sidebar-toggle"
        onClick={toggleSidebar}
        title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {sidebarCollapsed ? '▶' : '◀'}
      </button>

      <div className="sidebar-header">
        <div className="sidebar-title">
          <span>💎</span>
          {!sidebarCollapsed && <div>BitniTex</div>}
        </div>
        {!sidebarCollapsed && <p className="sidebar-subtitle">Architecture Explorer</p>}
      </div>

      <nav className="nav-section">
        {!sidebarCollapsed && <div className="nav-section-title">Views</div>}
        {mainViews.map(diagram => (
          <button
            key={diagram.id}
            className={`nav-item ${currentView === diagram.id ? 'active' : ''}`}
            onClick={() => navigateToView(diagram.id)}
            title={sidebarCollapsed ? diagram.title : undefined}
          >
            <span className="nav-item-icon">{diagram.icon}</span>
            {!sidebarCollapsed && (
              <span className="nav-item-title">{diagram.title}</span>
            )}
          </button>
        ))}
      </nav>

      {!sidebarCollapsed && (
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">Controllers</div>
              <div className="stat-value">25<span className="stat-unit">+</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Services</div>
              <div className="stat-value">140<span className="stat-unit">+</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Tables</div>
              <div className="stat-value">81</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Endpoints</div>
              <div className="stat-value">200<span className="stat-unit">+</span></div>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}

export default Sidebar

