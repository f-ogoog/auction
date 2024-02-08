import { Module } from '@nestjs/common';
import { PrismaService } from '../services/PrismaService';
import { UserRepository } from '../repositories/UserRepository';
import { AuctionRepository } from '../repositories/AuctionRepository';
import { LotRepository } from '../repositories/LotRepository';

@Module({
  providers: [
    PrismaService,
    UserRepository,
    AuctionRepository,
    LotRepository,
  ],
  exports: [
    PrismaService,
    UserRepository,
    AuctionRepository,
    LotRepository,
  ],
})
export class PrismaModule {}