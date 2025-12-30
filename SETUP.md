# Quick Setup Guide

## Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

Check if you have Node.js installed:
```bash
node --version
npm --version
```

If not installed, install Node.js from: https://nodejs.org/

## Setup Steps

### 1. Navigate to the diagram folder

```bash
cd /home/hessi/Desktop/Developement/ir_backend_core_/backend_core-develop/diagram
```

### 2. Install dependencies

```bash
npm install
```

This will install:
- React 18
- Mermaid (diagram library)
- Vite (build tool)
- Other dependencies

### 3. Start the development server

```bash
npm run dev
```

The viewer will automatically open in your browser at `http://localhost:3000`

### 4. Explore!

- Click on different views in the sidebar
- Zoom with Ctrl+Scroll or the zoom controls
- Click and drag to pan
- Click on nodes to see detailed information

## Building for Production

```bash
npm run build
```

Then serve the `dist/` folder with any static file server.

## Features Overview

### Views Available

1. **System Overview** - Bird's eye view of the entire system
2. **Controllers Layer** - All 25+ REST API controllers with endpoints
3. **Services Layer** - 140+ business services and integrations
4. **Database Schema** - All 81 database tables with relationships
5. **Key Flows** - Step-by-step critical business processes

### Interactive Features

- **Zoom & Pan**: Navigate large diagrams easily
- **Click to Drill Down**: Click on components to see details
- **Detail Panel**: View endpoints, methods, schemas, and more
- **Breadcrumb Navigation**: Always know where you are
- **Fullscreen Mode**: Immersive viewing experience
- **Professional Dark Theme**: Easy on the eyes

### Modularity

The architecture is designed to be easily extensible:

- **Add New Diagrams**: Edit `src/data/diagramRegistry.js`
- **Add Node Details**: Edit `src/data/nodeDetails.js`
- **Customize Styles**: Edit `src/App.css` or `src/index.css`
- **Add Components**: Create new components in `src/components/`

## Troubleshooting

### Port 3000 already in use

Change the port in `vite.config.js`:
```javascript
server: {
  port: 3001, // or any other port
  open: true
}
```

### Mermaid rendering issues

Clear your browser cache and reload. Mermaid diagrams are cached.

### Module not found errors

Delete `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. Explore all views in the sidebar
2. Click on different components to see their details
3. Try zooming and panning around large diagrams
4. Add your own diagrams by editing the data files
5. Customize the styling to match your preferences

## Support

For questions or issues, refer to:
- README.md for project structure
- Code comments in source files
- Mermaid documentation: https://mermaid.js.org/
- React documentation: https://react.dev/

Enjoy exploring the Arnitex Backend Architecture! 🚀

