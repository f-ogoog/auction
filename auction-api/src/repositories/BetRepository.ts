import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class BetRepository {
  constructor (
    private readonly prismaService: PrismaService,
  ) {}

  private include = {
    user: true,
  };

  findMany (where: Prisma.BetWhereInput, orderBy: Prisma.BetOrderByWithRelationInput | Prisma.BetOrderByWithRelationInput[]) {
    return this.prismaService.bet.findMany({
      where,
      orderBy,
      include: this.include,
    });
  }

  create (data: Prisma.BetUncheckedCreateInput) {
    return this.prismaService.bet.create({
      data,
      include: this.include,
    });
  }
}
