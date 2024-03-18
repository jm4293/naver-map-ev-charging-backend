import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersSignUpRequestDto } from './dto/request';
import { UsersSignUpResponseDto } from './dto/response';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  signUp(@Body() requestBody: UsersSignUpRequestDto): Promise<UsersSignUpResponseDto> {
    console.log('requestBody:', requestBody);

    return this.usersService.signUp(requestBody);
  }
}
