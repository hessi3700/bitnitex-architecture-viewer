import { IsString, IsOptional, IsEnum, IsNumber, IsArray } from 'class-validator'
import { TaskStatus } from '../task.entity'

export class CreateTaskDto {
  @IsString()
  nodeId: string

  @IsString()
  title: string

  @IsString()
  @IsOptional()
  description?: string

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus

  @IsString()
  @IsOptional()
  notes?: string

  @IsNumber()
  @IsOptional()
  estimatedHours?: number

  @IsNumber()
  @IsOptional()
  actualHours?: number

  @IsArray()
  @IsOptional()
  subtasks?: string[]

  @IsArray()
  @IsOptional()
  dependencies?: string[]
}

