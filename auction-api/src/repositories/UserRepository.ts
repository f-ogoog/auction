import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor (
    private readonly prismaService: PrismaService,
  ) {}

  create (data: Prisma.UserUncheckedCreateInput) {
    return this.prismaService.user.create({ data });
  }

  find (where: Prisma.UserWhereInput) {
    return this.prismaService.user.findFirst({ where });
  }

  findById (id: string) {
    return this.prismaService.user.findFirst({
      where: { id },
    });
  }

  updateById (id: string, data: Prisma.UserUncheckedUpdateInput) {
    return this.prismaService.user.update({
      where: { id },
      data,
    });
  }

  deleteById (id: string) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
