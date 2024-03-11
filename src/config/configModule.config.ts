import { ConfigModuleOptions } from '@nestjs/config';

export const configModuleConfig: ConfigModuleOptions = {
  envFilePath: '.naver-maps.env',
  isGlobal: true,
};
