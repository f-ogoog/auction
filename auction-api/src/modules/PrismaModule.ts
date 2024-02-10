import { Module } from '@nestjs/common';
import { PrismaService } from '../services/PrismaService';
import { UserRepository } from '../repositories/UserRepository';
import { AuctionRepository } from '../repositories/AuctionRepository';
import { BetRepository } from '../repositories/BetRepository';
import { LotRepository } from '../repositories/LotRepository';
import { MessageRepository } from '../repositories/MessageRepository';
import { RoomRepository } from '../repositories/RoomRepository';

@Module({
  providers: [
    PrismaService,
    UserRepository,
    AuctionRepository,
    LotRepository,
    BetRepository,
    MessageRepository,
    RoomRepository,
  ],
  exports: [
    PrismaService,
    UserRepository,
    AuctionRepository,
    LotRepository,
    BetRepository,
    MessageRepository,
    RoomRepository,
  ],
})
export class PrismaModule {}
