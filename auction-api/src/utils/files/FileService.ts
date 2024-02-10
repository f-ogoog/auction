import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { join, extname } from 'path';
import { resolve } from 'url';
import * as fs from 'fs';
import * as process from 'process';

@Injectable()
export class FileService {
  constructor () {
    const avatars = join(__dirname, 'static', 'avatars');
    const photos = join(__dirname, 'static', 'photos');

    this.createIfNotExist(avatars);
    this.createIfNotExist(photos);
  }

  async saveByHash (file: Express.Multer.File, directory: string) {
    const fileName = createHash('md5').update(file.buffer).digest('hex');
    const filePath = join(__dirname, 'static', directory, fileName + extname(file.originalname));

    await fs.promises.writeFile(filePath, file.buffer);

    return resolve(process.env.BASE_URL, join(directory, fileName + extname(file.originalname)));
  }

  getPhotosFromFiles (files?: Express.Multer.File[]) {
    const photoPromises  = files?.map((file) => this.saveByHash(file, 'photos')) || [];
    return Promise.all(photoPromises);
  }

  private createIfNotExist (path: string) {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
  }
}
