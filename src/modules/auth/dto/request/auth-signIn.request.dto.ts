import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthSignInRequestDto {
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
  password: string;
}
