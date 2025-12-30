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
exports.UpdateDiagramDto = void 0;
const class_validator_1 = require("class-validator");
class UpdateDiagramDto {
}
exports.UpdateDiagramDto = UpdateDiagramDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateDiagramDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateDiagramDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateDiagramDto.prototype, "customMermaidCode", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.nodes !== undefined),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateDiagramDto.prototype, "nodes", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.edges !== undefined),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateDiagramDto.prototype, "edges", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((o) => o.metadata !== undefined),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateDiagramDto.prototype, "metadata", void 0);
//# sourceMappingURL=update-diagram.dto.js.map