import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, Not, IsNull } from 'typeorm'
import { Node } from './node.entity'
import { Task } from '../tasks/task.entity'

@Injectable()
export class NodesService {
  constructor(
    @InjectRepository(Node)
    private nodesRepository: Repository<Node>,
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(nodeData: Partial<Node>): Promise<Node> {
    // If taskNodeId is provided, find the task
    if (nodeData.taskNodeId) {
      const task = await this.tasksRepository.findOne({
        where: { nodeId: nodeData.taskNodeId }
      })
      if (task) {
        nodeData.taskId = task.id
      }
    }

    const node = this.nodesRepository.create(nodeData)
    return this.nodesRepository.save(node)
  }

  async findAll(): Promise<Node[]> {
    return this.nodesRepository.find({
      relations: ['diagram', 'task'],
      order: { createdAt: 'DESC' },
    })
  }

  async getNodeToTaskMappings(): Promise<Record<string, string>> {
    // Get all nodes with their taskNodeId mappings
    const nodes = await this.nodesRepository.find({
      where: { taskNodeId: Not(IsNull()) },
      select: ['nodeId', 'label', 'taskNodeId']
    })
    
    // Build a mapping object: { nodeId: taskNodeId, label: taskNodeId, ... }
    const mappings: Record<string, string> = {}
    
    nodes.forEach(node => {
      // Map by nodeId
      if (node.nodeId && node.taskNodeId) {
        mappings[node.nodeId] = node.taskNodeId
      }
      
      // Map by label (cleaned)
      if (node.label && node.taskNodeId) {
        const cleanLabel = node.label
          .replace(/[✅🔄⏸️🚫🔒🚀🌐🔐🎛️⚙️💰👤📧🎫⛓️💳💾]/g, '')
          .replace(/<br\s*\/?>/gi, ' ')
          .replace(/\s+/g, ' ')
          .trim()
        if (cleanLabel) {
          mappings[cleanLabel] = node.taskNodeId
        }
      }
    })
    
    return mappings
  }

  async findByDiagramId(diagramId: string): Promise<Node[]> {
    return this.nodesRepository.find({
      where: { diagramId },
      relations: ['task'],
      order: { createdAt: 'ASC' },
    })
  }

  async findByNodeId(nodeId: string): Promise<Node[]> {
    return this.nodesRepository.find({
      where: { nodeId },
      relations: ['diagram', 'task'],
    })
  }

  async findOne(id: string): Promise<Node> {
    const node = await this.nodesRepository.findOne({
      where: { id },
      relations: ['diagram', 'task'],
    })
    if (!node) {
      throw new NotFoundException(`Node with ID ${id} not found`)
    }
    return node
  }

  async update(id: string, updateData: Partial<Node>): Promise<Node> {
    const node = await this.findOne(id)
    
    // If taskNodeId is provided, find the task
    if (updateData.taskNodeId) {
      const task = await this.tasksRepository.findOne({
        where: { nodeId: updateData.taskNodeId }
      })
      if (task) {
        updateData.taskId = task.id
      }
    }

    Object.assign(node, updateData)
    return this.nodesRepository.save(node)
  }

  async remove(id: string): Promise<void> {
    const node = await this.findOne(id)
    await this.nodesRepository.remove(node)
  }

  async bulkCreate(nodes: Partial<Node>[]): Promise<Node[]> {
    // Resolve task relations for all nodes
    const taskNodeIds = [...new Set(nodes.map(n => n.taskNodeId).filter(Boolean))]
    const tasks = await this.tasksRepository.find({
      where: taskNodeIds.map(nodeId => ({ nodeId }))
    })
    const taskMap = new Map(tasks.map(t => [t.nodeId, t.id]))

    // Set taskId for each node
    nodes.forEach(node => {
      if (node.taskNodeId && taskMap.has(node.taskNodeId)) {
        node.taskId = taskMap.get(node.taskNodeId)
      }
    })

    const createdNodes = this.nodesRepository.create(nodes)
    return this.nodesRepository.save(createdNodes)
  }

  async removeByDiagramId(diagramId: string): Promise<void> {
    await this.nodesRepository.delete({ diagramId })
  }
}



