import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findByNodeId(nodeId: string): Promise<Task | null>;
    findOne(id: string): Promise<Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    remove(id: string): Promise<void>;
    getProgress(): Promise<{
        total: number;
        completed: number;
        percentage: number;
    }>;
    seedTasks(tasks: CreateTaskDto[]): Promise<{
        created: number;
        skipped: number;
    }>;
    seedAllLevelTasks(): Promise<{
        created: number;
        skipped: number;
        message: string;
    }>;
    private transformTask;
}
