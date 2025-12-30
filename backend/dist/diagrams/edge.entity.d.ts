import { Diagram } from './diagram.entity';
import { Node } from './node.entity';
export declare class Edge {
    id: string;
    sourceNodeId: string;
    targetNodeId: string;
    label: string;
    type: string;
    style: any;
    metadata: any;
    diagram: Diagram;
    diagramId: string;
    sourceNode: Node;
    sourceNodeEntityId: string;
    targetNode: Node;
    targetNodeEntityId: string;
    createdAt: Date;
    updatedAt: Date;
}
