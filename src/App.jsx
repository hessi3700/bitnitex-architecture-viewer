import React from 'react'
import { AppProvider } from './store/AppStore'
import { TodoProvider } from './store/TodoStore'
import Layout from './components/Layout'
import './App.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('React Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'white', background: '#0a0e1a' }}>
          <h1>Something went wrong</h1>
          <pre style={{ color: '#ef4444' }}>{this.state.error?.toString()}</pre>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <TodoProvider>
          <Layout />
        </TodoProvider>
      </AppProvider>
    </ErrorBoundary>
  )
}

export default App

