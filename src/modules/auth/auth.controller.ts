import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';
import { validate } from 'class-validator';
import { AuthSignUpRequestDto } from './dto/request';
import { AuthSignUpResponseDto } from './dto/response';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
