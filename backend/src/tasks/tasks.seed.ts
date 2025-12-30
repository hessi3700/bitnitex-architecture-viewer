import { DataSource } from 'typeorm'
import { Task, TaskStatus } from './task.entity'

// Import the 30 Level tasks from the frontend DEFAULT_TASKS
// This will be populated from the frontend store
export const DEFAULT_LEVEL_TASKS = [
  {
    nodeId: 'Level1_ProjectSetup',
    title: '🎮 Level 1: Project Foundation',
    description: 'Set up NestJS project from scratch with all core dependencies, project structure, environment configuration, Swagger documentation, and development tools. This is the foundation for the entire BitniTex cryptocurrency exchange platform.',
    status: TaskStatus.NOT_STARTED,
    estimatedHours: 16,
    actualHours: 0,
    subtasks: [
      { id: 'nest-node-check', title: 'Verify Node.js 20+ installation and npm version', completed: false },
      { id: 'nest-cli', title: 'Install NestJS CLI globally: npm install -g @nestjs/cli', completed: false },
      { id: 'nest-cli-verify', title: 'Verify NestJS CLI installation: nest --version', completed: false },
      { id: 'nest-init', title: 'Initialize new NestJS project: nest new bitnitex-backend', completed: false },
      { id: 'nest-packages-core', title: 'Install core packages: @nestjs/common, @nestjs/core, @nestjs/platform-express', completed: false },
      { id: 'nest-packages-db', title: 'Install database packages: @nestjs/typeorm, typeorm, mysql2', completed: false },
      { id: 'nest-packages-auth', title: 'Install authentication packages: @nestjs/jwt, @nestjs/passport, passport, passport-jwt, bcrypt', completed: false },
      { id: 'nest-packages-validation', title: 'Install validation packages: class-validator, class-transformer', completed: false },
      { id: 'nest-packages-swagger', title: 'Install Swagger packages: @nestjs/swagger, swagger-ui-express', completed: false },
      { id: 'nest-packages-config', title: 'Install configuration package: @nestjs/config', completed: false },
      { id: 'nest-packages-utils', title: 'Install utility packages: @nestjs/schedule, @nestjs/websockets, @nestjs/platform-socket.io', completed: false },
      { id: 'nest-structure-modules', title: 'Create src/modules directory for feature modules', completed: false },
      { id: 'nest-structure-common', title: 'Create src/common directory (guards, decorators, filters, interceptors)', completed: false },
      { id: 'nest-structure-config', title: 'Create src/config directory for configuration files', completed: false },
      { id: 'nest-structure-dto', title: 'Create src/common/dto directory for shared DTOs', completed: false },
      { id: 'nest-config-env', title: 'Create .env file with database, JWT, and API keys', completed: false },
      { id: 'nest-config-module', title: 'Configure ConfigModule in app.module.ts', completed: false },
      { id: 'nest-swagger-setup', title: 'Set up SwaggerModule in main.ts with DocumentBuilder', completed: false },
      { id: 'nest-swagger-auth', title: 'Configure Swagger JWT authentication', completed: false },
      { id: 'nest-validation-pipe', title: 'Set up global ValidationPipe in main.ts', completed: false },
      { id: 'nest-exception-filter', title: 'Create global exception filter in src/common/filters', completed: false },
      { id: 'nest-logging-setup', title: 'Configure logging with Winston or built-in logger', completed: false },
      { id: 'nest-testing-setup', title: 'Configure Jest for testing in package.json', completed: false },
      { id: 'nest-gitignore', title: 'Update .gitignore for Node.js and NestJS', completed: false },
      { id: 'nest-readme', title: 'Create README.md with project setup instructions', completed: false }
    ],
    notes: [],
    dependencies: [],
    priority: 'critical',
    category: 'Infrastructure'
  },
  // Note: This is a simplified seed - the full 30 tasks will be loaded from the frontend
  // For now, we'll create a seed script that the frontend can call
]

export async function seedTasks(dataSource: DataSource) {
  const taskRepository = dataSource.getRepository(Task)
  
  // Clear existing tasks (optional - comment out if you want to keep existing data)
  // await taskRepository.clear()
  
  // Check if tasks already exist
  const existingTasks = await taskRepository.find()
  if (existingTasks.length > 0) {
    console.log(`✅ Tasks already exist in database (${existingTasks.length} tasks). Skipping seed.`)
    return
  }
  
  console.log('🌱 Seeding 30 Level tasks to database...')
  
  // The full task list will be sent from the frontend
  // This is just a placeholder - the actual seeding will happen via API call from frontend
  console.log('📝 Note: Use the frontend seed endpoint to populate all 30 Level tasks.')
}

