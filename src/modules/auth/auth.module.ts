import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DataAccessModule } from '../../data-access/data-access.module';

@Module({
  imports: [DataAccessModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
