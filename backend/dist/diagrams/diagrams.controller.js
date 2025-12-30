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
exports.DiagramsController = void 0;
const common_1 = require("@nestjs/common");
const diagrams_service_1 = require("./diagrams.service");
const create_diagram_dto_1 = require("./dto/create-diagram.dto");
const update_diagram_dto_1 = require("./dto/update-diagram.dto");
let DiagramsController = class DiagramsController {
    constructor(diagramsService) {
        this.diagramsService = diagramsService;
    }
    create(createDiagramDto) {
        return this.diagramsService.create(createDiagramDto);
    }
    findAll() {
        return this.diagramsService.findAll();
    }
    findByDiagramId(diagramId) {
        return this.diagramsService.findByDiagramId(diagramId);
    }
    findOne(id) {
        return this.diagramsService.findOne(id);
    }
    async updateByDiagramId(diagramId, updateDiagramDto) {
        try {
            return await this.diagramsService.updateByDiagramId(diagramId, updateDiagramDto);
        }
        catch (error) {
            console.error('Error in updateByDiagramId controller:', error);
            throw error;
        }
    }
    update(id, updateDiagramDto) {
        return this.diagramsService.update(id, updateDiagramDto);
    }
    remove(id) {
        return this.diagramsService.remove(id);
    }
    seedDiagrams(diagrams) {
        return this.diagramsService.seedDiagrams(diagrams);
    }
};
exports.DiagramsController = DiagramsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_diagram_dto_1.CreateDiagramDto]),
    __metadata("design:returntype", void 0)
], DiagramsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiagramsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('diagram-id/:diagramId'),
    __param(0, (0, common_1.Param)('diagramId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiagramsController.prototype, "findByDiagramId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiagramsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('diagram-id/:diagramId'),
    __param(0, (0, common_1.Param)('diagramId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_diagram_dto_1.UpdateDiagramDto]),
    __metadata("design:returntype", Promise)
], DiagramsController.prototype, "updateByDiagramId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_diagram_dto_1.UpdateDiagramDto]),
    __metadata("design:returntype", void 0)
], DiagramsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiagramsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('seed'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], DiagramsController.prototype, "seedDiagrams", null);
exports.DiagramsController = DiagramsController = __decorate([
    (0, common_1.Controller)('api/diagrams'),
    __metadata("design:paramtypes", [diagrams_service_1.DiagramsService])
], DiagramsController);
//# sourceMappingURL=diagrams.controller.js.map