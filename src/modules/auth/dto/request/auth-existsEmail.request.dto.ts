import { ApiProperty } from '@nestjs/swagger';

export class AuthExistsEmailRequestDto {
  @ApiProperty({
    example: 'abc123@gmail.com',
    description: '이메일',
    required: true,
  })
  email: string;
}
