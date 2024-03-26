import { Injectable } from '@nestjs/common';
import { AuthSignUpRequestDto } from './dto/request';
import { AuthSignUpResponseDto } from './dto/response';
import { AuthSignUpRepository } from '../../data-access/repository';
import { AuthSignUpEntity } from '../../data-access/entity';

@Injectable()
export class AuthService {
  constructor(private readonly authSignUpRepository: AuthSignUpRepository) {}

  async existsEmail(email: string): Promise<{ exists: boolean }> {
    const isExistEmail = await this.authSignUpRepository.existsByEmail(email);

    return { exists: isExistEmail };
  }

  async signUp(requestBody: AuthSignUpRequestDto): Promise<AuthSignUpResponseDto> {
    await this.authSignUpRepository.save(requestBody);

    return AuthSignUpResponseDto.success(requestBody);
  }
}
