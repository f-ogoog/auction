import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuctionRepository {
  constructor (
    private readonly prismaService: PrismaService,
  ) {}

  private readonly include = {
    lots: true,
  };

  create (data: Prisma.AuctionUncheckedCreateInput) {
    return this.prismaService.auction.create({
      data,
      include: this.include,
    });
  }

  findById (id: string) {
    return this.prismaService.auction.findFirst({
      where: { id },
      include: this.include,
    });
  }

  async findMany (args: Prisma.AuctionFindManyArgs) {
    return this.prismaService.auction.findMany({
      ...args,
      include: this.include,
    });
  }

  updateById (id: string, data: Prisma.AuctionUncheckedUpdateInput) {
    return this.prismaService.auction.update({
      where: { id },
      data,
      include: this.include,
    });
  }

  deleteById (id: string) {
    return this.prismaService.auction.delete({
      where: { id },
      include: this.include,
    });
  }

  count (data: Prisma.AuctionCountArgs): Promise<number> {
    return this.prismaService.auction.count(data);
  }
}
