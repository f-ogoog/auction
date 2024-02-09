import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateLotDTO {
  @IsNotEmpty()
  @IsString()
    name: string;

  @IsNotEmpty()
  @IsNumber({
    maxDecimalPlaces: 0,
  })
  @Min(0)
    minPrice: number;

  @IsOptional()
  @IsString()
    description?: string;
}

export class UpdateLotDTO extends PartialType(CreateLotDTO) {}