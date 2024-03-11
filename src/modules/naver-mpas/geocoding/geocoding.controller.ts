import { Controller, Get } from '@nestjs/common';

@Controller('geocoding')
export class GeocodingController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Hello Geocoding!';
  }
}
