import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DataAccessModule } from '../../data-access/data-access.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtModuleConfig } from '../../config';

@Module({
  imports: [DataAccessModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
