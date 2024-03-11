import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeocodingModule } from './modules/naver-mpas/geocoding/geocoding.module';
import { ConfigModule } from '@nestjs/config';
import { configModuleConfig } from './config';

@Module({
  imports: [ConfigModule.forRoot(configModuleConfig), GeocodingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
