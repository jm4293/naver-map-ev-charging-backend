import { ResponseDto } from '../../../../types/classes/response.dto';
import { ResponseCode, ResponseMessage } from '../../../../types/enums';
import { BadRequestException } from '@nestjs/common';

export class AuthSignInResponseDto extends ResponseDto {
  constructor(code: ResponseCode, message: ResponseMessage, data?: any) {
    super(code, message, data);
  }

  static success(data?: any) {
    return new AuthSignInResponseDto(ResponseCode.SUCCESS, ResponseMessage.SUCCESS, data);
  }

  static signInFail(data: string) {
    throw new BadRequestException(new ResponseDto(ResponseCode.SIGN_IN_FAIL, ResponseMessage.SIGN_IN_FAIL, data));
  }
}
