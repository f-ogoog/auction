import { Module } from '@nestjs/common';
import { FileService } from './FileService';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'static'),
    }),
  ],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}