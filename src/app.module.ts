import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeocodingModule } from './modules/naver-mpas/geocoding/geocoding.module';
import { ConfigModule } from '@nestjs/config';
import { ChattingModule } from './modules/chatting/chatting.module';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configModuleConfig, typeormMysqlConfig } from './config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleConfig),
    TypeOrmModule.forRootAsync(typeormMysqlConfig),
    GeocodingModule,
    ChattingModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
