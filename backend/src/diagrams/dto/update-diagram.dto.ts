import { IsString, IsOptional, ValidateIf } from 'class-validator'

export class UpdateDiagramDto {
  @IsString()
  @IsOptional()
  title?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsOptional()
  customMermaidCode?: string

  // Accept arrays or objects for nodes
  @ValidateIf((o) => o.nodes !== undefined)
  @IsOptional()
  nodes?: any

  // Accept arrays or objects for edges
  @ValidateIf((o) => o.edges !== undefined)
  @IsOptional()
  edges?: any

  // Accept any JSON-serializable value for metadata
  @ValidateIf((o) => o.metadata !== undefined)
  @IsOptional()
  metadata?: any
}

