# Hosting the Diagram App Online (Frontend + Backend)

This guide covers deploying both the **React frontend** and the **NestJS backend** (with SQLite) so the app works online.

---

## Overview

| Part      | Stack           | Needs                          |
|-----------|-----------------|---------------------------------|
| Frontend  | React + Vite    | Static build, env: `VITE_API_URL` |
| Backend   | NestJS + SQLite | Node 18+, persistent disk for DB (optional) |

**Deploy backend first**, then build the frontend with the backend URL so the app can talk to the API.

---

## Option 1: Vercel (Frontend) + Railway (Backend) — recommended

Free tiers for both; Railway can keep SQLite data (with a volume).

### 1. Deploy the backend (Railway)

1. Go to [railway.app](https://railway.app) and sign in (e.g. GitHub).
2. **New Project** → **Deploy from GitHub repo** → select your repo.
3. Set **Root Directory** to `diagram/backend` (or the folder that contains `package.json` and `src` for the Nest app).
4. **Settings** → **Variables**:
   - `PORT` = `3001` (or leave unset; Railway sets `PORT` automatically — if so, use the port Railway assigns).
   - `FRONTEND_URL` = `https://your-app.vercel.app` (replace with your real frontend URL after deploying; you can add this later).
5. **Deploy**. Railway will run `npm install` and `npm run build` / `npm start` (or `npm run start:prod` if you use that).  
   - If your backend only has `start` and `start:dev`, add in `package.json`:
     - `"start:prod": "node dist/main"`
   - In **Settings** → **Build**, set **Build Command**: `npm run build`, **Start Command**: `npm run start:prod` (or `node dist/main`).
6. Under **Settings** → **Networking** → **Generate Domain**. Copy the URL (e.g. `https://your-backend.up.railway.app`).

**SQLite on Railway:** By default the filesystem is ephemeral (DB resets on redeploy). For persistent SQLite, add a **Volume** in the service, mount it (e.g. `/data`), and set the DB path in the app (e.g. `database: '/data/bitnitex.db'` in TypeORM config and ensure the backend writes there).

### 2. Deploy the frontend (Vercel)

1. Go to [vercel.com](https://vercel.com) and import your GitHub repo.
2. **Root Directory**: set to `diagram` (the folder with the Vite `package.json`).
3. **Environment Variables** (for Production, Preview, Development):
   - `VITE_API_URL` = `https://your-backend.up.railway.app` (no trailing slash).
   - `VITE_BASE_PATH` = `/` (so the app is served at the root of the Vercel URL).
4. **Build and Output**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy. Your app will be at `https://your-project.vercel.app`.

### 3. Lock CORS to your frontend (optional)

In Railway, set:

- `FRONTEND_URL` = `https://your-project.vercel.app`

Redeploy the backend. The backend already uses `FRONTEND_URL` to restrict CORS in production.

---

## Option 2: Render (Frontend + Backend on one platform)

[Render](https://render.com) can host both a **Static Site** (frontend) and a **Web Service** (backend).

### 1. Backend (Web Service)

1. **Dashboard** → **New** → **Web Service**.
2. Connect repo, set **Root Directory** to `diagram/backend`.
3. **Build**: `npm install && npm run build`
4. **Start**: `node dist/main.js` (or `npm run start:prod` if you add that script).
5. **Environment**:
   - `PORT` = leave blank (Render sets it).
   - `FRONTEND_URL` = `https://your-frontend.onrender.com` (add after creating the frontend).
6. Create. Note the backend URL (e.g. `https://your-backend.onrender.com`).

**Note:** On the free tier the disk is ephemeral; SQLite will reset on each deploy unless you use a persistent disk add-on (if available).

### 2. Frontend (Static Site)

1. **New** → **Static Site**.
2. Same repo, **Root Directory** = `diagram`.
3. **Build**: `npm install && npm run build`
4. **Publish directory**: `dist`
5. **Environment**:
   - `VITE_API_URL` = `https://your-backend.onrender.com`
   - `VITE_BASE_PATH` = `/`
6. Create. Use the given URL as `FRONTEND_URL` in the backend and redeploy the backend if needed.

---

## Option 3: Single VPS (e.g. Hetzner, DigitalOcean)

You can run both on one server (e.g. Ubuntu).

1. **Backend:**  
   - Install Node 18+, clone repo, `cd diagram/backend`, `npm install`, `npm run build`, run with `node dist/main.js` and set `PORT=3001`. Use **pm2** or **systemd** to keep it running. Optionally put Nginx in front and proxy to `http://127.0.0.1:3001`.
2. **Frontend:**  
   - In `diagram`: set `VITE_API_URL=https://your-domain.com` (or `https://api.your-domain.com`), then `npm run build`. Serve the `dist` folder with Nginx (or any static server) at `https://your-domain.com`.
3. **CORS:**  
   Set `FRONTEND_URL=https://your-domain.com` (and/or your API origin) when starting the backend.

---

## Environment variables summary

| Where      | Variable        | Example                          | Purpose |
|-----------|-----------------|-----------------------------------|--------|
| Frontend  | `VITE_API_URL`  | `https://api.example.com`         | Backend API base URL (must be set at **build** time). |
| Frontend  | `VITE_BASE_PATH`| `/` or `/bitnitex/`               | Base path for the app (use `/` for custom domains). |
| Backend   | `PORT`          | `3001` or leave to host           | Port the backend listens on. |
| Backend   | `FRONTEND_URL`  | `https://app.example.com`         | Allowed CORS origin(s); comma-separated for multiple. |

---

## After first deploy

1. **Seed the diagram (VPN architecture)**  
   From your machine (with backend URL set):

   ```bash
   cd diagram
   API_BASE_URL=https://your-backend-url node seed-vpn-diagram.js
   ```

2. Open the frontend URL; the diagram should load from the backend. If the frontend was built before the backend was ready, rebuild the frontend with the correct `VITE_API_URL` and redeploy.

---

## Backend `start:prod` script (if missing)

In `diagram/backend/package.json` ensure you have:

```json
"scripts": {
  "start": "nest start",
  "start:dev": "nest start --watch",
  "start:prod": "node dist/main.js"
}
```

Then use `npm run start:prod` (or `node dist/main.js`) as the start command on Railway/Render/VPS.
