import { Module } from '@nestjs/common';
import { PlantesService } from './plantes.service';
import { PlantesController } from './plantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plante } from './entities/plante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plante])],
  controllers: [PlantesController],
  providers: [PlantesService],
})
export class PlantesModule {}
