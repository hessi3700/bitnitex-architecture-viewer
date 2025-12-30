# 🚀 Deployment Guide

This guide will help you deploy the BitniTex Architecture Explorer to GitHub Pages for free hosting.

## Prerequisites

- A GitHub account
- Node.js 20+ installed locally (for testing builds)
- Git installed

## Quick Deploy (Automatic via GitHub Actions)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `bitnitex-architecture-viewer`)
3. **Make it Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)

### Step 2: Push Your Code

```bash
cd /home/hessi/Desktop/Developement/ir_backend_core_/backend_core-develop/diagram

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Ready for deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. The workflow will automatically deploy on every push to `main`

### Step 4: Wait for Deployment

1. Go to **Actions** tab in your repository
2. Wait for the "Deploy to GitHub Pages" workflow to complete (usually 2-3 minutes)
3. Once complete, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

## Manual Deploy (Alternative)

If you prefer to deploy manually:

```bash
# Install dependencies (including gh-pages)
npm install

# Update package.json homepage to match your repo
# Edit package.json and change:
# "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"

# Build and deploy
npm run deploy
```

## Configuration

### Environment Variables

The app works in two modes:

1. **Standalone Mode (Default for GitHub Pages)**
   - No backend required
   - Uses browser localStorage for data persistence
   - Perfect for static hosting

2. **With Backend Mode**
   - Requires a deployed backend API
   - Set `VITE_API_URL` environment variable
   - See backend deployment section below

### Setting Backend URL (Optional)

If you want to use the backend API:

1. Deploy the backend separately (see Backend Deployment below)
2. In GitHub repository:
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add a new secret: `VITE_API_URL` = `https://your-backend-url.com`
3. The workflow will automatically use it during build

### Custom Domain (Optional)

1. In your repository: **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Follow GitHub's instructions to configure DNS

## Backend Deployment (Optional)

The frontend works standalone, but if you want persistent data across devices:

### Option 1: Railway (Recommended - Free Tier Available)

1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select your repository
4. Set **Root Directory**: `backend`
5. Add environment variable: `FRONTEND_URL=https://your-frontend-url.com`
6. Deploy!

### Option 2: Render

1. Go to [render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repository
4. Set:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
5. Add environment variables
6. Deploy!

### Option 3: Heroku

```bash
cd backend
heroku create bitnitex-backend
heroku config:set NODE_ENV=production
git push heroku main
```

### After Backend Deployment

1. Get your backend URL (e.g., `https://bitnitex-backend.railway.app`)
2. Add it as `VITE_API_URL` secret in GitHub Actions (see above)
3. Push a new commit to trigger rebuild

## Testing Locally

Before deploying, test the production build:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4173` to test.

## Troubleshooting

### Build Fails

- Check GitHub Actions logs for errors
- Ensure Node.js version is 20+
- Verify all dependencies are in `package.json`

### 404 Errors on GitHub Pages

- Check that `VITE_BASE_PATH` matches your repository name
- The workflow automatically sets this, but verify in Actions logs
- Ensure base path starts and ends with `/` (e.g., `/repo-name/`)

### Backend Not Connecting

- Verify `VITE_API_URL` is set correctly
- Check CORS settings in backend
- Ensure backend is publicly accessible
- App will fallback to localStorage if backend unavailable

### Assets Not Loading

- Clear browser cache
- Check browser console for 404 errors
- Verify base path is correct in `vite.config.js`

## Updating Your Deployment

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update diagrams"
git push
```

GitHub Actions will automatically rebuild and redeploy.

## Project Structure for Deployment

```
diagram/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── dist/                        # Built files (auto-generated)
├── src/                         # Source code
├── package.json                 # Dependencies
├── vite.config.js              # Build config
└── .env.example                 # Environment variables template
```

## Support

- Check GitHub Actions logs for build errors
- Review browser console for runtime errors
- See `README.md` for project documentation

Happy deploying! 🚀

