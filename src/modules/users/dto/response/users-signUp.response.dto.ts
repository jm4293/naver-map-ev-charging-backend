import { ResponseDto } from '../../../../types/classes/response.dto';
import { ResponseCode, ResponseMessage } from '../../../../types/enums';
import { BadRequestException } from '@nestjs/common';
import { UsersSignUpRequestDto } from '../request';

export class UsersSignUpResponseDto extends ResponseDto {
  constructor(code: ResponseCode, message: ResponseMessage, data?: any) {
    super(code, message, data);
  }

  static success(data?: UsersSignUpRequestDto) {
    return new UsersSignUpResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, data);
  }

  static duplicateEmail() {
    throw new BadRequestException(new ResponseDto(ResponseCode.DUPLICATE_EMAIL, ResponseMessage.DUPLICATE_EMAIL));
  }

  static duplicateNickname() {
    throw new BadRequestException(new ResponseDto(ResponseCode.DUPLICATE_NICKNAME, ResponseMessage.DUPLICATE_NICKNAME));
  }

  static duplicateTelNumber() {
    throw new BadRequestException(
      new ResponseDto(ResponseCode.DUPLICATE_TEL_NUMBER, ResponseMessage.DUPLICATE_TEL_NUMBER),
    );
  }
}
