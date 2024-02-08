import { Module } from '@nestjs/common';
import { FileService } from './FileService';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ImageValidationPipe } from '../../pipes/ImageValidationPipe';
import { ImagesValidationPipe } from '../../pipes/ImagesValidationPipe';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'static'),
    }),
  ],
  providers: [FileService, ImageValidationPipe, ImagesValidationPipe],
  exports: [FileService, ImageValidationPipe, ImagesValidationPipe],
})
export class FileModule {}