import React, { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext()

export const useAppStore = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppStore must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('everything')
  const [selectedNode, setSelectedNode] = useState(null)
  const [breadcrumbs, setBreadcrumbs] = useState(['Overview'])
  const [zoomLevel, setZoomLevel] = useState(1)
  const [showMinimap, setShowMinimap] = useState(true)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showApiTester, setShowApiTester] = useState(false)

  const navigateToView = useCallback((view, nodeName = null) => {
    setCurrentView(view)
    setSelectedNode(nodeName)
    
    // Update breadcrumbs
    const newBreadcrumbs = ['Overview']
    if (view !== 'overview') {
      newBreadcrumbs.push(view)
    }
    if (nodeName) {
      newBreadcrumbs.push(nodeName)
    }
    setBreadcrumbs(newBreadcrumbs)
  }, [])

  const zoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 0.2, 3))
  }, [])

  const zoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 0.2, 0.3))
  }, [])

  const resetZoom = useCallback(() => {
    setZoomLevel(1)
  }, [])

  const toggleMinimap = useCallback(() => {
    setShowMinimap(prev => !prev)
  }, [])

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed(prev => !prev)
  }, [])

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev)
  }, [])

  const value = {
    currentView,
    selectedNode,
    breadcrumbs,
    zoomLevel,
    showMinimap,
    sidebarCollapsed,
    isFullscreen,
    showApiTester,
    navigateToView,
    zoomIn,
    zoomOut,
    resetZoom,
    toggleMinimap,
    toggleSidebar,
    toggleFullscreen,
    setSelectedNode,
    setShowApiTester
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

