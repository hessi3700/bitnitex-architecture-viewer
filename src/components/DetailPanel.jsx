import React from 'react'
import { useAppStore } from '../store/AppStore'
import { getNodeDetails } from '../data/nodeDetails'

const DetailPanel = () => {
  const { selectedNode, setSelectedNode } = useAppStore()
  const details = getNodeDetails(selectedNode)

  if (!details) return null

  const renderEndpoints = (endpoints) => {
    if (!endpoints || endpoints.length === 0) return null
    
    return (
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
          Endpoints
        </h4>
        {endpoints.map((endpoint, index) => (
          <div key={index} className="node-card" style={{ marginBottom: '8px', padding: '12px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
              <span className="node-tag" style={{ 
                background: endpoint.method === 'GET' ? '#10b981' : 
                           endpoint.method === 'POST' ? '#3b82f6' : 
                           endpoint.method === 'PUT' ? '#f59e0b' : 
                           endpoint.method === 'DELETE' ? '#ef4444' : 
                           'var(--bg-secondary)',
                color: '#fff'
              }}>
                {endpoint.method}
              </span>
              <code style={{ fontSize: '12px', color: 'var(--accent-primary)' }}>
                {endpoint.path}
              </code>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              {endpoint.description}
            </div>
            {endpoint.auth && (
              <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '4px' }}>
                🔒 Requires: {endpoint.auth}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  const renderMethods = (methods) => {
    if (!methods || methods.length === 0) return null
    
    return (
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
          Methods
        </h4>
        {methods.map((method, index) => (
          <div key={index} style={{ 
            padding: '8px 12px', 
            background: 'var(--bg-tertiary)', 
            borderRadius: '6px',
            marginBottom: '6px',
            fontSize: '11px',
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            color: 'var(--text-secondary)',
            lineHeight: '1.6'
          }}>
            {method}
          </div>
        ))}
      </div>
    )
  }

  const renderResponsibilities = (responsibilities) => {
    if (!responsibilities || responsibilities.length === 0) return null
    
    return (
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
          Responsibilities
        </h4>
        <ul style={{ 
          listStyle: 'none', 
          padding: 0,
          margin: 0 
        }}>
          {responsibilities.map((item, index) => (
            <li key={index} style={{ 
              padding: '8px 0', 
              fontSize: '12px',
              color: 'var(--text-secondary)',
              display: 'flex',
              gap: '8px'
            }}>
              <span style={{ color: 'var(--accent-primary)' }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderSchema = (schema) => {
    if (!schema || schema.length === 0) return null
    
    return (
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
          Schema
        </h4>
        <div style={{ 
          background: 'var(--bg-tertiary)', 
          borderRadius: '8px',
          padding: '12px',
          fontSize: '11px',
          fontFamily: 'monospace'
        }}>
          {schema.map((field, index) => (
            <div key={index} style={{ 
              padding: '6px 0',
              borderBottom: index < schema.length - 1 ? '1px solid var(--border-primary)' : 'none'
            }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '2px' }}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
                  {field.name}
                </span>
                <span style={{ color: 'var(--text-muted)' }}>
                  {field.type}
                </span>
                {field.key && (
                  <span className="node-tag" style={{ fontSize: '9px', padding: '2px 6px' }}>
                    {field.key}
                  </span>
                )}
              </div>
              {field.description && (
                <div style={{ color: 'var(--text-muted)', fontSize: '10px', marginLeft: '0' }}>
                  {field.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="detail-panel">
      <div className="detail-panel-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>{details.icon}</span>
          <div>
            <div className="detail-panel-title">{details.title}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              {details.type}
            </div>
          </div>
        </div>
        <button className="detail-panel-close" onClick={() => setSelectedNode(null)}>
          ✕
        </button>
      </div>

      <div className="detail-panel-content">
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
          {details.description}
        </p>

        {details.tags && (
          <div className="node-card-meta" style={{ marginBottom: '20px' }}>
            {details.tags.map(tag => (
              <span key={tag} className="node-tag">{tag}</span>
            ))}
          </div>
        )}

        {renderEndpoints(details.endpoints)}
        {renderMethods(details.methods)}
        {renderResponsibilities(details.responsibilities)}
        {renderSchema(details.schema)}

        {details.services && (
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
              Services Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {details.services.map(service => (
                <span key={service} className="node-tag" style={{ background: 'var(--accent-secondary)', color: '#fff' }}>
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}

        {details.implementations && (
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
              Implementations
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {details.implementations.map(impl => (
                <span key={impl} className="node-tag">
                  {impl}
                </span>
              ))}
            </div>
          </div>
        )}

        {details.supportedChains && (
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
              Supported Chains
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {details.supportedChains.map(chain => (
                <span key={chain} className="node-tag" style={{ background: 'var(--accent-success)', color: '#fff' }}>
                  {chain}
                </span>
              ))}
            </div>
          </div>
        )}

        {details.relationships && (
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
              Relationships
            </h4>
            <div style={{ 
              background: 'var(--bg-tertiary)', 
              borderRadius: '8px',
              padding: '12px',
              fontSize: '11px',
              fontFamily: 'monospace'
            }}>
              {details.relationships.map((rel, index) => (
                <div key={index} style={{ 
                  padding: '6px 0',
                  color: 'var(--text-secondary)'
                }}>
                  {rel}
                </div>
              ))}
            </div>
          </div>
        )}

        {details.notes && (
          <div style={{ 
            marginTop: '20px',
            padding: '12px',
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '8px'
          }}>
            <h4 style={{ fontSize: '12px', fontWeight: 600, color: '#f59e0b', marginBottom: '8px' }}>
              ⚠️ Notes
            </h4>
            {details.notes.map((note, index) => (
              <p key={index} style={{ 
                fontSize: '11px', 
                color: 'var(--text-secondary)',
                marginBottom: index < details.notes.length - 1 ? '8px' : '0'
              }}>
                {note}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DetailPanel

