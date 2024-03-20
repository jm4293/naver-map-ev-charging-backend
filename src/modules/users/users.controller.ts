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

    const errors = await validate(requestBody);

    if (errors.length > 0) {
      const errorMessages = errors.map((error) => Object.values(error.constraints)).flat();
      throw new HttpException({ message: '유효성 검사 오류', errors: errorMessages }, HttpStatus.BAD_REQUEST);
    }

    return this.usersService.signUp(requestBody);
  }
}
