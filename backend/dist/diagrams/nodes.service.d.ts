import { Repository } from 'typeorm';
import { Node } from './node.entity';
import { Task } from '../tasks/task.entity';
export declare class NodesService {
    private nodesRepository;
    private tasksRepository;
    constructor(nodesRepository: Repository<Node>, tasksRepository: Repository<Task>);
    create(nodeData: Partial<Node>): Promise<Node>;
    findAll(): Promise<Node[]>;
    findByDiagramId(diagramId: string): Promise<Node[]>;
    findByNodeId(nodeId: string): Promise<Node[]>;
    findOne(id: string): Promise<Node>;
    update(id: string, updateData: Partial<Node>): Promise<Node>;
    remove(id: string): Promise<void>;
    bulkCreate(nodes: Partial<Node>[]): Promise<Node[]>;
    removeByDiagramId(diagramId: string): Promise<void>;
}
