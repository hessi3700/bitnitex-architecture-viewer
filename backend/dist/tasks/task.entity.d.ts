export declare enum TaskStatus {
    NOT_STARTED = "not_started",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    BLOCKED = "blocked"
}
export declare class Task {
    id: string;
    nodeId: string;
    title: string;
    description: string;
    status: TaskStatus;
    notes: string;
    estimatedHours: number;
    actualHours: number;
    subtasks: string;
    dependencies: string;
    priority: string;
    category: string;
    isMissing: boolean;
    createdAt: Date;
    updatedAt: Date;
}
