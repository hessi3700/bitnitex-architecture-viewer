import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common'
import { NodesService } from './nodes.service'

@Controller('api/nodes')
export class NodesController {
  constructor(private readonly nodesService: NodesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() nodeData: any) {
    return this.nodesService.create(nodeData)
  }

  @Post('bulk')
  @HttpCode(HttpStatus.CREATED)
  bulkCreate(@Body() nodes: any[]) {
    return this.nodesService.bulkCreate(nodes)
  }

  @Get()
  findAll(@Query('diagramId') diagramId?: string, @Query('nodeId') nodeId?: string) {
    if (diagramId) {
      return this.nodesService.findByDiagramId(diagramId)
    }
    if (nodeId) {
      return this.nodesService.findByNodeId(nodeId)
    }
    return this.nodesService.findAll()
  }

  @Get('diagram/:diagramId')
  findByDiagramId(@Param('diagramId') diagramId: string) {
    return this.nodesService.findByDiagramId(diagramId)
  }

  @Get('node/:nodeId')
  findByNodeId(@Param('nodeId') nodeId: string) {
    return this.nodesService.findByNodeId(nodeId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nodesService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    return this.nodesService.update(id, updateData)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.nodesService.remove(id)
  }

  @Delete('diagram/:diagramId')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeByDiagramId(@Param('diagramId') diagramId: string) {
    return this.nodesService.removeByDiagramId(diagramId)
  }
}



