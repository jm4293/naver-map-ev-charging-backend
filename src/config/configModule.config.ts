import { ConfigModuleOptions } from '@nestjs/config';

export const configModuleConfig: ConfigModuleOptions = {
  envFilePath: ['.env.naver-maps', '.env.typeorm-mysql'],
  isGlobal: true,
};
