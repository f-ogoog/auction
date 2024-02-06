import { HttpException, HttpStatus } from '@nestjs/common';

export class AlreadyRegisteredException extends HttpException {
  constructor (field: string) {
    super(`User with such ${field} already registered`, HttpStatus.BAD_REQUEST);
  }
}