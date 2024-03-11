import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeocodingModule } from './modules/naver-mpas/geocoding/geocoding.module';

@Module({
  imports: [GeocodingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
