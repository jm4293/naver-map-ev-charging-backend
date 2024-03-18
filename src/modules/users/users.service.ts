import { Injectable } from '@nestjs/common';
import { UsersSignUpRequestDto } from './dto/request';
import { UsersSignUpResponseDto } from './dto/response';

@Injectable()
export class UsersService {
  async signUp(requestBody: UsersSignUpRequestDto): Promise<UsersSignUpResponseDto> {
    console.log('requestBody:', requestBody);

    return UsersSignUpResponseDto.success(requestBody);
  }
}
