# 🚀 BitniTex Project Tracker - Getting Started Guide

## What is BitniTex Project Tracker?

A visual architecture explorer and project tracking tool for your team. It helps you:
- **Visualize** your entire system architecture
- **Track progress** on project components
- **Share** with teammates via web hosting
- **Plan** work step-by-step with task dependencies

---

## 📋 Quick Start (3 Steps)

### Step 1: Install Frontend Dependencies
```bash
cd diagram
npm install
```

### Step 2: Start Backend Server (Optional but Recommended)
```bash
# In a new terminal
cd diagram/backend
npm install
npm run start:dev
```

The backend will run on `http://localhost:3001` and saves your TODO data to a database.

**Note:** If you skip the backend, the app will use localStorage (data only saved in your browser).

### Step 3: Start Frontend Development Server
```bash
# Back in the diagram folder
cd diagram
npm run dev
```

### Step 4: Open in Browser
Visit: `http://localhost:5173`

That's it! You're now viewing your architecture diagrams with persistent TODO storage.

---

## 🗄️ Backend Setup (For Team Collaboration)

The backend saves TODO data to a SQLite database, so all team members share the same progress.

### Local Development
```bash
cd diagram/backend
npm install
npm run start:dev
```

### Deploy Backend (Free Options)

#### Option 1: Railway (Recommended)
1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select your repository
4. Set root directory: `diagram/backend`
5. Add environment variable: `FRONTEND_URL=https://your-frontend-url.com`
6. Deploy!

#### Option 2: Render
1. Go to [render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repository
4. Set:
   - **Root Directory:** `diagram/backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start:prod`
5. Add environment variables
6. Deploy!

#### Option 3: Heroku
```bash
cd diagram/backend
heroku create bitnitex-backend
heroku config:set NODE_ENV=production
git push heroku main
```

### Update Frontend to Use Backend

Create `.env` file in `diagram/` folder:
```env
VITE_API_URL=https://your-backend-url.com
```

Or edit `src/config/api.js` to set your backend URL.

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

### Step 1: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name your repo (e.g., `bitnitex`)
3. Make it **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 2: Update Configuration
Edit `vite.config.js`:
```javascript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

Edit `package.json`:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

### Step 3: Push Code
```bash
cd diagram
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy on every push

### Step 5: Access Your Site
Your site will be live at: `https://yourusername.github.io/your-repo-name`

---

## 📊 How to Use the Project Tracker

### Understanding the Interface

| Element | Description |
|---------|-------------|
| **💎 Sidebar** | Navigate between different architecture views |
| **🔍 Diagram Canvas** | Interactive diagram with zoom/pan |
| **📊 Project Status** | Track overall progress |
| **📋 Task Panel** | Manage individual component tasks |

### Tracking Project Progress

1. **Click any component box** in the diagram
2. The **Task Panel** opens
3. Update the status:
   - ⏸️ **Not Started** - Work hasn't begun
   - 🔄 **In Progress** - Currently working on it
   - ✅ **Completed** - Done!
   - 🚫 **Blocked** - Waiting on something

### Task Priority Levels

| Priority | When to Use |
|----------|-------------|
| 🔴 **Critical** | Must be done first, blocks everything |
| 🟠 **High** | Important, should be done soon |
| 🔵 **Medium** | Standard priority |
| ⚪ **Low** | Nice to have, do when time permits |

---

## 📝 Recommended Work Order

For rebuilding the BitniTex backend, follow this order:

### Phase 1: Foundation (Week 1-2)
1. ✅ Set up project structure
2. ✅ Database schema design
3. ✅ Authentication module

### Phase 2: Core Controllers (Week 3-4)
1. 📋 Admin Controller
2. 📋 Customer Controller
3. 📋 Order Controller

### Phase 3: Services (Week 5-6)
1. 📋 Order Service
2. 📋 Wallet Service
3. 📋 Trade Service

### Phase 4: Integration (Week 7-8)
1. 📋 Payment Gateways
2. 📋 Blockchain Services
3. 📋 External APIs

---

## 🛠️ For Developers

### Adding New Diagrams

Edit `src/data/diagramRegistry.js`:
```javascript
myNewView: {
  id: 'myNewView',
  title: 'My New View',
  icon: '🆕',
  type: 'detail',
  code: `
    flowchart TB
      A[Component A] --> B[Component B]
  `
}
```

### Adding Component Details

Edit `src/data/nodeDetails.js`:
```javascript
MyComponent: {
  id: 'MyComponent',
  title: 'My Component',
  icon: '📦',
  description: 'What this component does',
  endpoints: [
    { method: 'GET', path: '/api/my-endpoint', description: 'Gets data' }
  ]
}
```

### Customizing Tasks

Edit `src/store/TodoStore.jsx` to add default tasks for your project.

---

## 🔧 Troubleshooting

### "npm install" fails
```bash
# Clear npm cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Diagram won't render
1. Check browser console (F12) for errors
2. Verify Mermaid syntax in diagramRegistry.js
3. Simplify diagram to find the issue

### GitHub Pages not deploying
1. Check **Actions** tab for workflow errors
2. Ensure repo is public
3. Verify branch name matches workflow

---

## 📞 Team Sharing

### Option 1: GitHub Pages (Recommended)
- Free hosting
- Automatic deployments
- Accessible anywhere

### Option 2: Local Network
```bash
npm run dev
# Share the Network URL with teammates
```

### Option 3: Static File Hosting
```bash
npm run build
# Upload 'dist' folder to any web server
```

---

## 🚀 Future: API Testing (Swagger-like)

The project is structured to support API testing features:

```javascript
// Future: src/features/ApiTester.jsx
// - Import OpenAPI/Swagger specs
// - Send test requests
// - View responses
// - Save test collections
```

To prepare for this:
1. Keep endpoint definitions in `nodeDetails.js`
2. Use consistent path patterns
3. Document authentication requirements

---

## 📚 File Structure

```
diagram/
├── src/
│   ├── components/      # React components
│   ├── data/           # Diagrams & node details
│   ├── store/          # State management
│   ├── config/         # API configuration
│   └── utils/          # Helper functions
├── backend/            # NestJS backend API
│   ├── src/
│   │   ├── tasks/      # Task CRUD endpoints
│   │   └── main.ts     # Entry point
│   └── package.json
├── public/             # Static assets
├── index.html          # Entry point
└── vite.config.js      # Build config
```

---

## ❓ Need Help?

1. Check browser console (F12) for errors
2. Review this guide
3. Check GitHub Issues

Happy building! 🎉

