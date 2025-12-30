import { DiagramsService } from './diagrams.service';
import { CreateDiagramDto } from './dto/create-diagram.dto';
import { UpdateDiagramDto } from './dto/update-diagram.dto';
export declare class DiagramsController {
    private readonly diagramsService;
    constructor(diagramsService: DiagramsService);
    create(createDiagramDto: CreateDiagramDto): Promise<import("./diagram.entity").Diagram>;
    findAll(): Promise<import("./diagram.entity").Diagram[]>;
    findByDiagramId(diagramId: string): Promise<import("./diagram.entity").Diagram>;
    findOne(id: string): Promise<import("./diagram.entity").Diagram>;
    updateByDiagramId(diagramId: string, updateDiagramDto: UpdateDiagramDto): Promise<import("./diagram.entity").Diagram>;
    update(id: string, updateDiagramDto: UpdateDiagramDto): Promise<import("./diagram.entity").Diagram>;
    remove(id: string): Promise<void>;
    seedDiagrams(diagrams: CreateDiagramDto[]): Promise<{
        created: number;
        skipped: number;
    }>;
}
