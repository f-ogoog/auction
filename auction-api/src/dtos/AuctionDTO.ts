import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { State, Category } from '@prisma/client';
import { Type } from 'class-transformer';

export class CreateAuctionDTO {
  @IsNotEmpty()
  @IsString()
    name: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  @Min(5)
    maxSlots: number;

  @IsNotEmpty()
  @IsEnum(Category)
    category: Category;

  @IsOptional()
  @IsString()
    description?: string;
}

export class UpdateAuctionDTO extends PartialType(CreateAuctionDTO) {
  @IsOptional()
  @IsEnum(State)
    state?: State;
}