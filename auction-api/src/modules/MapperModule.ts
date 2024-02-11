import { Module } from '@nestjs/common';
import { UserMapper } from '../mappers/UserMapper';
import { BetMapper } from '../mappers/BetMapper';
import { MessageMapper } from '../mappers/MessageMapper';

@Module({
  providers: [
    UserMapper,
    BetMapper,
    MessageMapper,
  ],
  exports: [
    UserMapper,
    BetMapper,
    MessageMapper,
  ],
})
export class MapperModule {}
