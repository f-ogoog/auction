import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoomRepository {
  constructor (
    private readonly prismaService: PrismaService,
  ) {}

  private include = {
    users: true,
  }

  find (where: Prisma.RoomWhereInput) {
    return this.prismaService.room.findFirst({
      where,
      include: this.include,
    });
  }

  create (data: Prisma.RoomUncheckedCreateInput) {
    return this.prismaService.room.create({
      data,
      include: this.include,
    })
  }

  updateById (id: string, data: Prisma.RoomUncheckedUpdateInput) {
    return this.prismaService.room.update({
      where: {
        id,
      },
      data,
      include: this.include,
    })
  }

  async getOrCreate (data) {
    const room = await this.find(data);
    if (room) return room;
    return this.create(data);
  }
}