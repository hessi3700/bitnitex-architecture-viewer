import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DiagramsService } from './diagrams.service'
import { DiagramsController } from './diagrams.controller'
import { NodesService } from './nodes.service'
import { NodesController } from './nodes.controller'
import { Diagram } from './diagram.entity'
import { Node } from './node.entity'
import { Task } from '../tasks/task.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Diagram, Node, Task])],
  controllers: [DiagramsController, NodesController],
  providers: [DiagramsService, NodesService],
  exports: [DiagramsService, NodesService],
})
export class DiagramsModule {}

