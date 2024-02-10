import { IsNotEmpty } from 'class-validator';

export class CreateMessageDTO {
  @IsNotEmpty()
    value: string;

  @IsNotEmpty()
    userId: string;
}