import React, { useState, useEffect } from 'react'
import { useAppStore } from '../store/AppStore'
import { loadAllDiagramsFromBackend } from '../utils/diagramBackend'

// Unique emojis for each diagram to avoid duplicates
// Uses database icon if available, otherwise assigns unique icon based on title/type
const getUniqueIcon = (diagram, index, allDiagrams = []) => {
  // First priority: Use icon from database if it exists and is unique
  if (diagram.icon && diagram.icon.trim() !== '') {
    // Check if this icon is already used by another diagram
    const iconUsedByOthers = allDiagrams.some((d, i) => 
      i !== index && d.icon === diagram.icon
    )
    if (!iconUsedByOthers) {
      return diagram.icon
    }
    // Icon is duplicate, fall through to assign unique one
  }
  
  // Second priority: Assign unique icon based on diagram title/type
  const title = (diagram.title || '').toLowerCase()
  const type = (diagram.type || '').toLowerCase()
  
  const iconMap = {
    'everything': '🌐',
    'overview': '🏗️',
    'controllers': '🎛️',
    'services': '⚙️',
    'database': '💾',
    'flows': '🔄',
    'external': '🌍',
    'advanced': '🚀',
    'trading': '📈',
    'wallet': '💰',
    'payment': '💳',
    'kyc': '👤',
    'identity': '👤',
    'notification': '📧',
    'support': '🎫',
    'content': '🎫',
    'security': '🔐',
    'blockchain': '⛓️',
    'analytics': '📊',
    'compliance': '✅',
    'financial': '💵',
    'operations': '🔧',
    'market': '📊',
    'coin': '🪙',
    'order': '📋',
    'trade': '💹',
    'admin': '👑',
    'promotional': '🎁',
    'testing': '🧪',
    'documentation': '📚',
    'deployment': '🚢',
    'monitoring': '📡',
    'api': '🔌'
  }
  
  // Try to match by title keywords
  for (const [key, emoji] of Object.entries(iconMap)) {
    if (title.includes(key) || type.includes(key)) {
      // Check if this emoji is already used (only check existing icons, don't recurse)
      const emojiUsed = allDiagrams.some((d, i) => 
        i !== index && d.icon === emoji
      )
      if (!emojiUsed) {
        return emoji
      }
    }
  }
  
  // Fallback: Assign from unique emoji pool based on index
  const uniqueEmojis = ['🌐', '🏗️', '🎛️', '⚙️', '💾', '🔄', '🌍', '🚀', '📈', '💰', '💳', '👤', '📧', '🎫', '🔐', '⛓️', '📊', '✅', '💵', '🔧', '🎮', '🎯', '🔒', '📱', '💻', '🖥️', '🗄️', '🔌', '⚡', '🎨', '🪙', '📋', '💹', '👑', '🎁', '🧪', '📚', '🚢', '📡', '🌐']
  
  // Find first unused emoji
  for (const emoji of uniqueEmojis) {
    const emojiUsed = allDiagrams.some((d, i) => 
      i !== index && d.icon === emoji
    )
    if (!emojiUsed) {
      return emoji
    }
  }
  
  // Last resort: use index-based emoji
  return uniqueEmojis[index % uniqueEmojis.length] || '📊'
}

const Sidebar = () => {
  const { currentView, sidebarCollapsed, navigateToView, toggleSidebar } = useAppStore()
  const [diagrams, setDiagrams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [seeding, setSeeding] = useState(false)

  const loadDiagrams = async () => {
    setLoading(true)
    setError(null)
    try {
      console.log('🔄 Loading diagrams from backend...')
      const dbDiagrams = await loadAllDiagramsFromBackend()
      if (dbDiagrams && Array.isArray(dbDiagrams) && dbDiagrams.length > 0) {
        console.log(`✅ Loaded ${dbDiagrams.length} diagrams from database`)
        const diagramsWithUniqueIcons = dbDiagrams.map((diagram, index) => ({
          ...diagram,
          icon: getUniqueIcon(diagram, index, dbDiagrams)
        }))
        setDiagrams(diagramsWithUniqueIcons)
        setError(null)
      } else {
        console.warn('⚠️ No diagrams found in database (empty array or null)')
        setError('No diagrams available. Click "Seed database" below.')
        setDiagrams([])
      }
    } catch (err) {
      console.error('❌ Error loading diagrams from database:', err)
      const errorMessage = err.message || 'Unknown error'
      if (errorMessage.includes('Backend not available') || errorMessage.includes('not configured')) {
        setError('Backend not available. Set VITE_API_URL to your Worker URL and rebuild.')
      } else if (errorMessage.includes('Failed to fetch') || errorMessage.includes('ECONNREFUSED')) {
        setError('Cannot reach API. Try with VPN or check network.')
      } else {
        setError(`Failed: ${errorMessage.substring(0, 80)}`)
      }
      setDiagrams([])
    } finally {
      setLoading(false)
    }
  }

  const handleSeedDatabase = async () => {
    setSeeding(true)
    try {
      const { seedDiagramsAndNodes } = await import('../utils/diagramBackend')
      await seedDiagramsAndNodes()
      await loadDiagrams()
      window.dispatchEvent(new CustomEvent('diagram-saved'))
    } catch (err) {
      console.error('Seed failed:', err)
      setError(err.message || 'Seed failed')
    } finally {
      setSeeding(false)
    }
  }

  useEffect(() => {
    loadDiagrams()
  }, [])

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
        {!sidebarCollapsed && <p className="sidebar-credit">by HessiKz · Hesam Kazemi</p>}
      </div>

      <nav className="nav-section">
        {!sidebarCollapsed && <div className="nav-section-title">Views</div>}
        {loading ? (
          <div className="nav-item" style={{ opacity: 0.5 }}>
            <span className="nav-item-icon">⏳</span>
            {!sidebarCollapsed && <span className="nav-item-title">Loading...</span>}
          </div>
        ) : error ? (
          <>
            <div className="nav-item" style={{ opacity: 0.7, color: '#ef4444' }}>
              <span className="nav-item-icon">⚠️</span>
              {!sidebarCollapsed && <span className="nav-item-title" style={{ fontSize: '12px' }}>{error}</span>}
            </div>
            {!sidebarCollapsed && (
              <button
                type="button"
                className="nav-item seed-db-btn"
                onClick={handleSeedDatabase}
                disabled={seeding}
                title="Seed from this browser"
              >
                <span className="nav-item-icon">{seeding ? '⏳' : '🌱'}</span>
                <span className="nav-item-title">{seeding ? 'Seeding...' : 'Seed database'}</span>
              </button>
            )}
          </>
        ) : mainViews.length === 0 ? (
          <>
            <div className="nav-item" style={{ opacity: 0.7 }}>
              <span className="nav-item-icon">📭</span>
              {!sidebarCollapsed && <span className="nav-item-title">No diagrams available</span>}
            </div>
            {!sidebarCollapsed && (
              <button
                type="button"
                className="nav-item seed-db-btn"
                onClick={handleSeedDatabase}
                disabled={seeding}
                title="Seed VPN + exchange diagrams from this browser (no script needed)"
              >
                <span className="nav-item-icon">{seeding ? '⏳' : '🌱'}</span>
                <span className="nav-item-title">{seeding ? 'Seeding...' : 'Seed database (VPN + exchange)'}</span>
              </button>
            )}
          </>
        ) : (
          mainViews.map((diagram, index) => (
          <button
            key={diagram.id}
            className={`nav-item ${currentView === diagram.id ? 'active' : ''}`}
            onClick={() => navigateToView(diagram.id)}
            title={sidebarCollapsed ? diagram.title : undefined}
          >
            <span className="nav-item-icon">{diagram.icon || getUniqueIcon(diagram, index)}</span>
            {!sidebarCollapsed && (
              <span className="nav-item-title">{diagram.title}</span>
            )}
          </button>
          ))
        )}
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
      {!sidebarCollapsed && (
        <div className="sidebar-credit-footer">
          <span className="sidebar-credit-footer-text">© HessiKz · Hesam Kazemi</span>
        </div>
      )}
    </aside>
  )
}

export default Sidebar

