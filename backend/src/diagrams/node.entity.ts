import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Diagram } from './diagram.entity'
import { Task } from '../tasks/task.entity'

@Entity('nodes')
export class Node {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 255 })
  nodeId: string // e.g., 'CustomerController', 'OrderService', etc.

  @Column({ type: 'varchar', length: 255 })
  label: string // Display label

  @Column({ type: 'varchar', length: 100, nullable: true })
  type: string // e.g., 'controller', 'service', 'database', etc.

  @Column({ type: 'text', nullable: true })
  description: string

  @Column({ type: 'json', nullable: true })
  position: any // { x, y } coordinates

  @Column({ type: 'json', nullable: true })
  style: any // CSS styles

  @Column({ type: 'json', nullable: true })
  metadata: any // Additional node metadata

  // Relation to Diagram
  @ManyToOne(() => Diagram, diagram => diagram.nodes, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'diagramId' })
  diagram: Diagram

  @Column({ type: 'varchar', length: 36, nullable: true })
  diagramId: string

  // Relation to Task (optional - node can be linked to a task)
  @ManyToOne(() => Task, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'taskId' })
  task: Task

  @Column({ type: 'varchar', length: 36, nullable: true })
  taskId: string // Links to Task.id (UUID) or Task.nodeId

  @Column({ type: 'varchar', length: 255, nullable: true })
  taskNodeId: string // Links to Task.nodeId (e.g., 'Level1_ProjectSetup')

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}





