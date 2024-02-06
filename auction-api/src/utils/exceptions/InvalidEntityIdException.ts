import { BadRequestException } from '@nestjs/common';

export class InvalidEntityIdException extends BadRequestException {
  constructor (entity: string) {
    super(`${entity} with such id is not found`);
  }
}