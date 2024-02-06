import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
    username: string;

  @IsNotEmpty()
  @IsEmail()
    email: string;

  @IsNotEmpty()
  @IsString()
    password: string;

  @IsNotEmpty()
  @IsString()
    firstName: string;

  @IsNotEmpty()
  @IsString()
    lastName: string;

  @IsOptional()
  @IsString()
    middleName?: string;
}
