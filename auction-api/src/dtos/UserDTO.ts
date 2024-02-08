import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PartialType, PickType } from '@nestjs/swagger';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
    username: string;

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

export class UpdateUserDTO extends PartialType(
  PickType(CreateUserDTO, ['firstName', 'middleName', 'lastName'])
) {}
