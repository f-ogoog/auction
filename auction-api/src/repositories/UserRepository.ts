import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor (
    private readonly prismaService: PrismaService,
  ) {}

  find (where: Prisma.UserWhereInput) {
    return this.prismaService.user.findFirst({ where });
  }

  findById (id: string) {
    return this.prismaService.user.findFirst({
      where: {
        id,
      },
    });
  }

  create (data: Prisma.UserUncheckedCreateInput) {
    return this.prismaService.user.create({ data });
  }
}