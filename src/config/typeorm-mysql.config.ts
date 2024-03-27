import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthSignUpEntity } from '../data-access/entity';

export const typeormMysqlConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return {
      type: 'mysql',
      host: configService.get<string>('DATABASE_HOST'),
      port: parseInt(configService.get<string>('DATABASE_PORT'), 10),
      username: configService.get<string>('DATABASE_USERNAME'),
      password: configService.get<string>('DATABASE_PASSWORD'),
      database: configService.get<string>('DATABASE_NAME'),
      synchronize: false,
      entities: [AuthSignUpEntity],
    };
  },
};
