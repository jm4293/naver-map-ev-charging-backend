import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { validate } from 'class-validator';
import { AuthSignUpRequestDto } from './dto/request';
import { AuthSignUpResponseDto } from './dto/response';
import { AuthExistsEmailRequestDto } from './dto/request/auth-existsEmail.request.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '회원가입 이메일 중복확인' })
  @Post('/exists-email')
  async existsEmail(@Body() requestBody: AuthExistsEmailRequestDto): Promise<{ exists: boolean }> {
    return await this.authService.existsEmail(requestBody.email);
  }

  @ApiOperation({ summary: '회원가입' })
  @Post('/signup')
  async signUp(@Body() requestBody: AuthSignUpRequestDto): Promise<AuthSignUpResponseDto> {
    const errors = await validate(requestBody);

    if (errors.length > 0) {
      const errorMessages = errors.map((el) => Object.values(el.constraints)).flat();
      throw new HttpException({ message: '유효성 검사 오류', errors: errorMessages }, HttpStatus.BAD_REQUEST);
    }

    return this.authService.signUp(requestBody);
  }
}
