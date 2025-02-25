import { Module } from '@nestjs/common';
import { PlantesService } from './plantes.service';
import { PlantesController } from './plantes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PlantesController],
  providers: [PlantesService, PrismaService],
})
export class PlantesModule {}
