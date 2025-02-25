import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePlanteDto } from './dto/create-plante.dto';
import { UpdatePlanteDto } from './dto/update-plante.dto';
import { Plante } from '@prisma/client';

@Injectable()
export class PlantesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPlanteDto: CreatePlanteDto): Promise<Plante> {
    return await this.prisma.plante.create({
      data: createPlanteDto,
    });
  }

  async findAll(): Promise<Plante[]> {
    return await this.prisma.plante.findMany();
  }

  async findOne(id: number): Promise<Plante> {
    const plante = await this.prisma.plante.findUnique({
      where: { id },
    });
    if (!plante) {
      throw new NotFoundException(`Plante with ID ${id} not found`);
    }
    return plante;
  }

  async update(id: number, updatePlanteDto: UpdatePlanteDto): Promise<Plante> {
    const plante = await this.findOne(id);
    return await this.prisma.plante.update({
      where: { id },
      data: { ...plante, ...updatePlanteDto },
    });
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.prisma.plante.delete({
      where: { id },
    });
  }
}
