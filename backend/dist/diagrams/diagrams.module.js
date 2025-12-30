"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagramsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const diagrams_service_1 = require("./diagrams.service");
const diagrams_controller_1 = require("./diagrams.controller");
const nodes_service_1 = require("./nodes.service");
const nodes_controller_1 = require("./nodes.controller");
const diagram_entity_1 = require("./diagram.entity");
const node_entity_1 = require("./node.entity");
const edge_entity_1 = require("./edge.entity");
const task_entity_1 = require("../tasks/task.entity");
let DiagramsModule = class DiagramsModule {
};
exports.DiagramsModule = DiagramsModule;
exports.DiagramsModule = DiagramsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([diagram_entity_1.Diagram, node_entity_1.Node, edge_entity_1.Edge, task_entity_1.Task])],
        controllers: [diagrams_controller_1.DiagramsController, nodes_controller_1.NodesController],
        providers: [diagrams_service_1.DiagramsService, nodes_service_1.NodesService],
        exports: [diagrams_service_1.DiagramsService, nodes_service_1.NodesService],
    })
], DiagramsModule);
//# sourceMappingURL=diagrams.module.js.map