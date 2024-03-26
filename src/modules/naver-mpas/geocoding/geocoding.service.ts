import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GeocodingService {
  constructor(private configService: ConfigService) {}

  async getGeocoding(searchKeyword: string) {
    return axios
      .get(`https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${searchKeyword}`, {
        headers: {
          'X-NCP-APIGW-API-KEY-ID': this.configService.get<string>('NAVER_CLIENT_ID'),
          'X-NCP-APIGW-API-KEY': this.configService.get<string>('NAVER_CLIENT_SECRET'),
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // console.log('error', error);
      });
  }
}
