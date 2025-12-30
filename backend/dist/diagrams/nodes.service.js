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
exports.NodesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const node_entity_1 = require("./node.entity");
const task_entity_1 = require("../tasks/task.entity");
let NodesService = class NodesService {
    constructor(nodesRepository, tasksRepository) {
        this.nodesRepository = nodesRepository;
        this.tasksRepository = tasksRepository;
    }
    async create(nodeData) {
        if (nodeData.taskNodeId) {
            const task = await this.tasksRepository.findOne({
                where: { nodeId: nodeData.taskNodeId }
            });
            if (task) {
                nodeData.taskId = task.id;
            }
        }
        const node = this.nodesRepository.create(nodeData);
        return this.nodesRepository.save(node);
    }
    async findAll() {
        return this.nodesRepository.find({
            relations: ['diagram', 'task'],
            order: { createdAt: 'DESC' },
        });
    }
    async findByDiagramId(diagramId) {
        return this.nodesRepository.find({
            where: { diagramId },
            relations: ['task'],
            order: { createdAt: 'ASC' },
        });
    }
    async findByNodeId(nodeId) {
        return this.nodesRepository.find({
            where: { nodeId },
            relations: ['diagram', 'task'],
        });
    }
    async findOne(id) {
        const node = await this.nodesRepository.findOne({
            where: { id },
            relations: ['diagram', 'task'],
        });
        if (!node) {
            throw new common_1.NotFoundException(`Node with ID ${id} not found`);
        }
        return node;
    }
    async update(id, updateData) {
        const node = await this.findOne(id);
        if (updateData.taskNodeId) {
            const task = await this.tasksRepository.findOne({
                where: { nodeId: updateData.taskNodeId }
            });
            if (task) {
                updateData.taskId = task.id;
            }
        }
        Object.assign(node, updateData);
        return this.nodesRepository.save(node);
    }
    async remove(id) {
        const node = await this.findOne(id);
        await this.nodesRepository.remove(node);
    }
    async bulkCreate(nodes) {
        const taskNodeIds = [...new Set(nodes.map(n => n.taskNodeId).filter(Boolean))];
        const tasks = await this.tasksRepository.find({
            where: taskNodeIds.map(nodeId => ({ nodeId }))
        });
        const taskMap = new Map(tasks.map(t => [t.nodeId, t.id]));
        nodes.forEach(node => {
            if (node.taskNodeId && taskMap.has(node.taskNodeId)) {
                node.taskId = taskMap.get(node.taskNodeId);
            }
        });
        const createdNodes = this.nodesRepository.create(nodes);
        return this.nodesRepository.save(createdNodes);
    }
    async removeByDiagramId(diagramId) {
        await this.nodesRepository.delete({ diagramId });
    }
};
exports.NodesService = NodesService;
exports.NodesService = NodesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(node_entity_1.Node)),
    __param(1, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], NodesService);
//# sourceMappingURL=nodes.service.js.map