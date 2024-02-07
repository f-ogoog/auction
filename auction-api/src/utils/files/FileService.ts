import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { join, extname } from 'path';
import { resolve } from 'url';
import * as fs from 'fs';
import * as process from 'process';

@Injectable()
export class FileService {
  constructor () {
    const staticDir = join(__dirname, 'static');
    const path = join(staticDir, 'avatars');

    this.createIfNotExist(staticDir);
    this.createIfNotExist(path);
  }

  async saveByHash (file: Express.Multer.File, directory: string) {
    const fileName = createHash('md5').update(file.buffer).digest('hex');
    const filePath = join(__dirname, 'static', directory, fileName + extname(file.originalname));

    await fs.promises.writeFile(filePath, file.buffer);

    return resolve(process.env.BASE_URL, join(directory, fileName + extname(file.originalname)));
  }

  private createIfNotExist (path: string) {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  }
}
