import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanteDto } from './dto/create-plante.dto';
import { UpdatePlanteDto } from './dto/update-plante.dto';
import { Plante } from './entities/plante.entity';

@Injectable()
export class PlantesService {
  constructor(
    @InjectRepository(Plante)
    private plantesRepository: Repository<Plante>,
  ) {}

  async create(createPlanteDto: CreatePlanteDto): Promise<Plante> {
    const plante = this.plantesRepository.create(createPlanteDto);
    return await this.plantesRepository.save(plante);
  }

  async findAll(): Promise<Plante[]> {
    return await this.plantesRepository.find();
  }

  async findOne(id: number): Promise<Plante> {
    const plante = await this.plantesRepository.findOneBy({id});
    if (!plante) {
      throw new NotFoundException(`Plante with ID ${id} not found`);
    }
    return plante;
  }

  async update(id: number, updatePlanteDto: UpdatePlanteDto): Promise<Plante> {
    const plante = await this.findOne(id);
    Object.assign(plante, updatePlanteDto);
    return await this.plantesRepository.save(plante);
  }

  async remove(id: number): Promise<void> {
    const plante = await this.findOne(id);
    await this.plantesRepository.remove(plante);
  }
}
