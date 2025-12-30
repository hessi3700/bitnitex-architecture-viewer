import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

export enum TaskStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  BLOCKED = 'blocked',
}

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  nodeId: string

  @Column()
  title: string

  @Column('text', { nullable: true })
  description: string

  @Column({
    type: 'text',
    default: TaskStatus.NOT_STARTED,
  })
  status: TaskStatus

  @Column('text', { nullable: true })
  notes: string

  @Column('real', { default: 0 })
  estimatedHours: number

  @Column('real', { default: 0 })
  actualHours: number

  @Column('text', { nullable: true })
  subtasks: string // JSON string array

  @Column('text', { nullable: true })
  dependencies: string // JSON string array

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

