import { Module } from '@nestjs/common';
import { PrismaService } from '../services/PrismaService';
import { UserRepository } from '../repositories/UserRepository';

@Module({
  providers: [PrismaService, UserRepository],
  exports: [
    UserRepository,
  ],
})
export class PrismaModule {}