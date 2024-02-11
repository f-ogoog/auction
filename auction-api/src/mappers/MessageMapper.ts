import { Injectable } from '@nestjs/common';
import { Message, User } from '@prisma/client';
import { UserMapper } from './UserMapper';

@Injectable()
export class MessageMapper {
  constructor (
    private readonly userMapper: UserMapper,
  ) {}

  getMessages (messages: (Message & { user: User })[]) {
    return messages.map((message) => this.getMessage(message));
  }

  getMessage (message: Message & { user: User }) {
    return {
      value: message.value,
      user: this.userMapper.getUser(message.user),
    };
  }
}
