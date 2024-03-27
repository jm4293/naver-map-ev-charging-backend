import { ConfigModuleOptions } from '@nestjs/config';

export const configModuleConfig: ConfigModuleOptions = {
  envFilePath: ['.env.typeorm-mysql', '.env.naver-maps', '.env.jwt'],
  isGlobal: true,
};
