import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UsersSignUpRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @MinLength(8)
  passwordConfirm: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  phoneNumber: string;

  @IsOptional()
  address: string | null;

  @IsOptional()
  detailAddress: string | null;
}
