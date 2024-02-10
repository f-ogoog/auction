import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBetDTO {
  @IsNotEmpty()
  @IsNumber()
    value: number;

  @IsNotEmpty()
    lotId: string;
}