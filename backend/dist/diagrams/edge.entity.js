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
exports.Edge = void 0;
const typeorm_1 = require("typeorm");
const diagram_entity_1 = require("./diagram.entity");
const node_entity_1 = require("./node.entity");
let Edge = class Edge {
};
exports.Edge = Edge;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Edge.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Edge.prototype, "sourceNodeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Edge.prototype, "targetNodeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Edge.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: 'directed' }),
    __metadata("design:type", String)
], Edge.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Edge.prototype, "style", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Edge.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => diagram_entity_1.Diagram, diagram => diagram.edges, { nullable: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'diagramId' }),
    __metadata("design:type", diagram_entity_1.Diagram)
], Edge.prototype, "diagram", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 36, nullable: true }),
    __metadata("design:type", String)
], Edge.prototype, "diagramId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => node_entity_1.Node, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'sourceNodeEntityId' }),
    __metadata("design:type", node_entity_1.Node)
], Edge.prototype, "sourceNode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 36, nullable: true }),
    __metadata("design:type", String)
], Edge.prototype, "sourceNodeEntityId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => node_entity_1.Node, { nullable: true, onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'targetNodeEntityId' }),
    __metadata("design:type", node_entity_1.Node)
], Edge.prototype, "targetNode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 36, nullable: true }),
    __metadata("design:type", String)
], Edge.prototype, "targetNodeEntityId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Edge.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Edge.prototype, "updatedAt", void 0);
exports.Edge = Edge = __decorate([
    (0, typeorm_1.Entity)('edges')
], Edge);
//# sourceMappingURL=edge.entity.js.map