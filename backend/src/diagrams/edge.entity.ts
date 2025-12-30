import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Diagram } from './diagram.entity'
import { Node } from './node.entity'

@Entity('edges')
export class Edge {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 255 })
  sourceNodeId: string // The nodeId (e.g., 'OrderS', 'CustomerS')

  @Column({ type: 'varchar', length: 255 })
  targetNodeId: string // The nodeId (e.g., 'WalletS', 'TradeS')

  @Column({ type: 'varchar', length: 100, nullable: true })
  label: string // Optional edge label

  @Column({ type: 'varchar', length: 50, default: 'directed' })
  type: string // 'directed', 'dashed', 'bidirectional'

  @Column({ type: 'json', nullable: true })
  style: any // CSS styles for the edge

  @Column({ type: 'json', nullable: true })
  metadata: any // Additional edge metadata

  // Relation to Diagram
  @ManyToOne(() => Diagram, diagram => diagram.edges, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'diagramId' })
  diagram: Diagram

  @Column({ type: 'varchar', length: 36, nullable: true })
  diagramId: string

  // Relations to source and target nodes (optional, for referential integrity)
  @ManyToOne(() => Node, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'sourceNodeEntityId' })
  sourceNode: Node

  @Column({ type: 'varchar', length: 36, nullable: true })
  sourceNodeEntityId: string

  @ManyToOne(() => Node, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'targetNodeEntityId' })
  targetNode: Node

  @Column({ type: 'varchar', length: 36, nullable: true })
  targetNodeEntityId: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}


