import { Module } from '@nestjs/common';
import { PrismaService } from '../services/PrismaService';
import { UserRepository } from '../repositories/UserRepository';
import { AuctionRepository } from '../repositories/AuctionRepository';

@Module({
  providers: [PrismaService, UserRepository, AuctionRepository],
  exports: [
    PrismaService,
    UserRepository,
    AuctionRepository,
  ],
})
export class PrismaModule {}