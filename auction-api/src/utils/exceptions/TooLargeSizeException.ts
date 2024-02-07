import { PayloadTooLargeException } from '@nestjs/common';

export class TooLargeSizeException extends PayloadTooLargeException {
  constructor (size: string) {
    super(`The file size exceeds ${size}`);
  }
}
