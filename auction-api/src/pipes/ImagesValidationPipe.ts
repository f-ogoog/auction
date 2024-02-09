import { Injectable, PipeTransform } from '@nestjs/common';
import { ImageValidationPipe } from './ImageValidationPipe';

@Injectable()
export class ImagesValidationPipe implements PipeTransform<Express.Multer.File[], Express.Multer.File[]> {
  constructor (
    private readonly imageValidationPipe: ImageValidationPipe,
  ) {}

  transform (files: Express.Multer.File[]): Express.Multer.File[] {
    for (const file of files || []) {
      this.imageValidationPipe.transform(file);
    }

    return files;
  }
}