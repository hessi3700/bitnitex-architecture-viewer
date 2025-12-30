"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./task.entity");
let TasksService = class TasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }
    async create(createTaskDto) {
        const task = this.tasksRepository.create({
            ...createTaskDto,
            subtasks: createTaskDto.subtasks ? JSON.stringify(createTaskDto.subtasks) : null,
            dependencies: createTaskDto.dependencies ? JSON.stringify(createTaskDto.dependencies) : null,
        });
        return await this.tasksRepository.save(task);
    }
    async findAll() {
        try {
            const tasks = await this.tasksRepository.find({
                order: { createdAt: 'DESC' },
            });
            return tasks.map(task => {
                try {
                    return this.transformTask(task);
                }
                catch (error) {
                    console.error('Error transforming task:', task.id, error);
                    return {
                        id: task.id,
                        nodeId: task.nodeId,
                        title: task.title,
                        description: task.description,
                        status: task.status,
                        notes: task.notes,
                        estimatedHours: task.estimatedHours,
                        actualHours: task.actualHours,
                        subtasks: [],
                        dependencies: [],
                        createdAt: task.createdAt,
                        updatedAt: task.updatedAt,
                    };
                }
            });
        }
        catch (error) {
            console.error('Error in findAll:', error);
            throw error;
        }
    }
    async findByNodeId(nodeId) {
        try {
            const task = await this.tasksRepository.findOne({
                where: { nodeId },
            });
            return task ? this.transformTask(task) : null;
        }
        catch (error) {
            console.error('Error finding task by nodeId:', error);
            return null;
        }
    }
    async findOne(id) {
        const task = await this.tasksRepository.findOne({
            where: { id },
        });
        if (!task) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        return this.transformTask(task);
    }
    async update(id, updateTaskDto) {
        const task = await this.tasksRepository.findOne({ where: { id } });
        if (!task) {
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        }
        const updateData = { ...updateTaskDto };
        if (updateData.subtasks && Array.isArray(updateData.subtasks)) {
            updateData.subtasks = JSON.stringify(updateData.subtasks);
        }
        else if (updateData.subtasks === undefined) {
            delete updateData.subtasks;
        }
        if (updateData.dependencies && Array.isArray(updateData.dependencies)) {
            updateData.dependencies = JSON.stringify(updateData.dependencies);
        }
        else if (updateData.dependencies === undefined) {
            delete updateData.dependencies;
        }
        Object.assign(task, updateData);
        await this.tasksRepository.save(task);
        return this.transformTask(task);
    }
    async remove(id) {
        const task = await this.findOne(id);
        await this.tasksRepository.remove(task);
    }
    async getProgress() {
        const tasks = await this.tasksRepository.find();
        const total = tasks.length;
        const completed = tasks.filter(t => t.status === task_entity_1.TaskStatus.COMPLETED).length;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
        return { total, completed, percentage };
    }
    async seedTasks(tasks) {
        let created = 0;
        let skipped = 0;
        for (const taskData of tasks) {
            const existing = await this.tasksRepository.findOne({
                where: { nodeId: taskData.nodeId }
            });
            if (existing) {
                skipped++;
                continue;
            }
            const task = this.tasksRepository.create({
                ...taskData,
                subtasks: taskData.subtasks ? JSON.stringify(taskData.subtasks) : null,
                dependencies: taskData.dependencies ? JSON.stringify(taskData.dependencies) : null,
            });
            await this.tasksRepository.save(task);
            created++;
        }
        return { created, skipped };
    }
    async seedAllLevelTasks() {
        const existingTasks = await this.tasksRepository.find({
            where: { nodeId: () => "nodeId LIKE 'Level%'" }
        });
        if (existingTasks.length > 0) {
            return {
                created: 0,
                skipped: existingTasks.length,
                message: `Tasks already exist in database (${existingTasks.length} Level tasks). Use POST /api/tasks/seed with task data to add new tasks.`
            };
        }
        return {
            created: 0,
            skipped: 0,
            message: 'No tasks in database. Please seed tasks using POST /api/tasks/seed with task data, or ensure tasks are seeded on first load.'
        };
    }
    transformTask(task) {
        let subtasks = [];
        let dependencies = [];
        try {
            if (task.subtasks === null || task.subtasks === undefined) {
                subtasks = [];
            }
            else if (typeof task.subtasks === 'string') {
                const trimmed = task.subtasks.trim();
                if (trimmed && trimmed !== 'null' && trimmed !== 'undefined' && trimmed !== '[object Object]') {
                    try {
                        subtasks = JSON.parse(trimmed);
                        if (!Array.isArray(subtasks)) {
                            subtasks = [];
                        }
                    }
                    catch (e) {
                        console.warn('Failed to parse subtasks JSON:', trimmed.substring(0, 50));
                        subtasks = [];
                    }
                }
                else {
                    subtasks = [];
                }
            }
            else if (Array.isArray(task.subtasks)) {
                subtasks = task.subtasks;
            }
            else {
                subtasks = [];
            }
        }
        catch (e) {
            console.error('Error parsing subtasks:', e, 'Value:', task.subtasks);
            subtasks = [];
        }
        try {
            if (task.dependencies === null || task.dependencies === undefined) {
                dependencies = [];
            }
            else if (typeof task.dependencies === 'string') {
                const trimmed = task.dependencies.trim();
                if (trimmed && trimmed !== 'null' && trimmed !== 'undefined' && trimmed !== '[object Object]') {
                    try {
                        dependencies = JSON.parse(trimmed);
                        if (!Array.isArray(dependencies)) {
                            dependencies = [];
                        }
                    }
                    catch (e) {
                        console.warn('Failed to parse dependencies JSON:', trimmed.substring(0, 50));
                        dependencies = [];
                    }
                }
                else {
                    dependencies = [];
                }
            }
            else if (Array.isArray(task.dependencies)) {
                dependencies = task.dependencies;
            }
            else {
                dependencies = [];
            }
        }
        catch (e) {
            console.error('Error parsing dependencies:', e, 'Value:', task.dependencies);
            dependencies = [];
        }
        return {
            id: task.id,
            nodeId: task.nodeId,
            title: task.title,
            description: task.description,
            status: task.status,
            notes: task.notes,
            estimatedHours: task.estimatedHours,
            actualHours: task.actualHours,
            subtasks,
            dependencies,
            priority: task.priority || null,
            category: task.category || null,
            isMissing: task.isMissing || false,
            createdAt: task.createdAt,
            updatedAt: task.updatedAt,
        };
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map