# Frontend on GitHub Pages + Backend elsewhere

## Frontend on GitHub Pages — yes

You can run the **frontend** on GitHub Pages. It’s a static Vite/React build.

1. **Build** with your backend URL (the API the browser will call):
   ```bash
   VITE_API_URL=https://your-backend-url.com VITE_BASE_PATH=/bitnitex-architecture-viewer/ npm run build
   ```
   Use your real backend URL. For GitHub Pages, `VITE_BASE_PATH` is usually `/<repo-name>/` (e.g. `/bitnitex-architecture-viewer/`).

2. **Deploy** the `dist/` folder to GitHub Pages:
   - Either: `npx gh-pages -d dist` (pushes to `gh-pages` branch).
   - Or: use GitHub Actions to build and deploy from `main` (see GitHub’s “Pages” docs).

3. In repo **Settings → Pages**, choose source: branch `gh-pages` (or “GitHub Actions”). Your app will be at `https://<username>.github.io/bitnitex-architecture-viewer/`.

So: **yes, you can run the frontend as a permanent static site on GitHub Pages.**

---

## Backend on a Cloudflare Worker — no (not this codebase)

Your **backend** is NestJS + TypeORM + **SQLite (file-based)** with the `sqlite3` native module. You **cannot** run it as-is on a Cloudflare Worker.

| Requirement | Cloudflare Workers |
|------------|---------------------|
| Node.js (NestJS, Express) | No — Workers are V8 isolates, not full Node. |
| Native modules (`sqlite3`) | No — no native Node addons. |
| Persistent filesystem (SQLite file) | No — no disk; Workers are stateless. |

So this exact backend **cannot** be “a permanent service” on a Worker.

To use Workers you’d need a **new** backend: a Worker script that talks to **D1** (Cloudflare’s SQLite) or **KV**, and implements your API routes by hand (no NestJS/TypeORM). That’s a rewrite.

---

## Permanent backend options that work with this repo

These run **Node.js** and can host your **current** backend as a long‑running service:

| Service | Free tier | Notes |
|--------|-----------|--------|
| **Railway** | $5 credit/month | Node + SQLite, easy deploy from GitHub. |
| **Render** | Free tier (spins down) | Web Service for Node; free tier sleeps after idle. |
| **Fly.io** | Free allowance | Run a small VM; you keep your NestJS + SQLite app. |
| **Your Ubuntu VPS** | You pay | Full control; you already have it. |

So: **frontend = GitHub Pages (yes). Backend = not on a Worker with this code; use Railway / Render / Fly / VPS for a permanent backend.**

---

## Recommended setup for “front on GitHub Pages, backend permanent”

1. **Backend:** Deploy the existing NestJS app to **Railway** (or Render / Fly.io). You get a URL like `https://your-app.up.railway.app`.
2. **Frontend:** Build with that URL and deploy to GitHub Pages:
   ```bash
   VITE_API_URL=https://your-app.up.railway.app VITE_BASE_PATH=/bitnitex-architecture-viewer/ npm run build
   npx gh-pages -d dist
   ```
3. Set **CORS:** On the backend (e.g. Railway env), set:
   ```bash
   FRONTEND_URL=https://hessi3700.github.io
   ```
   (or the exact Pages URL) so the API only allows your frontend.

Result: frontend is a permanent static site on GitHub Pages, backend is a permanent Node service on Railway (or similar), no Cloudflare Worker needed for the backend.
