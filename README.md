# Arnitex Backend Architecture Viewer

An interactive, professional React-based architecture diagram viewer for exploring the Arnitex Backend system.

## Features

🎨 **Professional UI**
- Modern dark theme optimized for viewing
- Smooth animations and transitions
- Responsive layout

🔍 **Interactive Exploration**
- Zoom in/out with mouse wheel or controls
- Pan by dragging the canvas
- Click on nodes to view detailed information
- Breadcrumb navigation
- Minimap for orientation

📊 **Multiple Views**
- System Overview - Complete architecture at a glance
- Controllers Layer - All REST API endpoints
- Services Layer - Business logic and integrations
- Database Schema - Complete database structure
- Key Flows - Critical business processes

🔧 **Modular & Extensible**
- Easy to add new diagrams via `diagramRegistry.js`
- Add node details via `nodeDetails.js`
- Mermaid-based diagrams (industry standard)

## Installation

```bash
cd diagram
npm install
```

## Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment to GitHub Pages

This project is ready for free hosting on GitHub Pages! See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions.

**Quick Deploy:**
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings (use GitHub Actions)
3. The workflow will automatically deploy on every push

The app works standalone (uses localStorage) or with an optional backend API.

## Project Structure

```
diagram/
├── src/
│   ├── components/          # React components
│   │   ├── Layout.jsx       # Main layout
│   │   ├── Sidebar.jsx      # Navigation sidebar
│   │   ├── Toolbar.jsx      # Top toolbar
│   │   ├── DiagramCanvas.jsx # Diagram rendering
│   │   ├── ZoomControls.jsx # Zoom controls
│   │   └── DetailPanel.jsx  # Detail panel for nodes
│   ├── data/                # Data files
│   │   ├── diagramRegistry.js  # All diagram definitions
│   │   └── nodeDetails.js      # Detailed node information
│   ├── store/               # State management
│   │   └── AppStore.jsx     # Global app state
│   ├── App.jsx              # Root component
│   ├── App.css              # Styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
└── index_react.html
```

## Adding New Diagrams

### 1. Add to `diagramRegistry.js`:

```javascript
export const diagramRegistry = {
  // ... existing diagrams ...
  
  myNewDiagram: {
    id: 'myNewDiagram',
    title: 'My New Diagram',
    subtitle: 'Description',
    icon: '🎯',
    type: 'detail',  // or 'composite'
    description: 'Detailed description',
    parent: 'overview',  // optional
    children: [],  // optional
    code: `
flowchart TB
  A[Start] --> B[End]
    `
  }
}
```

### 2. Add Node Details in `nodeDetails.js`:

```javascript
export const nodeDetails = {
  // ... existing details ...
  
  MyNode: {
    id: 'MyNode',
    type: 'controller', // or 'service', 'database'
    title: 'My Node',
    icon: '🔧',
    description: 'What this node does',
    endpoints: [
      { method: 'GET', path: '/api/my-endpoint', description: '...' }
    ],
    services: ['ServiceA', 'ServiceB'],
    tags: ['Tag1', 'Tag2']
  }
}
```

## Technologies Used

- **React 18** - UI framework
- **Mermaid** - Diagram rendering
- **Vite** - Build tool
- **Zustand** - State management (via custom context)
- **CSS Variables** - Theming

## Controls

- **Mouse Wheel + Ctrl**: Zoom in/out
- **Click + Drag**: Pan the canvas
- **Click on Node**: View details
- **Sidebar**: Navigate between views
- **Zoom Controls**: Bottom right corner
- **Breadcrumbs**: Navigate back to parent views

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Private - Arnitex Internal Use Only



