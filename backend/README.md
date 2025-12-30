# BitniTex Backend API

NestJS backend for BitniTex Architecture Viewer - manages TODO/task data persistence.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 20 (recommended: 20.x or 22.x)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run start:dev

# Build for production
npm run build

# Start production server
npm run start:prod
```

The server will run on `http://localhost:3001` by default.

## 📡 API Endpoints

### Tasks

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get task by ID
- `GET /api/tasks/node/:nodeId` - Get task by node ID
- `GET /api/tasks/progress` - Get overall progress statistics
- `POST /api/tasks` - Create new task
- `PATCH /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 🗄️ Database

Uses SQLite database (`bitnitex.db`) for simplicity. The database is auto-created on first run.

**Note:** `synchronize: true` is enabled for development. For production, use migrations.

## 🔧 Configuration

Create a `.env` file (see `.env.example`):

```env
PORT=3001
FRONTEND_URL=http://localhost:5173
```

## 🚢 Deployment

### Railway
1. Connect your GitHub repository
2. Railway will auto-detect NestJS
3. Set environment variables
4. Deploy!

### Render
1. Create a new Web Service
2. Connect your repository
3. Build command: `npm install && npm run build`
4. Start command: `npm run start:prod`
5. Set environment variables

### Heroku
```bash
heroku create bitnitex-backend
heroku config:set NODE_ENV=production
git push heroku main
```

## 📝 Notes

- CORS is enabled for the frontend URL
- All endpoints return JSON
- Tasks are linked by `nodeId` (component name from diagrams)

