import { ConfigModuleOptions } from '@nestjs/config';

export const configModuleConfig: ConfigModuleOptions = {
  envFilePath: ['.env.typeorm-mysql', '.env.typeorm-mysql'],
  isGlobal: true,
};
