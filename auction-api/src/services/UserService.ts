import { Injectable } from '@nestjs/common';
import { FileService } from '../utils/files/FileService';
import { UserRepository } from '../repositories/UserRepository';
import { UpdateUserDTO } from '../dtos/UserDTO';

@Injectable()
export class UserService {
  constructor (
    private readonly fileService: FileService,
    private readonly userRepository: UserRepository,
  ) {}

  findById (userId: string) {
    return this.userRepository.findById(userId);
  }

  async updateById (userId: string, body: UpdateUserDTO, file: Express.Multer.File) {
    const avatar = file && await this.fileService.saveByHash(file, 'avatars');

    return this.userRepository.updateById(userId, { ...body, avatar });
  }

  deleteById (userId: string) {
    return this.userRepository.deleteById(userId);
  }
}