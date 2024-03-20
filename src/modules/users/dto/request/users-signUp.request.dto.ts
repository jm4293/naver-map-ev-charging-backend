import { IsEmail, IsNotEmpty, IsOptional, MinLength, validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

export class UsersSignUpRequestDto {
  @IsEmail(
    {},
    {
      message: '이메일 형식이 아닙니다.',
    },
  )
  @IsNotEmpty({
    message: '이메일을 입력해주세요.',
  })
  email: string;

  @IsNotEmpty({
    message: '비밀번호를 입력해주세요.',
  })
  @MinLength(8, {
    message: '비밀번호는 8자 이상이어야 합니다.',
  })
  password: string;

  @IsNotEmpty({
    message: '비밀번호 확인을 입력해주세요.',
  })
  @MinLength(8, {
    message: '비밀번호는 8자 이상이어야 합니다.',
  })
  passwordConfirm: string;

  @IsNotEmpty({
    message: '이름을 입력해주세요.',
  })
  name: string;

  @IsNotEmpty({
    message: '휴대폰 번호를 입력해주세요.',
  })
  phoneNumber: string;

  @IsOptional()
  address: string | null;

  @IsOptional()
  detailAddress: string | null;
}

// const userData = {
//   email: 'test',
//   password: '1234',
//   passwordConfirm: '1234',
//   name: 'test',
//   phoneNumber: '01012341234',
//   address: 'test',
//   detailAddress: 'test',
// };
//
// const userDto = plainToClass(UsersSignUpRequestDto, userData);
//
// validate(userDto).then((errors) => {
//   if (errors.length > 0) {
//     const errorMessages = errors.map((error) => Object.values(error.constraints)).flat();
//     console.log(errorMessages);
//   } else {
//     console.log('유효성 검사 통과!');
//   }
// });
