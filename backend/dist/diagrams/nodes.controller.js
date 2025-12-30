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
exports.NodesController = void 0;
const common_1 = require("@nestjs/common");
const nodes_service_1 = require("./nodes.service");
let NodesController = class NodesController {
    constructor(nodesService) {
        this.nodesService = nodesService;
    }
    create(nodeData) {
        return this.nodesService.create(nodeData);
    }
    bulkCreate(nodes) {
        return this.nodesService.bulkCreate(nodes);
    }
    findAll(diagramId, nodeId) {
        if (diagramId) {
            return this.nodesService.findByDiagramId(diagramId);
        }
        if (nodeId) {
            return this.nodesService.findByNodeId(nodeId);
        }
        return this.nodesService.findAll();
    }
    findByDiagramId(diagramId) {
        return this.nodesService.findByDiagramId(diagramId);
    }
    findByNodeId(nodeId) {
        return this.nodesService.findByNodeId(nodeId);
    }
    findOne(id) {
        return this.nodesService.findOne(id);
    }
    update(id, updateData) {
        return this.nodesService.update(id, updateData);
    }
    remove(id) {
        return this.nodesService.remove(id);
    }
    removeByDiagramId(diagramId) {
        return this.nodesService.removeByDiagramId(diagramId);
    }
};
exports.NodesController = NodesController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NodesController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('bulk'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], NodesController.prototype, "bulkCreate", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('diagramId')),
    __param(1, (0, common_1.Query)('nodeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], NodesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('diagram/:diagramId'),
    __param(0, (0, common_1.Param)('diagramId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NodesController.prototype, "findByDiagramId", null);
__decorate([
    (0, common_1.Get)('node/:nodeId'),
    __param(0, (0, common_1.Param)('nodeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NodesController.prototype, "findByNodeId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NodesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], NodesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NodesController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('diagram/:diagramId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('diagramId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NodesController.prototype, "removeByDiagramId", null);
exports.NodesController = NodesController = __decorate([
    (0, common_1.Controller)('api/nodes'),
    __metadata("design:paramtypes", [nodes_service_1.NodesService])
], NodesController);
//# sourceMappingURL=nodes.controller.js.map