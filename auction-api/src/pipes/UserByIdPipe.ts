import { Injectable, PipeTransform } from '@nestjs/common';
import { UserRepository } from '../repositories/UserRepository';
import { InvalidEntityIdException } from '../utils/exceptions/InvalidEntityIdException';

@Injectable()
export class UserByIdPipe implements PipeTransform<string, Promise<string>> {
  constructor (
    private readonly userRepository: UserRepository,
  ) {}

  async transform (userId: string): Promise<string> {
    const auction = await this.userRepository.findById(userId);
    if (!auction) {
      throw new InvalidEntityIdException('User');
    }

    return userId;
  }
}
