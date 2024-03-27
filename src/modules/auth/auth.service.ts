import { Injectable } from '@nestjs/common';
import { AuthSignInRequestDto, AuthSignUpRequestDto } from './dto/request';
import { AuthSignInResponseDto, AuthSignUpResponseDto } from './dto/response';
import { UserRepository } from '../../data-access/repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async existsEmail(email: string): Promise<{ exists: boolean }> {
    const isExistEmail = await this.userRepository.existsByEmail(email);

    return { exists: isExistEmail };
  }

  async signUp(requestBody: AuthSignUpRequestDto): Promise<AuthSignUpResponseDto> {
    await this.userRepository.save(requestBody);

    return AuthSignUpResponseDto.success(requestBody);
  }

  async singIn(requestBody: AuthSignInRequestDto): Promise<AuthSignInResponseDto> {
    const { email, password } = requestBody;

    const userInfo = await this.userRepository.findByEmail(email);

    if (!userInfo) {
      throw AuthSignInResponseDto.signInFail('일치하는 이메일이 없습니다');
    }

    const isMatched = await bcrypt.compare(password, userInfo.password);

    if (!isMatched) {
      throw AuthSignInResponseDto.signInFail('비밀번호가 일치하지 않습니다');
    }

    const accessToken = await this.setAccessToken(requestBody.email);
    const refreshToken = await this.setRefreshToken(requestBody.email);

    return AuthSignInResponseDto.success({
      accessToken,
      refreshToken,
    });
  }

  async setAccessToken(requestBody: string): Promise<string> {
    const { email, name, phone } = await this.userRepository.findByEmail(requestBody);

    return this.jwtService.sign(
      {
        email,
        name,
        phone,
      },
      {
        secret: process.env.ACCESS_TOKEN_SECRET,
        expiresIn: process.env.ACCESS_TOKEN_LIFE,
      },
    );
  }

  async setRefreshToken(requestBody: string): Promise<string> {
    const { email, name, phone } = await this.userRepository.findByEmail(requestBody);

    return this.jwtService.sign(
      {
        email,
        name,
        phone,
      },
      {
        secret: process.env.REFRESH_TOKEN_SCRRET,
        expiresIn: process.env.REFRESH_TOKEN_LIFE,
      },
    );
  }
}
