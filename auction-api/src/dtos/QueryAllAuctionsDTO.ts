import { QueryAllDTO } from './QueryAllDTO';
import { Category } from '@prisma/client';
import { IsArray, IsEnum, IsIn, IsNumberString, IsOptional } from 'class-validator';

export class QueryAllAuctionsDTO extends QueryAllDTO {
  @IsOptional()
  @IsArray()
  @IsEnum(Category, { each: true })
    categories?: Category[];

  @IsOptional()
  @IsNumberString()
    minPrice?: number;

  @IsOptional()
  @IsIn(['name'])
    sort?: 'name';
}