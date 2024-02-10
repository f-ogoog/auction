import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../services/PrismaService';

@Injectable()
export class LotRepository {
  constructor (
    private readonly prismaService: PrismaService,
  ) {}

  create (data: Prisma.LotUncheckedCreateInput) {
    return this.prismaService.lot.create({ data });
  }

  find (where: Prisma.LotWhereInput, orderBy?: Prisma.LotOrderByWithRelationInput | Prisma.LotOrderByWithRelationInput[]) {
    return this.prismaService.lot.findFirst({
      where,
      orderBy,
    })
  }

  findById (id: string) {
    return this.prismaService.lot.findFirst({
      where: { id },
    });
  }

  updateById (id: string, data: Prisma.LotUncheckedUpdateInput) {
    return this.prismaService.lot.update({
      where: { id },
      data,
    });
  }

  deleteById (id: string) {
    return this.prismaService.lot.delete({
      where: { id },
    });
  }
}
