import { ForbiddenException } from '@nestjs/common';

export class OpeningNotAllowedException extends ForbiddenException {
  constructor (reason: string = '') {
    super(`Opening is not allowed. ${reason}`);
  }
}
