#!/bin/bash

echo "🏗️  Arnitex Architecture Viewer - Quick Start"
echo "==========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🚀 Starting development server..."
echo ""
echo "The viewer will open at: http://localhost:3000"
echo ""
echo "Controls:"
echo "  - Ctrl+Scroll: Zoom in/out"
echo "  - Click+Drag: Pan"
echo "  - Click nodes: View details"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
