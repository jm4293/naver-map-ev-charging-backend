import { IsEmail, IsNotEmpty, IsOptional, MinLength, validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class AuthSignUpRequestDto {
  @ApiProperty({
    example: 'abc123@gmail.com',
    description: '이메일',
    required: true,
  })
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

  @ApiProperty({
    description: '비밀번호',
    required: true,
  })
  @IsNotEmpty({
    message: '비밀번호를 입력해주세요.',
  })
  @MinLength(8, {
    message: '비밀번호는 8자 이상이어야 합니다.',
  })
  password: string;

  // @ApiProperty({
  //   description: '비밀번호 확인',
  //   required: true,
  // })
  // @IsNotEmpty({
  //   message: '비밀번호 확인을 입력해주세요.',
  // })
  // @MinLength(8, {
  //   message: '비밀번호는 8자 이상이어야 합니다.',
  // })
  // passwordConfirm: string;

  @ApiProperty({
    example: '홍길동',
    description: '이름',
    required: true,
  })
  @IsNotEmpty({
    message: '이름을 입력해주세요.',
  })
  name: string;

  @ApiProperty({
    example: '010-1234-5678',
    description: '휴대폰 번호',
    required: true,
  })
  @IsNotEmpty({
    message: '휴대폰 번호를 입력해주세요.',
  })
  phone: string;

  @ApiProperty({
    description: '우편번호',
    required: false,
  })
  @IsOptional()
  zipcode: string | null;

  @ApiProperty({
    description: '주소',
    required: false,
  })
  @IsOptional()
  address: string | null;

  @ApiProperty({
    description: '상세주소',
    required: false,
  })
  @IsOptional()
  addressDetail: string | null;
}
