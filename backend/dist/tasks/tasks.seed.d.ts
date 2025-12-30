import { DataSource } from 'typeorm';
import { TaskStatus } from './task.entity';
export declare const DEFAULT_LEVEL_TASKS: {
    nodeId: string;
    title: string;
    description: string;
    status: TaskStatus;
    estimatedHours: number;
    actualHours: number;
    subtasks: {
        id: string;
        title: string;
        completed: boolean;
    }[];
    notes: any[];
    dependencies: any[];
    priority: string;
    category: string;
}[];
export declare function seedTasks(dataSource: DataSource): Promise<void>;
