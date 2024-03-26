import { BadRequestException, ValidationPipeOptions } from '@nestjs/common';
import { ResponseCode, ResponseMessage } from '../types/enums';
import { ResponseDto } from '../types/classes/response.dto';

export const ValidationPipeConfig: ValidationPipeOptions = {
  dismissDefaultMessages: true,
  // exceptionFactory: () => {
  //   return new BadRequestException(new ResponseDto(ResponseCode.VALIDATION_FAIL, ResponseMessage.VALIDATION_FAIL));
  // },
  exceptionFactory: (errors) => {
    const errorMessages = Object.values(errors[0].constraints)[0];

    return new BadRequestException(
      new ResponseDto(ResponseCode.VALIDATION_FAIL, ResponseMessage.VALIDATION_FAIL, errorMessages),
    );
  },
};
