#!/bin/bash

# Single command to run the entire project
# This script installs dependencies (if needed) and starts both frontend and backend

set -e

echo "🚀 Starting BitniTex Project..."

# Check if node_modules exist, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    npm install
fi

if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend
    npm install
    cd ..
fi

# Start both servers concurrently
echo "🎯 Starting frontend and backend servers..."
npx concurrently "npm run dev" "cd backend && npm run start:dev"


