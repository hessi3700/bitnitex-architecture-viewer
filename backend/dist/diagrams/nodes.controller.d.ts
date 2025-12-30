import { NodesService } from './nodes.service';
export declare class NodesController {
    private readonly nodesService;
    constructor(nodesService: NodesService);
    create(nodeData: any): Promise<import("./node.entity").Node>;
    bulkCreate(nodes: any[]): Promise<import("./node.entity").Node[]>;
    findAll(diagramId?: string, nodeId?: string): Promise<import("./node.entity").Node[]>;
    findByDiagramId(diagramId: string): Promise<import("./node.entity").Node[]>;
    findByNodeId(nodeId: string): Promise<import("./node.entity").Node[]>;
    findOne(id: string): Promise<import("./node.entity").Node>;
    update(id: string, updateData: any): Promise<import("./node.entity").Node>;
    remove(id: string): Promise<void>;
    removeByDiagramId(diagramId: string): Promise<void>;
}
