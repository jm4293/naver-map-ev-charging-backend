import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthSignUpRepository } from './repository';
import { AuthSignUpEntity } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthSignUpEntity])],
  providers: [AuthSignUpRepository],
  exports: [AuthSignUpRepository],
})
export class DataAccessModule {}
