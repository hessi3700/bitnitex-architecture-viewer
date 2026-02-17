# Run the app on Ubuntu VPS

Build the frontend and backend, then run them on your server.

---

## 1. Prerequisites on the VPS

```bash
# Node 18+ (and npm)
sudo apt update
sudo apt install -y nodejs npm

# If Node is too old, use NodeSource:
# curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
# sudo apt install -y nodejs

# Optional: libatomic (needed on some minimal images if Node fails to start)
sudo apt install -y libatomic1
```

---

## 2. Clone and build

```bash
cd ~
git clone https://github.com/hessi3700/bitnitex-architecture-viewer.git
cd bitnitex-architecture-viewer
```

**Option A – Use the script (recommended)**

```bash
chmod +x deploy-ubuntu.sh
# Use your VPS public URL so the browser can reach the API (replace with your IP or domain)
./deploy-ubuntu.sh http://YOUR_VPS_IP:3001
```

**Option B – Manual build**

```bash
# Install
npm install
cd backend && npm install && cd ..

# Build backend
cd backend && npm run build && cd ..

# Build frontend (set API URL the browser will use to reach your backend)
export VITE_API_URL="http://YOUR_VPS_IP:3001"   # or https://yourdomain.com
export VITE_BASE_PATH="/"
npm run build
```

Use your real VPS IP or domain in `VITE_API_URL` (e.g. `http://123.45.67.89:3001` or `https://api.yourdomain.com`).

---

## 3. Run the app

**Backend** (NestJS, port 3001):

```bash
cd ~/bitnitex-architecture-viewer/backend
node dist/main.js
```

**Frontend** (static files in `dist/`). Either:

- **Quick test** (port 3000):

  ```bash
  cd ~/bitnitex-architecture-viewer
  npx serve -s dist -l 3000
  ```

  Then open `http://YOUR_VPS_IP:3000`.

- **Production with Nginx** (port 80/443):

  1. Install nginx: `sudo apt install -y nginx`
  2. Copy the built files:
     ```bash
     sudo cp -r ~/bitnitex-architecture-viewer/dist/* /var/www/html/
     ```
  3. Or add a server block that points `root` to `~/bitnitex-architecture-viewer/dist` (and proxy `/api` to `http://127.0.0.1:3001` if you put the API behind nginx).

---

## 4. Run backend in the background (pm2)

```bash
sudo npm install -g pm2
cd ~/bitnitex-architecture-viewer/backend
pm2 start dist/main.js --name diagram-api
pm2 save
pm2 startup   # run the command it prints so it starts on reboot
```

---

## 5. Seed the VPN diagram (first time)

After the backend is running:

```bash
cd ~/bitnitex-architecture-viewer
API_BASE_URL=http://localhost:3001 node seed-vpn-diagram.js
```

If the backend is on another host, use that URL instead of `http://localhost:3001`.

---

## Quick reference

| What        | Command / path |
|------------|-----------------|
| Backend    | `cd backend && node dist/main.js` (port 3001) |
| Frontend   | `npx serve -s dist -l 3000` or nginx serving `dist/` |
| API URL    | Set `VITE_API_URL` when running `npm run build` (same URL the browser uses to reach the API) |
