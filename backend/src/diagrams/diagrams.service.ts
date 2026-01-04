import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Diagram } from './diagram.entity'
import { Edge } from './edge.entity'
import { CreateDiagramDto } from './dto/create-diagram.dto'
import { UpdateDiagramDto } from './dto/update-diagram.dto'

@Injectable()
export class DiagramsService {
  constructor(
    @InjectRepository(Diagram)
    private diagramsRepository: Repository<Diagram>,
    @InjectRepository(Edge)
    private edgesRepository: Repository<Edge>,
  ) {}

  async create(createDiagramDto: CreateDiagramDto): Promise<Diagram> {
    const diagram = this.diagramsRepository.create(createDiagramDto)
    const savedDiagram = await this.diagramsRepository.save(diagram)
    
    // Sync edges from Mermaid code to Edge entities
    await this.syncEdgesFromMermaid(savedDiagram)
    
    // Reload with relations
    return await this.findOne(savedDiagram.id)
  }

  async findAll(): Promise<Diagram[]> {
    return this.diagramsRepository.find({
      order: { createdAt: 'DESC' },
    })
  }

  async findOne(id: string): Promise<Diagram> {
    const diagram = await this.diagramsRepository.findOne({ 
      where: { id },
      relations: ['nodeEntities', 'nodeEntities.task', 'edgeEntities']
    })
    if (!diagram) {
      throw new NotFoundException(`Diagram with ID ${id} not found`)
    }
    return diagram
  }

  async findByDiagramId(diagramId: string): Promise<Diagram | null> {
    return this.diagramsRepository.findOne({ 
      where: { diagramId },
      relations: ['nodeEntities', 'nodeEntities.task', 'edgeEntities']
    })
  }

  async update(id: string, updateDiagramDto: UpdateDiagramDto): Promise<Diagram> {
    const diagram = await this.findOne(id)
    Object.assign(diagram, updateDiagramDto)
    const savedDiagram = await this.diagramsRepository.save(diagram)
    
    // Sync edges from Mermaid code to Edge entities
    await this.syncEdgesFromMermaid(savedDiagram)
    
    // Reload with relations
    return await this.findOne(id)
  }

  async updateByDiagramId(diagramId: string, updateDiagramDto: UpdateDiagramDto): Promise<Diagram> {
    try {
      let diagram = await this.findByDiagramId(diagramId)
      if (!diagram) {
        // Create if doesn't exist
        diagram = this.diagramsRepository.create({
          diagramId,
          title: updateDiagramDto.title || diagramId,
          mermaidCode: '',
          ...updateDiagramDto,
        })
      } else {
        Object.assign(diagram, updateDiagramDto)
      }
      
      // Validate nodes and edges are valid JSON
      if (diagram.nodes && typeof diagram.nodes !== 'object') {
        console.error('Invalid nodes format:', typeof diagram.nodes, diagram.nodes)
        throw new Error('Nodes must be a valid JSON object or array')
      }
      if (diagram.edges && typeof diagram.edges !== 'object') {
        console.error('Invalid edges format:', typeof diagram.edges, diagram.edges)
        throw new Error('Edges must be a valid JSON object or array')
      }
      
      // Save diagram first to get the ID
      const savedDiagram = await this.diagramsRepository.save(diagram)
      
      // Sync edges from Mermaid code to Edge entities
      await this.syncEdgesFromMermaid(savedDiagram)
      
      // Reload with relations
      return await this.findByDiagramId(diagramId)
    } catch (error) {
      console.error('Error updating diagram by diagramId:', error)
      throw error
    }
  }

  // Extract edges from Mermaid code and sync to Edge entities
  private async syncEdgesFromMermaid(diagram: Diagram): Promise<void> {
    const mermaidCode = diagram.customMermaidCode || diagram.mermaidCode || ''
    if (!mermaidCode) return

    // Extract edges from Mermaid code
    const edges = this.extractEdgesFromMermaid(mermaidCode)
    
    // Get existing edges for this diagram
    const existingEdges = await this.edgesRepository.find({
      where: { diagramId: diagram.id }
    })
    
    // Create a map of existing edges by sourceNodeId-targetNodeId
    const existingEdgeMap = new Map<string, Edge>()
    existingEdges.forEach(edge => {
      const key = `${edge.sourceNodeId}-->${edge.targetNodeId}`
      existingEdgeMap.set(key, edge)
    })
    
    // Create a set of edges from Mermaid code
    const mermaidEdgeSet = new Set<string>()
    edges.forEach(edge => {
      const key = `${edge.source}-->${edge.target}`
      mermaidEdgeSet.add(key)
    })
    
    // Delete edges that are no longer in Mermaid code
    for (const [key, existingEdge] of existingEdgeMap.entries()) {
      if (!mermaidEdgeSet.has(key)) {
        await this.edgesRepository.remove(existingEdge)
      }
    }
    
    // Create or update edges from Mermaid code
    for (const edgeData of edges) {
      const key = `${edgeData.source}-->${edgeData.target}`
      const existingEdge = existingEdgeMap.get(key)
      
      if (existingEdge) {
        // Update existing edge
        existingEdge.label = edgeData.label || null
        existingEdge.type = edgeData.type || 'directed'
        existingEdge.metadata = edgeData.metadata || {}
        await this.edgesRepository.save(existingEdge)
      } else {
        // Create new edge
        const newEdge = this.edgesRepository.create({
          sourceNodeId: edgeData.source,
          targetNodeId: edgeData.target,
          label: edgeData.label || null,
          type: edgeData.type || 'directed',
          metadata: edgeData.metadata || {},
          diagramId: diagram.id
        })
        await this.edgesRepository.save(newEdge)
      }
    }
  }

  // Extract edges from Mermaid code
  private extractEdgesFromMermaid(mermaidCode: string): Array<{source: string, target: string, label: string | null, type: string, metadata: any}> {
    const edges: Array<{source: string, target: string, label: string | null, type: string, metadata: any}> = []
    const edgeSet = new Set<string>()
    
    // Match edges: source --> target, source -.-> target, source --- target
    // Also match: source -->|label| target
    const edgeRegex = /(\w+)\s*(?:-->|-.->|---)\s*(?:\|([^|]+)\|)?\s*(\w+)/g
    let match
    
    while ((match = edgeRegex.exec(mermaidCode)) !== null) {
      const source = match[1]
      const target = match[3]
      const label = match[2] || null
      const edgeType = match[0].includes('-.->') ? 'dashed' : 'directed'
      const edgeKey = `${source}-->${target}`
      
      // Skip if already processed
      if (edgeSet.has(edgeKey)) continue
      edgeSet.add(edgeKey)
      
      edges.push({
        source: source,
        target: target,
        label: label,
        type: edgeType,
        metadata: {
          extractedFrom: 'mermaid',
          originalEdge: match[0]
        }
      })
    }
    
    return edges
  }

  async remove(id: string): Promise<void> {
    const diagram = await this.findOne(id)
    await this.diagramsRepository.remove(diagram)
  }

  async seedDiagrams(diagrams: CreateDiagramDto[]): Promise<{ created: number; skipped: number }> {
    let created = 0
    let skipped = 0
    
    for (const diagramData of diagrams) {
      // Check if diagram with this diagramId already exists
      const existing = await this.findByDiagramId(diagramData.diagramId)
      
      if (existing) {
        skipped++
        continue
      }
      
      // Create new diagram
      const diagram = this.diagramsRepository.create(diagramData)
      await this.diagramsRepository.save(diagram)
      created++
    }
    
    return { created, skipped }
  }
}

