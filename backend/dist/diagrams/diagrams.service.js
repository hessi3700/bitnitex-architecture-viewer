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
exports.DiagramsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const diagram_entity_1 = require("./diagram.entity");
let DiagramsService = class DiagramsService {
    constructor(diagramsRepository) {
        this.diagramsRepository = diagramsRepository;
    }
    async create(createDiagramDto) {
        const diagram = this.diagramsRepository.create(createDiagramDto);
        return this.diagramsRepository.save(diagram);
    }
    async findAll() {
        return this.diagramsRepository.find({
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const diagram = await this.diagramsRepository.findOne({
            where: { id },
            relations: ['nodeEntities', 'nodeEntities.task', 'edgeEntities']
        });
        if (!diagram) {
            throw new common_1.NotFoundException(`Diagram with ID ${id} not found`);
        }
        return diagram;
    }
    async findByDiagramId(diagramId) {
        return this.diagramsRepository.findOne({
            where: { diagramId },
            relations: ['nodeEntities', 'nodeEntities.task', 'edgeEntities']
        });
    }
    async update(id, updateDiagramDto) {
        const diagram = await this.findOne(id);
        Object.assign(diagram, updateDiagramDto);
        return this.diagramsRepository.save(diagram);
    }
    async updateByDiagramId(diagramId, updateDiagramDto) {
        try {
            let diagram = await this.findByDiagramId(diagramId);
            if (!diagram) {
                diagram = this.diagramsRepository.create({
                    diagramId,
                    title: updateDiagramDto.title || diagramId,
                    mermaidCode: '',
                    ...updateDiagramDto,
                });
            }
            else {
                Object.assign(diagram, updateDiagramDto);
            }
            if (diagram.nodes && typeof diagram.nodes !== 'object') {
                console.error('Invalid nodes format:', typeof diagram.nodes, diagram.nodes);
                throw new Error('Nodes must be a valid JSON object or array');
            }
            if (diagram.edges && typeof diagram.edges !== 'object') {
                console.error('Invalid edges format:', typeof diagram.edges, diagram.edges);
                throw new Error('Edges must be a valid JSON object or array');
            }
            return await this.diagramsRepository.save(diagram);
        }
        catch (error) {
            console.error('Error updating diagram by diagramId:', error);
            throw error;
        }
    }
    async remove(id) {
        const diagram = await this.findOne(id);
        await this.diagramsRepository.remove(diagram);
    }
    async seedDiagrams(diagrams) {
        let created = 0;
        let skipped = 0;
        for (const diagramData of diagrams) {
            const existing = await this.findByDiagramId(diagramData.diagramId);
            if (existing) {
                skipped++;
                continue;
            }
            const diagram = this.diagramsRepository.create(diagramData);
            await this.diagramsRepository.save(diagram);
            created++;
        }
        return { created, skipped };
    }
};
exports.DiagramsService = DiagramsService;
exports.DiagramsService = DiagramsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(diagram_entity_1.Diagram)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DiagramsService);
//# sourceMappingURL=diagrams.service.js.map