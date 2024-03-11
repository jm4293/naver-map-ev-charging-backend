import { Controller, Get, Query, Req } from '@nestjs/common';
import { GeocodingService } from './geocoding.service';

@Controller('geocoding')
export class GeocodingController {
  constructor(private readonly geocodingService: GeocodingService) {}

  @Get()
  getGeocoding(@Query() query: { searchKeyword: string }) {
    return this.geocodingService.getGeocoding(query.searchKeyword);
  }
}
