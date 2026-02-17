#!/bin/bash
# Build diagram app for Ubuntu VPS.
# Usage: ./deploy-ubuntu.sh [backend_url]
# Example: ./deploy-ubuntu.sh http://YOUR_VPS_IP:3001

set -e
BACKEND_URL="${1:-http://localhost:3001}"
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

echo "=== 1. Install dependencies ==="
npm install
cd backend && npm install && cd "$ROOT"

echo "=== 2. Build backend ==="
cd backend && npm run build && cd "$ROOT"

echo "=== 3. Build frontend (API: $BACKEND_URL) ==="
VITE_API_URL="$BACKEND_URL" VITE_BASE_PATH=/ npm run build

echo "=== Done ==="
echo "Run backend:  cd backend && node dist/main.js"
echo "Run frontend: npx serve -s dist -l 3000"
echo "Then open http://YOUR_VPS_IP:3000"
