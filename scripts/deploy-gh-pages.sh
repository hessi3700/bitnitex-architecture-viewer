#!/bin/bash
# Deploy dist/ to gh-pages branch without hitting "spawn E2BIG" (argument list too long).
# Usage: ./scripts/deploy-gh-pages.sh
# From repo root, after: npm run build

set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [ ! -d "dist" ] || [ ! -f "dist/index.html" ]; then
  echo "Run 'npm run build' first."
  exit 1
fi

REMOTE="${1:-origin}"
REPO_URL="$(git remote get-url "$REMOTE")"
WORK="/tmp/ghp-deploy-$$"
trap 'rm -rf "$WORK"' EXIT

echo "=== Clone into $WORK ==="
if ! git clone --branch gh-pages --depth 1 "$REPO_URL" "$WORK" 2>/dev/null; then
  echo "No gh-pages branch yet; creating from current branch."
  rm -rf "$WORK"
  git clone --depth 1 "$REPO_URL" "$WORK"
  ( cd "$WORK" && git checkout --orphan gh-pages && git rm -rf . 2>/dev/null || true )
fi

cd "$WORK"
echo "=== Replace with dist contents ==="
# Remove all tracked files with a single argument to avoid E2BIG
git rm -rf . 2>/dev/null || true
# Copy built site
cp -a "$ROOT/dist/"* .
cp -a "$ROOT/dist"/.[!.]* . 2>/dev/null || true
# Tell GitHub Pages to skip Jekyll (serve static files as-is)
touch .nojekyll
git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi
git commit -m "Updates"
git push "$REMOTE" gh-pages
echo "=== Done. GitHub Pages: branch gh-pages ==="
