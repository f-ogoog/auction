import { BadRequestException } from '@nestjs/common';

export class AlreadyRegisteredException extends BadRequestException {
  constructor (field: string) {
    super(`User with such ${field} already registered`);
  }
}