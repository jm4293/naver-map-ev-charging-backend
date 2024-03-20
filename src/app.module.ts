import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeocodingModule } from './modules/naver-mpas/geocoding/geocoding.module';
import { ConfigModule } from '@nestjs/config';
import { configModuleConfig, typeormMysqlConfig } from './config';
import { ChattingModule } from './modules/chatting/chatting.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleConfig),
    TypeOrmModule.forRootAsync(typeormMysqlConfig),
    GeocodingModule,
    ChattingModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
