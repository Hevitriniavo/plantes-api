import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PlantesModule } from './plantes/plantes.module';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PlantesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
