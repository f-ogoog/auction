import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class MessageRepository {
  constructor (
    private readonly prismaService: PrismaService,
  ) {}

  private include = {
    user: true,
  };

  findMany (where: Prisma.MessageWhereInput, orderBy: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[]) {
    return this.prismaService.message.findMany({
      where,
      orderBy,
      include: this.include,
    });
  }

  create (data: Prisma.MessageUncheckedCreateInput) {
    return this.prismaService.message.create({
      data,
      include: this.include,
    });
  }
}
