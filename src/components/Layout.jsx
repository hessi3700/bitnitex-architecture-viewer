import React from 'react'
import { useAppStore } from '../store/AppStore'
import Sidebar from './Sidebar'
import Toolbar from './Toolbar'
import DiagramCanvas from './DiagramCanvas'
import ZoomControls from './ZoomControls'
import DetailPanel from './DetailPanel'
import TodoPanel from './TodoPanel'
import ApiTester from './ApiTester'

const Layout = () => {
  const { sidebarCollapsed, selectedNode, isFullscreen, showApiTester } = useAppStore()

  return (
    <div className={`app-container ${isFullscreen ? 'fullscreen-mode' : ''}`}>
      {!isFullscreen && <Sidebar />}
      <main className="main-content">
        {!isFullscreen && <Toolbar />}
        <DiagramCanvas />
        <ZoomControls />
        {selectedNode && !isFullscreen && <DetailPanel />}
      </main>
      <TodoPanel />
      {showApiTester && <ApiTester />}
    </div>
  )
}

export default Layout

