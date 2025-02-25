import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantesModule } from './plantes/plantes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: "postgres",
        host: configService.getOrThrow<string>('DB_HOST'),
        port: +configService.getOrThrow<number>('DB_PORT', 5432),
        username: configService.getOrThrow<string>('DB_USERNAME'),
        password: configService.getOrThrow<string>('DB_PASSWORD'),
        database: configService.getOrThrow<string>('DB_NAME'),
        //entities: [], 
        autoLoadEntities: true, 
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PlantesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
