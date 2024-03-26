import { Injectable } from '@nestjs/common';
import { AuthSignUpRequestDto } from './dto/request';
import { AuthSignUpResponseDto } from './dto/response';
import { AuthSignUpRepository } from '../../data-access/repository';
import { AuthSignUpEntity } from '../../data-access/entity';

@Injectable()
export class AuthService {
  constructor(private readonly authSignUpRepository: AuthSignUpRepository) {}
  async signUp(requestBody: AuthSignUpRequestDto): Promise<AuthSignUpResponseDto> {
    console.log('requestBody22', requestBody);

    await this.authSignUpRepository.save(requestBody);

    return AuthSignUpResponseDto.success(requestBody);
  }
}
