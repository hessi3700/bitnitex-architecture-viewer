import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Query } from '@nestjs/common'
import { DiagramsService } from './diagrams.service'
import { CreateDiagramDto } from './dto/create-diagram.dto'
import { UpdateDiagramDto } from './dto/update-diagram.dto'

@Controller('api/diagrams')
export class DiagramsController {
  constructor(private readonly diagramsService: DiagramsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDiagramDto: CreateDiagramDto) {
    return this.diagramsService.create(createDiagramDto)
  }

  @Get()
  findAll() {
    return this.diagramsService.findAll()
  }

  @Get('diagram-id/:diagramId')
  findByDiagramId(@Param('diagramId') diagramId: string) {
    return this.diagramsService.findByDiagramId(diagramId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagramsService.findOne(id)
  }

  @Patch('diagram-id/:diagramId')
  async updateByDiagramId(@Param('diagramId') diagramId: string, @Body() updateDiagramDto: UpdateDiagramDto) {
    try {
      return await this.diagramsService.updateByDiagramId(diagramId, updateDiagramDto)
    } catch (error) {
      console.error('Error in updateByDiagramId controller:', error)
      throw error
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiagramDto: UpdateDiagramDto) {
    return this.diagramsService.update(id, updateDiagramDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.diagramsService.remove(id)
  }

  @Post('seed')
  @HttpCode(HttpStatus.CREATED)
  seedDiagrams(@Body() diagrams: CreateDiagramDto[]) {
    return this.diagramsService.seedDiagrams(diagrams)
  }
}

