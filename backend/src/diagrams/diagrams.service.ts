import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Diagram } from './diagram.entity'
import { CreateDiagramDto } from './dto/create-diagram.dto'
import { UpdateDiagramDto } from './dto/update-diagram.dto'

@Injectable()
export class DiagramsService {
  constructor(
    @InjectRepository(Diagram)
    private diagramsRepository: Repository<Diagram>,
  ) {}

  async create(createDiagramDto: CreateDiagramDto): Promise<Diagram> {
    const diagram = this.diagramsRepository.create(createDiagramDto)
    return this.diagramsRepository.save(diagram)
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
    return this.diagramsRepository.save(diagram)
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
      
      return await this.diagramsRepository.save(diagram)
    } catch (error) {
      console.error('Error updating diagram by diagramId:', error)
      throw error
    }
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

