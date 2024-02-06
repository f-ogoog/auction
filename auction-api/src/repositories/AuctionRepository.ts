import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuctionRepository {
  constructor (
    private readonly prismaService: PrismaService,
  ) {}

  create (data: Prisma.AuctionUncheckedCreateInput) {
    return this.prismaService.auction.create({ data });
  }

  findById (id: string) {
    return this.prismaService.auction.findFirst({
      where: { id },
    });
  }

  deleteById (id: string) {
    return this.prismaService.auction.delete({
      where: { id },
    });
  }
}