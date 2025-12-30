import { TaskStatus } from '../task.entity';
export declare class CreateTaskDto {
    nodeId: string;
    title: string;
    description?: string;
    status?: TaskStatus;
    notes?: string;
    estimatedHours?: number;
    actualHours?: number;
    subtasks?: string[];
    dependencies?: string[];
    priority?: string;
    category?: string;
    isMissing?: boolean;
}
