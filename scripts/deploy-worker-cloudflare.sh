#!/bin/bash
# Deploy the diagram API Worker to Cloudflare (D1 + Worker).
# Prerequisites:
#   1. npm install in worker/
#   2. npx wrangler login
#   3. npx wrangler d1 create diagram-db   (then put database_id in worker/wrangler.toml)
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT/worker"

if grep -q 'YOUR_D1_DATABASE_ID' wrangler.toml; then
  echo "Set your D1 database_id in worker/wrangler.toml first."
  echo "Run: cd worker && npx wrangler d1 create diagram-db"
  echo "Then paste the database_id into worker/wrangler.toml and run this script again."
  exit 1
fi

echo "=== Apply D1 schema (remote) ==="
npm run db:migrate
echo "=== Deploy Worker ==="
npm run deploy
echo "=== Done ==="
echo "Worker URL is shown above. Use it as VITE_API_URL when building the frontend."
