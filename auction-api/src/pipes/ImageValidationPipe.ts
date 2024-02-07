import { Injectable, PipeTransform } from '@nestjs/common';
import { extname } from 'path';
import { InvalidExtensionException } from '../utils/exceptions/InvalidExtensionException';
import { TooLargeSizeException } from '../utils/exceptions/TooLargeSizeException';

const IMAGE_MAX_SIZE = 1048576;
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];

@Injectable()
export class ImageValidationPipe implements PipeTransform {
  transform (file: Express.Multer.File) {

    if (!file) return;

    const ext = extname(file.originalname);

    if (!IMAGE_EXTENSIONS.includes(ext)) {
      throw new InvalidExtensionException();
    }

    if (file.size > IMAGE_MAX_SIZE) {
      throw new TooLargeSizeException('1 MB');
    }

    return file;
  }
}
