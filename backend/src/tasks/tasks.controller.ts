import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'

@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto)
  }

  @Get()
  findAll() {
    return this.tasksService.findAll()
  }

  @Get('progress')
  getProgress() {
    return this.tasksService.getProgress()
  }

  @Get('node/:nodeId')
  findByNodeId(@Param('nodeId') nodeId: string) {
    return this.tasksService.findByNodeId(nodeId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id)
  }

  @Post('seed')
  @HttpCode(HttpStatus.CREATED)
  seedTasks(@Body() tasks: CreateTaskDto[]) {
    return this.tasksService.seedTasks(tasks)
  }
}

