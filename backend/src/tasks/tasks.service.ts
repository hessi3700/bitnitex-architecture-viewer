import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Task, TaskStatus } from './task.entity'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.tasksRepository.create({
      ...createTaskDto,
      subtasks: createTaskDto.subtasks ? JSON.stringify(createTaskDto.subtasks) : null,
      dependencies: createTaskDto.dependencies ? JSON.stringify(createTaskDto.dependencies) : null,
    })
    return await this.tasksRepository.save(task)
  }

  async findAll(): Promise<Task[]> {
    try {
      const tasks = await this.tasksRepository.find({
        order: { createdAt: 'DESC' },
      })
      return tasks.map(task => {
        try {
          return this.transformTask(task)
        } catch (error) {
          console.error('Error transforming task:', task.id, error)
          // Return task with empty arrays if transformation fails
          return {
            id: task.id,
            nodeId: task.nodeId,
            title: task.title,
            description: task.description,
            status: task.status,
            notes: task.notes,
            estimatedHours: task.estimatedHours,
            actualHours: task.actualHours,
            subtasks: [],
            dependencies: [],
            createdAt: task.createdAt,
            updatedAt: task.updatedAt,
          }
        }
      })
    } catch (error) {
      console.error('Error in findAll:', error)
      throw error
    }
  }

  async findByNodeId(nodeId: string): Promise<Task | null> {
    try {
      const task = await this.tasksRepository.findOne({
        where: { nodeId },
      })
      return task ? this.transformTask(task) : null
    } catch (error) {
      console.error('Error finding task by nodeId:', error)
      return null
    }
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.tasksRepository.findOne({
      where: { id },
    })
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`)
    }
    return this.transformTask(task)
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id } })
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`)
    }
    
    // Transform arrays to JSON strings for storage
    const updateData: any = { ...updateTaskDto }
    if (updateData.subtasks && Array.isArray(updateData.subtasks)) {
      updateData.subtasks = JSON.stringify(updateData.subtasks)
    } else if (updateData.subtasks === undefined) {
      // Don't update if not provided
      delete updateData.subtasks
    }
    if (updateData.dependencies && Array.isArray(updateData.dependencies)) {
      updateData.dependencies = JSON.stringify(updateData.dependencies)
    } else if (updateData.dependencies === undefined) {
      // Don't update if not provided
      delete updateData.dependencies
    }

    Object.assign(task, updateData)
    await this.tasksRepository.save(task)
    return this.transformTask(task)
  }

  async remove(id: string): Promise<void> {
    const task = await this.findOne(id)
    await this.tasksRepository.remove(task)
  }

  async getProgress(): Promise<{ total: number; completed: number; percentage: number }> {
    const tasks = await this.tasksRepository.find()
    const total = tasks.length
    const completed = tasks.filter(t => t.status === TaskStatus.COMPLETED).length
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
    
    return { total, completed, percentage }
  }

  async seedTasks(tasks: CreateTaskDto[]): Promise<{ created: number; skipped: number }> {
    let created = 0
    let skipped = 0
    
    for (const taskData of tasks) {
      // Check if task with this nodeId already exists
      const existing = await this.tasksRepository.findOne({
        where: { nodeId: taskData.nodeId }
      })
      
      if (existing) {
        skipped++
        continue
      }
      
      // Create new task
      const task = this.tasksRepository.create({
        ...taskData,
        subtasks: taskData.subtasks ? JSON.stringify(taskData.subtasks) : null,
        dependencies: taskData.dependencies ? JSON.stringify(taskData.dependencies) : null,
      })
      
      await this.tasksRepository.save(task)
      created++
    }
    
    return { created, skipped }
  }

  async seedAllLevelTasks(): Promise<{ created: number; skipped: number; message: string }> {
    // Check if tasks already exist
    const existingTasks = await this.tasksRepository.find({
      where: { nodeId: () => "nodeId LIKE 'Level%'" }
    })
    
    if (existingTasks.length > 0) {
      return { 
        created: 0, 
        skipped: existingTasks.length, 
        message: `Tasks already exist in database (${existingTasks.length} Level tasks). Use POST /api/tasks/seed with task data to add new tasks.` 
      }
    }
    
    // Return message that tasks need to be seeded via the seed endpoint
    // The frontend will call this, but we need the actual task data
    return {
      created: 0,
      skipped: 0,
      message: 'No tasks in database. Please seed tasks using POST /api/tasks/seed with task data, or ensure tasks are seeded on first load.'
    }
  }

  private transformTask(task: Task): any {
    // Parse subtasks from JSON string
    let subtasks = []
    let dependencies = []
    
    try {
      // Handle subtasks - check if it's a string, array, null, or undefined
      if (task.subtasks === null || task.subtasks === undefined) {
        subtasks = []
      } else if (typeof task.subtasks === 'string') {
        const trimmed = task.subtasks.trim()
        if (trimmed && trimmed !== 'null' && trimmed !== 'undefined' && trimmed !== '[object Object]') {
          try {
            subtasks = JSON.parse(trimmed)
            // Ensure it's an array
            if (!Array.isArray(subtasks)) {
              subtasks = []
            }
          } catch (e) {
            console.warn('Failed to parse subtasks JSON:', trimmed.substring(0, 50))
            subtasks = []
          }
        } else {
          subtasks = []
        }
      } else if (Array.isArray(task.subtasks)) {
        subtasks = task.subtasks
      } else {
        subtasks = []
      }
    } catch (e) {
      console.error('Error parsing subtasks:', e, 'Value:', task.subtasks)
      subtasks = []
    }
    
    try {
      // Handle dependencies - same logic
      if (task.dependencies === null || task.dependencies === undefined) {
        dependencies = []
      } else if (typeof task.dependencies === 'string') {
        const trimmed = task.dependencies.trim()
        if (trimmed && trimmed !== 'null' && trimmed !== 'undefined' && trimmed !== '[object Object]') {
          try {
            dependencies = JSON.parse(trimmed)
            // Ensure it's an array
            if (!Array.isArray(dependencies)) {
              dependencies = []
            }
          } catch (e) {
            console.warn('Failed to parse dependencies JSON:', trimmed.substring(0, 50))
            dependencies = []
          }
        } else {
          dependencies = []
        }
      } else if (Array.isArray(task.dependencies)) {
        dependencies = task.dependencies
      } else {
        dependencies = []
      }
    } catch (e) {
      console.error('Error parsing dependencies:', e, 'Value:', task.dependencies)
      dependencies = []
    }
    
    // Return plain object, not Task entity, to avoid TypeORM serialization issues
    return {
      id: task.id,
      nodeId: task.nodeId,
      title: task.title,
      description: task.description,
      status: task.status,
      notes: task.notes,
      estimatedHours: task.estimatedHours,
      actualHours: task.actualHours,
      subtasks,
      dependencies,
      priority: task.priority || null,
      category: task.category || null,
      isMissing: task.isMissing || false,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    }
  }
}

