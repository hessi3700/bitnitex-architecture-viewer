import { Diagram } from './diagram.entity';
import { Task } from '../tasks/task.entity';
export declare class Node {
    id: string;
    nodeId: string;
    label: string;
    type: string;
    description: string;
    position: any;
    style: any;
    metadata: any;
    diagram: Diagram;
    diagramId: string;
    task: Task;
    taskId: string;
    taskNodeId: string;
    createdAt: Date;
    updatedAt: Date;
}
