import React, { useState, useEffect } from 'react'
import { useAppStore } from '../store/AppStore'
import { getNodeDetails } from '../data/nodeDetails'
import './ApiTester.css'

const ApiTester = () => {
  const { selectedNode, setSelectedNode, setShowApiTester } = useAppStore()
  const [selectedEndpoint, setSelectedEndpoint] = useState(null)
  const [requestData, setRequestData] = useState('{}')
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [baseUrl, setBaseUrl] = useState('http://localhost:8080')
  const [headers, setHeaders] = useState('{\n  "Content-Type": "application/json"\n}')

  const nodeDetails = selectedNode ? getNodeDetails(selectedNode) : null

  // Auto-select first endpoint when component opens
  useEffect(() => {
    if (nodeDetails && nodeDetails.endpoints && nodeDetails.endpoints.length > 0 && !selectedEndpoint) {
      setSelectedEndpoint(nodeDetails.endpoints[0])
    }
  }, [nodeDetails, selectedEndpoint])

  const handleTestEndpoint = async (endpoint) => {
    setSelectedEndpoint(endpoint)
    setLoading(true)
    setResponse(null)

    try {
      const url = `${baseUrl}${endpoint.path}`
      const options = {
        method: endpoint.method,
        headers: JSON.parse(headers)
      }

      if (['POST', 'PUT', 'PATCH'].includes(endpoint.method)) {
        options.body = requestData
      }

      const startTime = Date.now()
      const res = await fetch(url, options)
      const endTime = Date.now()

      const responseData = await res.text()
      let parsedResponse
      try {
        parsedResponse = JSON.parse(responseData)
      } catch {
        parsedResponse = responseData
      }

      setResponse({
        status: res.status,
        statusText: res.statusText,
        headers: Object.fromEntries(res.headers.entries()),
        data: parsedResponse,
        time: endTime - startTime
      })
    } catch (error) {
      setResponse({
        error: true,
        message: error.message,
        time: 0
      })
    } finally {
      setLoading(false)
    }
  }

  // Debug info
  useEffect(() => {
    if (selectedNode) {
      console.log('API Tester - Selected Node:', selectedNode)
      console.log('API Tester - Node Details:', nodeDetails)
      if (nodeDetails) {
        console.log('API Tester - Endpoints:', nodeDetails.endpoints)
      }
    }
  }, [selectedNode, nodeDetails])

  // If no node selected or no endpoints, show empty state
  if (!selectedNode) {
    return (
      <div className="api-tester-empty">
        <div className="empty-icon">🔌</div>
        <div className="empty-text">No component selected</div>
        <div className="empty-hint">
          Click on a component in the diagram (like "AdminController" or "CustomerController") to test its endpoints
        </div>
      </div>
    )
  }

  if (!nodeDetails) {
    return (
      <div className="api-tester-empty">
        <div className="empty-icon">❓</div>
        <div className="empty-text">Component not found</div>
        <div className="empty-hint">
          Selected: <code>{selectedNode}</code><br/>
          This component doesn't have endpoint definitions yet. Try clicking on a Controller or Service component.
        </div>
      </div>
    )
  }

  if (!nodeDetails.endpoints || nodeDetails.endpoints.length === 0) {
    return (
      <div className="api-tester-empty">
        <div className="empty-icon">📭</div>
        <div className="empty-text">No endpoints available</div>
        <div className="empty-hint">
          Component: <code>{selectedNode}</code><br/>
          This component doesn't have any API endpoints defined. Endpoints are typically defined for Controllers.
        </div>
      </div>
    )
  }

  return (
    <div className="api-tester">
      <div className="api-tester-header">
        <div className="api-tester-title">
          <span className="api-tester-icon">🧪</span>
          <span>API Endpoint Tester</span>
        </div>
        <button 
          className="api-tester-close"
          onClick={() => setShowApiTester(false)}
          title="Close"
        >
          ✕
        </button>
      </div>

      <div className="api-tester-content">
        {/* Base URL Configuration */}
        <div className="api-tester-section">
          <label className="api-tester-label">Base URL</label>
          <input
            type="text"
            className="api-tester-input"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            placeholder="http://localhost:8080"
          />
        </div>

        {/* Endpoints List */}
        <div className="api-tester-section">
          <label className="api-tester-label">Endpoints</label>
          <div className="endpoints-list">
            {nodeDetails.endpoints.map((endpoint, idx) => (
              <div
                key={idx}
                className={`endpoint-item ${selectedEndpoint === endpoint ? 'active' : ''}`}
                onClick={() => handleTestEndpoint(endpoint)}
              >
                <span className={`method-badge method-${endpoint.method.toLowerCase()}`}>
                  {endpoint.method}
                </span>
                <span className="endpoint-path">{endpoint.path}</span>
                {endpoint.description && (
                  <span className="endpoint-desc">{endpoint.description}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Request Configuration */}
        {selectedEndpoint && (
          <>
            <div className="api-tester-section">
              <label className="api-tester-label">Headers</label>
              <textarea
                className="api-tester-textarea"
                value={headers}
                onChange={(e) => setHeaders(e.target.value)}
                rows={4}
                placeholder='{\n  "Content-Type": "application/json",\n  "Authorization": "Bearer token"\n}'
              />
            </div>

            {['POST', 'PUT', 'PATCH'].includes(selectedEndpoint.method) && (
              <div className="api-tester-section">
                <label className="api-tester-label">Request Body</label>
                <textarea
                  className="api-tester-textarea"
                  value={requestData}
                  onChange={(e) => setRequestData(e.target.value)}
                  rows={8}
                  placeholder='{\n  "key": "value"\n}'
                />
              </div>
            )}

            <button
              className="api-tester-send-btn"
              onClick={() => handleTestEndpoint(selectedEndpoint)}
              disabled={loading}
            >
              {loading ? '⏳ Sending...' : '🚀 Send Request'}
            </button>
          </>
        )}

        {/* Response Display */}
        {response && (
          <div className="api-tester-section">
            <label className="api-tester-label">
              Response
              {response.time > 0 && (
                <span className="response-time">({response.time}ms)</span>
              )}
            </label>
            <div className={`response-container ${response.error ? 'error' : `status-${Math.floor(response.status / 100)}xx`}`}>
              {response.error ? (
                <div className="response-error">
                  <div className="error-title">❌ Error</div>
                  <div className="error-message">{response.message}</div>
                </div>
              ) : (
                <>
                  <div className="response-status">
                    <span className={`status-badge status-${Math.floor(response.status / 100)}xx`}>
                      {response.status} {response.statusText}
                    </span>
                  </div>
                  <div className="response-headers">
                    <div className="response-headers-title">Headers:</div>
                    <pre className="response-headers-content">
                      {JSON.stringify(response.headers, null, 2)}
                    </pre>
                  </div>
                  <div className="response-body">
                    <div className="response-body-title">Body:</div>
                    <pre className="response-body-content">
                      {typeof response.data === 'string' 
                        ? response.data 
                        : JSON.stringify(response.data, null, 2)}
                    </pre>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ApiTester

