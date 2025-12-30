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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diagram = void 0;
const typeorm_1 = require("typeorm");
const node_entity_1 = require("./node.entity");
const edge_entity_1 = require("./edge.entity");
let Diagram = class Diagram {
};
exports.Diagram = Diagram;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Diagram.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Diagram.prototype, "diagramId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Diagram.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Diagram.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Diagram.prototype, "mermaidCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Diagram.prototype, "customMermaidCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Diagram.prototype, "nodes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Diagram.prototype, "edges", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Diagram.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => node_entity_1.Node, node => node.diagram, { cascade: true }),
    __metadata("design:type", Array)
], Diagram.prototype, "nodeEntities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => edge_entity_1.Edge, edge => edge.diagram, { cascade: true }),
    __metadata("design:type", Array)
], Diagram.prototype, "edgeEntities", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Diagram.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Diagram.prototype, "updatedAt", void 0);
exports.Diagram = Diagram = __decorate([
    (0, typeorm_1.Entity)('diagrams')
], Diagram);
//# sourceMappingURL=diagram.entity.js.map