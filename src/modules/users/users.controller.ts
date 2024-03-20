import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersSignUpRequestDto } from './dto/request';
import { UsersSignUpResponseDto } from './dto/response';
import { validate } from 'class-validator';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async signUp(@Body() requestBody: UsersSignUpRequestDto): Promise<UsersSignUpResponseDto> {
    console.log('requestBody:', requestBody);
    // 유효성 검사 수행
    const errors = await validate(requestBody);

    console.log('errors', errors);

    if (errors.length > 0) {
      // 유효성 검사 오류가 발생한 경우 클라이언트로 오류 응답을 전송
      const errorMessages = errors.map((error) => Object.values(error.constraints)).flat();
      throw new HttpException({ message: '유효성 검사 오류', errors: errorMessages }, HttpStatus.BAD_REQUEST);
    }

    // 유효성 검사를 통과한 경우 서비스 메소드 호출
    return this.usersService.signUp(requestBody);
  }
}
