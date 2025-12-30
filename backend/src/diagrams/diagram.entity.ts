import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { Node } from './node.entity'
import { Edge } from './edge.entity'

@Entity('diagrams')
export class Diagram {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 255, unique: true })
  diagramId: string // e.g., 'everything', 'controllers', etc.

  @Column({ type: 'text' })
  title: string

  @Column({ type: 'text', nullable: true })
  description: string

  @Column({ type: 'text' })
  mermaidCode: string // Original Mermaid code

  @Column({ type: 'text', nullable: true })
  customMermaidCode: string // User-edited Mermaid code

  @Column({ type: 'json', nullable: true })
  nodes: any // Legacy: Array of node objects (for backward compatibility)

  @Column({ type: 'json', nullable: true })
  edges: any // Array of edge objects with source, target, etc. (also stored as Edge entities)

  @Column({ type: 'json', nullable: true })
  metadata: any // Additional metadata (zoom, pan, etc.)

  // Relation to Nodes (new structure - all nodes saved in Node entity table)
  @OneToMany(() => Node, node => node.diagram, { cascade: true })
  nodeEntities: Node[]

  // Relation to Edges (new structure - all edges saved in Edge entity table)
  @OneToMany(() => Edge, edge => edge.diagram, { cascade: true })
  edgeEntities: Edge[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

