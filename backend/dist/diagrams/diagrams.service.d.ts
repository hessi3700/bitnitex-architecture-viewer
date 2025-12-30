import { Repository } from 'typeorm';
import { Diagram } from './diagram.entity';
import { CreateDiagramDto } from './dto/create-diagram.dto';
import { UpdateDiagramDto } from './dto/update-diagram.dto';
export declare class DiagramsService {
    private diagramsRepository;
    constructor(diagramsRepository: Repository<Diagram>);
    create(createDiagramDto: CreateDiagramDto): Promise<Diagram>;
    findAll(): Promise<Diagram[]>;
    findOne(id: string): Promise<Diagram>;
    findByDiagramId(diagramId: string): Promise<Diagram | null>;
    update(id: string, updateDiagramDto: UpdateDiagramDto): Promise<Diagram>;
    updateByDiagramId(diagramId: string, updateDiagramDto: UpdateDiagramDto): Promise<Diagram>;
    remove(id: string): Promise<void>;
    seedDiagrams(diagrams: CreateDiagramDto[]): Promise<{
        created: number;
        skipped: number;
    }>;
}
