# BitniTex Diagram – File-by-File Walkthrough

This document explains the **diagram** project (Architecture Viewer + Project Tracker) file by file and section by section. The app has a **React + Vite frontend** and a **NestJS + TypeORM (SQLite) backend**.

---

## 1. Root / Project Config

### `package.json` (root)
- **name**: `bitnitex-project-tracker`
- **scripts**:
  - `dev`: Vite dev server
  - `build`: Vite production build
  - `preview`: Preview production build
  - `deploy`: Build + deploy to GitHub Pages (gh-pages)
  - `install:all`: Install root + backend deps
  - `start`: Install all, then run frontend + backend with `concurrently`
  - `start:quick`: Run frontend + backend without installing
- **dependencies**: React 18, react-dom, Mermaid (diagrams), Zustand (state), Framer Motion, Lucide React
- **devDependencies**: Vite, @vitejs/plugin-react, concurrently, gh-pages

### `README.md`
- Describes the app: interactive architecture diagram viewer for “Arnitex/BitniTex” backend.
- Features: dark UI, zoom/pan, node details, breadcrumbs, minimap, multiple views (Overview, Controllers, Services, Database, Flows).
- Quick start: `npm start` or `./run.sh`.
- Explains adding diagrams via `diagramRegistry.js` and node details via `nodeDetails.js`.

### `.gitignore`
- Ignores: `node_modules/`, lockfiles, `dist/`, `build/`, `.vite/`, `.env*`, editor/OS junk, logs, and custom files like `ENABLE_ACTIONS.md`, `DEPLOYMENT.md`.

### `run.sh`
- **Line 1–6**: Shebang, `set -e`, echo “Starting BitniTex…”
- **Lines 10–14**: If `node_modules` missing, run `npm install` (frontend).
- **Lines 16–21**: If `backend/node_modules` missing, `cd backend && npm install`.
- **Line 25**: Start both servers: `npx concurrently "npm run dev" "cd backend && npm run start:dev"`.

---

## 2. Backend (NestJS) – Entry & App Module

### `backend/src/main.ts`
- **1–4**: Imports NestFactory, ValidationPipe, AppModule, express `json`/`urlencoded`.
- **6–7**: `bootstrap()` creates app from `AppModule`.
- **9–11**: Body parser limit 10MB for large diagram/node payloads.
- **13–21**: CORS: allow all origins (`*`), common methods/headers; `credentials: false` (required when using `*`).
- **24–29**: Global ValidationPipe with `whitelist: true`, `transform: true`.
- **30–33**: Port from `process.env.PORT` or 3001; listen on `0.0.0.0` for LAN access.
- **34–36**: Log URLs and call `bootstrap()`.

### `backend/src/app.module.ts`
- **1–4**: Imports Module, TypeOrmModule, TasksModule, DiagramsModule.
- **6–17**: `@Module` with:
  - **TypeOrmModule.forRoot**: SQLite, database file `bitnitex.db`, entities from `**/*.entity{.ts,.js}`, `synchronize: true` (auto schema; disable in production).
  - **TasksModule**, **DiagramsModule**.

### `backend/package.json`
- NestJS 11, TypeORM, SQLite (`sqlite3`), class-validator, class-transformer. Scripts: `build`, `start`, `start:dev`, `start:prod`.

---

## 3. Backend – Diagrams Module (Entities, DTOs, Service, Controllers)

### `backend/src/diagrams/diagram.entity.ts`
- **1–3**: TypeORM imports + Node, Edge entities.
- **5–6**: Table `diagrams`.
- **7–8**: `id` UUID primary key.
- **9–10**: `diagramId` string (e.g. `'everything'`, `'controllers'`) – logical id.
- **11–14**: `title`, `description`.
- **18–19**: `mermaidCode` (original), `customMermaidCode` (user edits).
- **21–22**: `nodes`, `edges` JSON (legacy / compatibility).
- **23**: `metadata` JSON (zoom, pan, etc.).
- **34–39**: Relations: `nodeEntities` (OneToMany Node), `edgeEntities` (OneToMany Edge), cascade.
- **41–44**: `createdAt`, `updatedAt`.

### `backend/src/diagrams/node.entity.ts`
- **1–4**: TypeORM + Diagram, Task.
- **5–6**: Table `nodes`.
- **7–8**: `id` UUID.
- **9–10**: `nodeId` (e.g. controller/service id), `label`.
- **11–12**: `type`, `description`.
- **22–23**: `position` (x,y), `style`, `metadata` JSON.
- **31–36**: ManyToOne Diagram, `diagramId`; optional Task, `taskId`, `taskNodeId` (links to Task.nodeId).
- **49–52**: `createdAt`, `updatedAt`.

### `backend/src/diagrams/edge.entity.ts`
- **1–4**: TypeORM + Diagram, Node.
- **5–6**: Table `edges`.
- **7–16**: `id` UUID; `sourceNodeId`, `targetNodeId`; optional `label`, `type` (e.g. directed/dashed).
- **20–21**: `style`, `metadata` JSON.
- **26–32**: ManyToOne Diagram, `diagramId`.
- **35–46**: Optional ManyToOne `sourceNode`/`targetNode` and `sourceNodeEntityId`/`targetNodeEntityId`.
- **49–52**: Timestamps.

### `backend/src/diagrams/dto/create-diagram.dto.ts`
- class-validator DTO: `diagramId`, `title`, `mermaidCode` required; optional `description`, `customMermaidCode`, `nodes`, `edges`, `metadata` (with `@ValidateIf` so they’re optional but validated when present).

### `backend/src/diagrams/dto/update-diagram.dto.ts`
- All fields optional: `title`, `description`, `customMermaidCode`, `nodes`, `edges`, `metadata`.

### `backend/src/diagrams/diagrams.service.ts`
- **9–16**: Injects repositories: Diagram, Edge (Node is used via Diagram relations).
- **17–26**: `create()`: create diagram, save, sync edges from Mermaid, return with relations.
- **28–32**: `findAll()`: all diagrams, order by `createdAt` DESC.
- **34–42**: `findOne(id)`: by UUID with relations `nodeEntities`, `nodeEntities.task`, `edgeEntities`; throws if not found.
- **44–49**: `findByDiagramId(diagramId)`: by logical id, with same relations.
- **51–61**: `update(id, dto)`: load, assign, save, sync edges, return refreshed.
- **63–100**: `updateByDiagramId(diagramId, dto)`: find or create by `diagramId`, validate nodes/edges are objects, save, sync edges, return; errors logged and rethrown.
- **102–161**: `syncEdgesFromMermaid(diagram)`: get edges from `customMermaidCode` or `mermaidCode`, parse with `extractEdgesFromMermaid`, diff with existing Edge rows (by source–target key), delete removed, create/update to match.
- **163–196**: `extractEdgesFromMermaid(mermaidCode)`: regex for `-->`, `-.->`, `---`, optional `|label|`; returns array of `{ source, target, label, type, metadata }`.
- **198–202**: `remove(id)`: find and remove diagram.
- **204–224**: `seedDiagrams(diagrams)`: for each DTO, skip if `diagramId` exists, else create; returns `{ created, skipped }`.

### `backend/src/diagrams/diagrams.controller.ts`
- **6**: Base path `api/diagrams`.
- **9–14**: POST `/` → create; GET `/` → findAll.
- **20–24**: GET `diagram-id/:diagramId` → findByDiagramId; GET `:id` → findOne.
- **30–39**: PATCH `diagram-id/:diagramId` → updateByDiagramId (with try/catch).
- **41–44**: PATCH `:id` → update; DELETE `:id` → remove.
- **51–55**: POST `seed` → seedDiagrams.

### `backend/src/diagrams/nodes.service.ts`
- **7–14**: Injects Node and Task repositories.
- **16–28**: `create(nodeData)`: if `taskNodeId` set, resolve Task by `nodeId` and set `taskId`; create and save node.
- **30–36**: `findAll()`: with relations diagram, task.
- **38–67**: `getNodeToTaskMappings()`: nodes with non-null `taskNodeId`; build object mapping nodeId/label (cleaned) → taskNodeId (for frontend to map diagram nodes to Level tasks).
- **69–82**: `findByDiagramId`, `findByNodeId`, `findOne(id)`.
- **84–116**: `update(id, updateData)`: resolve task if `taskNodeId` changed; assign and save.
- **118–121**: `remove(id)`.
- **123–135**: `bulkCreate(nodes)`: resolve all taskNodeIds to taskIds, create and save in batch.
- **137–139**: `removeByDiagramId(diagramId)`: delete all nodes for that diagram.

### `backend/src/diagrams/nodes.controller.ts`
- **4**: Base path `api/nodes`.
- **9–12**: POST `/` → create; POST `bulk` → bulkCreate.
- **20–29**: GET `/`: if query `diagramId` → findByDiagramId; if `nodeId` → findByNodeId; else findAll.
- **31–34**: GET `diagram/:diagramId` → findByDiagramId; GET `mappings` → getNodeToTaskMappings; GET `node/:nodeId` → findByNodeId.
- **45–64**: GET `:id` → findOne; PATCH `:id` → update; DELETE `:id` → remove; DELETE `diagram/:diagramId` → removeByDiagramId.

### `backend/src/diagrams/diagrams.module.ts`
- Imports TypeOrmModule.forFeature([Diagram, Node, Edge, Task]).
- Controllers: DiagramsController, NodesController.
- Providers: DiagramsService, NodesService.
- Exports both services.

---

## 4. Backend – Tasks Module

### `backend/src/tasks/task.entity.ts`
- **3–8**: Enum `TaskStatus`: NOT_STARTED, IN_PROGRESS, COMPLETED, BLOCKED.
- **10–11**: Table `tasks`.
- **12–16**: `id` UUID, `nodeId` (e.g. Level1_ProjectSetup), `title`, `description`.
- **24–26**: `status` (TaskStatus), `notes`.
- **28–36**: `estimatedHours`, `actualHours`, `subtasks` (JSON string), `dependencies` (JSON string), `priority`, `category`.
- **49–50**: `isMissing` boolean.
- **52–56**: Timestamps.

### `backend/src/tasks/dto/create-task.dto.ts`
- Required: `nodeId`, `title`. Optional: description, status, notes, estimatedHours, actualHours, subtasks (array), dependencies (array), priority, category, isMissing. Uses class-validator and TaskStatus enum.

### `backend/src/tasks/dto/update-task.dto.ts`
- `UpdateTaskDto` = `PartialType(CreateTaskDto)` (all fields optional).

### `backend/src/tasks/tasks.service.ts`
- **9–13**: Injects Task repository.
- **15–22**: `create()`: stringify subtasks/dependencies, save.
- **24–56**: `findAll()`: only `nodeId` LIKE `'Level%'`, order by createdAt DESC; map through `transformTask()` (parse subtasks/dependencies JSON); on parse error return task with empty arrays.
- **58–68**: `findByNodeId(nodeId)`: one task or null, transformed.
- **70–78**: `findOne(id)`: throw if not found, return transformed.
- **80–105**: `update(id, dto)`: stringify subtasks/dependencies when arrays; assign and save; return transformed.
- **107–110**: `remove(id)`.
- **112–118**: `getProgress()`: total/completed/percentage (all tasks in DB).
- **120–147**: `seedTasks(tasks)`: skip if nodeId exists, else create; return { created, skipped }.
- **149–170**: `seedAllLevelTasks()`: if any Level task exists, return message; else message to use seed endpoint.
- **172–191**: `cleanupNonLevelTasks()`: delete tasks where nodeId does not start with "Level".
- **193–233**: `removeDuplicateTasks()`: group by nodeId, keep newest, remove others; return { removed, message }.
- **235–242**: `findAllLevelTasksOnly()`: same as findAll (Level% only), transformed.
- **244–322**: `transformTask(task)`: parse subtasks and dependencies from string/array; return plain object with arrays (avoids TypeORM serialization issues).

### `backend/src/tasks/tasks.controller.ts`
- Base path `api/tasks`.
- POST `/` → create; GET `/` → findAll; GET `progress` → getProgress; GET `node/:nodeId` → findByNodeId; GET `level-only` → findAllLevelTasksOnly.
- POST `seed` → seedTasks; POST `seed-all-60` → seedTasks (body); POST `seed-all` → seedAllLevelTasks.
- DELETE `cleanup` → cleanupNonLevelTasks; DELETE `remove-duplicates` → removeDuplicateTasks.
- GET `:id` → findOne; PATCH `:id` → update; DELETE `:id` → remove.

### `backend/src/tasks/tasks.module.ts`
- TypeOrmModule.forFeature([Task]), TasksController, TasksService; exports TasksService.

### `backend/src/tasks/tasks.seed.ts`
- Exports `DEFAULT_LEVEL_TASKS` (one sample Level1 task with subtasks) and `seedTasks(dataSource)` which skips if any tasks exist (actual seeding is via API from frontend).

### `backend/src/tasks/tasks.seed-data.ts`
- Exports empty `ALL_LEVEL_TASKS` array (placeholder; real data comes from frontend/defaults).

---

## 5. Frontend – Entry, App, Config

### `index.html`
- Standard HTML5; title “BitniTex - Architecture Explorer & Project Tracker”; favicon (emoji); Google Fonts (Outfit, JetBrains Mono); div `#root`; script `/src/main.jsx`.

### `vite.config.js`
- **1–2**: defineConfig, @vitejs/plugin-react.
- **6–20**: `getBasePath()`: from `VITE_BASE_PATH` or production default `/bitnitex/`, dev `/`.
- **21–50**: plugins [react], base, build (outDir dist, manualChunks for react, mermaid, ui), server port 3000 host true open true, preview port 4173.

### `src/main.jsx`
- React 18 createRoot, render `<App />` in StrictMode; imports `index.css`.

### `src/App.jsx`
- **7–35**: Class `ErrorBoundary`: getDerivedStateFromError, componentDidCatch, render error UI with “Something went wrong” and Reload button.
- **37–47**: App = ErrorBoundary wrapping AppProvider and TodoProvider, with Layout inside.

### `src/config/api.js`
- **4–31**: `getApiBaseUrl()`: use `VITE_API_URL` if set; in dev, if hostname is not localhost use same host with port 3001 (LAN); else localhost:3001; production without URL → null.
- **33**: `API_BASE_URL`.
- **36–38**: `isBackendAvailable()` true when base URL is set.
- **41–45**: `buildEndpoint(path)` returns full URL or null.
- **47–62**: `API_ENDPOINTS`: tasks, progress, taskByNode, task(id), seedTasks, diagrams, diagramById, diagramByDiagramId, seedDiagrams, nodes, nodeById, nodesByDiagram, nodesByNodeId, bulkCreateNodes, nodeMappings.

---

## 6. Frontend – Stores

### `src/store/AppStore.jsx`
- **3**: `AppContext = createContext()`.
- **5–11**: `useAppStore()`: must be used inside AppProvider.
- **13–84**: AppProvider state: currentView (default `'everything'`), selectedNode, breadcrumbs, zoomLevel, showMinimap, sidebarCollapsed, isFullscreen, showApiTester, isEditMode. Callbacks: navigateToView (sets view + node + breadcrumbs), zoomIn/Out/resetZoom, toggleMinimap/Sidebar/Fullscreen. Value object includes all state and setters (setSelectedNode, setShowApiTester, setIsEditMode).

### `src/store/TodoStore.jsx`
- **4–17**: TaskStatus and TaskPriority enums.
- **31–106**: `mapNodeToLevel(nodeName, dbMappings)`: clean node name (emojis, br, spaces, Level prefix, [MISSING], Controller/Service suffix); match only against `dbMappings` (no hardcoded fallback); try exact, case-insensitive, no-spaces, with Service/Controller suffix, then partial match by length; warn and return null if no match.
- **109–318**: `TASK_NAME_MAPPING`: controller/service names → title, category, level (Level* nodeId), priority; used for display and fallback metadata.
- **321–259**: Helpers: extractNamesFromMessyId, getShortTitle, createSubtasksFromNames, getTaskMetadata, transformBackendTask (priority/category/subtasks/notes), transformFrontendTask (to backend, priority lowercase), getBaseName, mergeDuplicateTasks, removeUselessTasks, cleanupTaskNames.
- **529–1028**: TodoProvider: state tasks (object keyed by nodeId), showTodoPanel, selectedTask, filters, loading, useBackend, backendError, nodeMappings. useEffect: loadTasksFromBackend, loadNodeMappingsFromBackend, and optional seed of diagrams/nodes if DB empty. loadTasksFromBackend: fetch tasks, dedupe by nodeId (keep newest), transform with priority mapping (Level1–60), fix missing priorities and PATCH backend, setTasks. loadNodeMappingsFromBackend: GET nodeMappings, setNodeMappings. seedTasksToBackend, saveTaskToBackend (POST or PATCH by backendId/nodeId), updateTask (optimistic + save), updateSubtask, addSubtask, toggleSubtask (with auto status COMPLETED/IN_PROGRESS), updateActualHours, updateTaskStatus/Priority, getOrCreateTask (map node to Level via nodeMappings/TASK_NAME_MAPPING, no ad-hoc task creation), addNote, getProgress (Level tasks only, percentage from task + subtask completion), getCategoryProgress. value exports all of the above; TodoContext and useTodoStore at bottom.

---

## 7. Frontend – Layout & Main Components

### `src/components/Layout.jsx`
- Uses AppStore: sidebarCollapsed, selectedNode, isFullscreen, showApiTester.
- Renders: app-container (fullscreen class when active); Sidebar (hidden in fullscreen); main with Toolbar (hidden in fullscreen), DiagramCanvas, ZoomControls, DetailPanel (when selectedNode and not fullscreen); TodoPanel; ApiTester when showApiTester.

### `src/components/Sidebar.jsx`
- **7–86**: `getUniqueIcon(diagram, index, allDiagrams)`: prefer diagram.icon if unique; else iconMap by title/type; else unique emoji pool by index.
- **88–139**: State diagrams, loading, error. useEffect: load diagrams only from backend via `loadAllDiagramsFromBackend()`; no hardcoded fallback; on success map icons with getUniqueIcon; on empty or error set error message and clear diagrams.
- **141**: mainViews = diagrams where type composite or detail.
- **144–221**: Aside with collapse toggle, header “BitniTex”, nav with Loading/Error/No diagrams or list of diagram buttons (active by currentView); stats section (Controllers 25+, Services 140+, Tables 81, Endpoints 200+).

### `src/components/Toolbar.jsx`
- Uses AppStore (currentView, breadcrumbs, navigateToView, minimap, sidebar, fullscreen, api tester, edit mode) and TodoStore (setShowTodoPanel, getProgress). getDiagram(currentView) from diagramRegistry (for breadcrumb/display). handleFullscreen toggles document fullscreen. Renders breadcrumb, “Project Progress (X%)”, API Tester, Minimap, Edit Diagram, Fullscreen buttons.

### `src/components/ZoomControls.jsx`
- zoomLevel, zoomIn/Out/resetZoom, isFullscreen, currentView, navigateToView from AppStore; getAllDiagrams from registry. In fullscreen: tab switcher (icon dropdown to switch diagram). Exit fullscreen button; + / zoom % / − / reset zoom buttons.

### `src/components/DetailPanel.jsx`
- selectedNode, setSelectedNode from AppStore; getNodeDetails(selectedNode) from nodeDetails. If no details return null. Renders: header with icon, title, type, close button; description; tags; renderEndpoints (method badge + path + description + auth); renderMethods; renderResponsibilities; renderSchema (name, type, key, description); “Services Used”, “Implementations”, “Supported Chains”, “Relationships”, “Notes” sections. All use CSS variables (--text-primary, --bg-tertiary, etc.).

---

## 8. Frontend – DiagramCanvas (summary; file is very long)

### `src/components/DiagramCanvas.jsx` (structure and key parts)
- **1–8**: React, mermaid, AppStore, TodoStore, getNodeDetails, enhanceDiagramWithStatus, API_ENDPOINTS.
- **10–65**: `convertNodesEdgesToMermaid(nodes, edges, originalCode)`: merge saved nodes/edges into Mermaid string (add node lines and edge lines not already in original).
- **67–102**: mermaid.initialize: dark theme, flowchart padding/spacing, themeVariables (colors, fonts).
- **104–139**: Refs (containerRef, viewportRef); state: loading, drag, pan, scroll, legend (from localStorage), currentDiagram, savedDiagram; edit state: editingNode, isConnecting, connectionStart, addNode dialog, colorPicker, newNodeData.
- **141–220**: useEffect on currentView: load diagram from backend (loadDiagramFromBackend), then load nodes (loadNodesFromBackend) and edges (loadEdgesFromBackend); set currentDiagram/savedDiagram; no fallback if not in DB. Listens for `diagram-saved` to reload.
- **222–250+**: autoSaveDiagram: save diagram to backend, extract nodes/edges from Mermaid, save nodes/edges.
- Rest of file: render logic, pan/zoom (wheel + drag), node click (setSelectedNode, open TodoPanel for task), Mermaid render with enhanced code (status colors/emojis), edit mode (add node, connect nodes, move, color), minimap, legend; integration with diagramBackend for save/load.

---

## 9. Frontend – Data & Utils

### `src/data/diagramRegistry.js`
- Exports `diagramRegistry` object: keys like `everything`, `overview`, `controllers`, `services`, `database`, etc. Each entry: id, title, subtitle, icon, type (composite/detail), description, children (for composite), `code` (Mermaid string). Used as fallback for breadcrumbs/titles and for seeding; primary source of diagram content in the app is the backend DB (diagrams loaded in Sidebar/DiagramCanvas from API).

### `src/data/nodeDetails.js`
- Exports `nodeDetails`: keyed by node id (e.g. AdminController, CustomerController). Each: id, type, title, icon, description, endpoints (method, path, description, auth), services, tags; some have methods, responsibilities, schema, implementations, supportedChains, relationships, notes. Used by DetailPanel when a node is selected.

### `src/data/stepByStepGuides.js`
- Exports `stepByStepGuides`: keyed by Level id (e.g. Level1_ProjectSetup). Each: order, title, description, steps[]. Each step: step number, title, instructions[], code, expectedResult, aiPrompt. Used by StepByStepGuide component for game-like progression.

### `src/utils/diagramHelper.js`
- **4–11**: getStatusEmoji(status) → ✅/🔄/🚫/⏸️.
- **14–22**: getStatusColor(status) → hex colors.
- **25–63**: generateNodeStyle(nodeId, status, isMissing): fill/stroke by status; dashed purple/orange for missing.
- **66–69**: addStatusToLabel(label, status, showEmoji).
- **72–150**: enhanceDiagramWithStatus(baseCode, tasks, savedDiagram): inject status emojis and style lines into Mermaid code for nodes that exist in diagram; respect locked nodes from savedDiagram; return enhanced code only if any node was styled or locked.

### `src/utils/diagramBackend.js`
- **1–36**: API_ENDPOINTS, diagramRegistry; mapNodeToLevel from TodoStore (async init); mapNodeNameToTask(nodeName, nodeMappings) uses that.
- **40–166**: extractNodesFromMermaid(mermaidCode, diagramId, nodeMappings): regex for node definitions; for each node resolve taskNodeId via mapNodeNameToTask then keyword fallback then Level1; inferNodeType, getNodeImportance, calculateInitialPosition; return array of node objects with nodeId, label, type, position, style, metadata, diagramId, taskNodeId.
- Rest: helpers to load/save diagrams and nodes (fetch diagramByDiagramId, nodes by diagram, PATCH diagram, POST bulk nodes, etc.) and seed diagrams+nodes from registry when DB is empty.

---

## 10. Other Frontend Components (brief)

- **TodoPanel**: Uses TodoStore (tasks, progress, filters, getOrCreateTask, updateTask, toggleSubtask, etc.); lists Level tasks, filters, progress; can open task detail and step-by-step guide.
- **ApiTester**: UI to call backend API endpoints (e.g. tasks, diagrams, nodes); toggled from Toolbar.
- **DiagramEditor / InlineDiagramEditor**: Edit Mermaid source and/or visual editor; save triggers backend update and diagram-saved event.
- **StepByStepGuide**: Renders step-by-step guides from stepByStepGuides for the selected Level task.

---

## 11. Data Flow Summary

- **Diagrams**: Stored in backend (SQLite). Sidebar loads list from `/api/diagrams`. DiagramCanvas loads one diagram by `diagramId` (and nodes/edges). Edits are saved via PATCH by diagramId; edges are synced from Mermaid in DiagramsService.
- **Nodes**: Stored in backend; can be by diagram or by nodeId. Node–task link: Node.taskNodeId ↔ Task.nodeId (Level*). Mappings endpoint `/api/nodes/mappings` used so diagram nodes map to Level tasks without hardcoded map in frontend.
- **Tasks**: Stored in backend; only “Level” tasks (nodeId starting with "Level") are shown. Frontend loads tasks and mappings on mount; creates/updates via POST/PATCH; priority/category normalized and synced back.

This walkthrough covers every file you asked about; the longest files (DiagramCanvas, TodoStore, diagramBackend, stepByStepGuides) are summarized by responsibility and key lines rather than every single line.
