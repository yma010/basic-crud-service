import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getDatabaseConfig } from 'config/db.config';
import { CollectionsModule } from './collections/collections.module';
import { ListingsModule } from './listings/listings.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getDatabaseConfig,
      inject: [ConfigService],
    }),
    CollectionsModule,
    ListingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
