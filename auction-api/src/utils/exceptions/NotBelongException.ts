import { ForbiddenException } from '@nestjs/common';

export class NotBelongException extends ForbiddenException {
  constructor (itemType: string, belongingType: string) {
    super(`The specified ${itemType} does not belong to the provided ${belongingType}`);
  }
}