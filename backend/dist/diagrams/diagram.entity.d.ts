import { Node } from './node.entity';
import { Edge } from './edge.entity';
export declare class Diagram {
    id: string;
    diagramId: string;
    title: string;
    description: string;
    mermaidCode: string;
    customMermaidCode: string;
    nodes: any;
    edges: any;
    metadata: any;
    nodeEntities: Node[];
    edgeEntities: Edge[];
    createdAt: Date;
    updatedAt: Date;
}
