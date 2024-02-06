import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAuctionDTO {
  @IsNotEmpty()
  @IsString()
    name: string;

  @IsOptional()
  @IsString()
    description?: string;

  @IsOptional()
  @IsString()
    avatar?: string;
}