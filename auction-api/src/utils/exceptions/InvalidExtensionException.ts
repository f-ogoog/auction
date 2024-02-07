import { UnsupportedMediaTypeException } from '@nestjs/common';

export class InvalidExtensionException extends UnsupportedMediaTypeException {
  constructor () {
    super('File extension is wrong');
  }
}
