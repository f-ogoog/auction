import { Injectable } from '@nestjs/common';
import { LotRepository } from '../repositories/LotRepository';
import { State } from '@prisma/client';
import { BetRepository } from '../repositories/BetRepository';
import { CreateBetDTO } from '../dtos/CreateBetDTO';
import { SchedulerRegistry } from '@nestjs/schedule';
import { Server } from 'socket.io';
import { AuctionRepository } from '../repositories/AuctionRepository';
import { MessageRepository } from '../repositories/MessageRepository';
import { CreateMessageDTO } from '../dtos/CreateMessageDTO';
import { RoomRepository } from '../repositories/RoomRepository';

@Injectable()
export class GatewayService {
  constructor (
    private readonly lotRepository: LotRepository,
    private readonly betRepository: BetRepository,
    private readonly schedulerRegistry: SchedulerRegistry,
    private readonly auctionRepository: AuctionRepository,
    private readonly messageRepository: MessageRepository,
    private readonly roomRepository: RoomRepository,
  ) {}

  server: Server;

  getRoom (auctionId: string) {
    return  this.roomRepository.getOrCreate({
      auctionId,
    });
  }

  getActiveUsers (roomId: string) {
    return this.roomRepository.find({
      id: roomId,
    });
  }

  async connectNewUser (roomId: string, userId: string) {
    const room = await this.roomRepository.updateById(roomId, {
      users: {
        connect: {
          id: userId,
        },
      },
    });

    return room.users.find((user) => user.id === userId);
  }

  async disconnectUser (roomId: string, userId: string) {
    await this.roomRepository.updateById(roomId, {
      users: {
        disconnect: {
          id: userId,
        },
      },
    });
  }

  async connectionToLot (auctionId: string) {
    const lot = await this.lotRepository.find({
      auctionId,
      state: State.OPENED,
    }, {
      minPrice: 'asc',
    });

    const bets = await this.betRepository.findMany({
      lotId: lot.id,
    }, {
      createdAt: 'desc',
    });


    const time = bets.length
      ? ((new Date()).getTime() - bets[0].createdAt.getTime()) / 1000
      : null;

    return { lot, time, bets };
  }

  createBet (data: CreateBetDTO, userId: string, auctionId: string) {
    const isTimeout = this.schedulerRegistry.doesExist('timeout', data.lotId);
    if (isTimeout) {
      this.schedulerRegistry.deleteTimeout(data.lotId);
    }

    const timeout = this.createTimeout(data.lotId, auctionId);
    this.schedulerRegistry.addTimeout(data.lotId, timeout);

    return this.betRepository.create({
      value: data.value,
      userId,
      lotId: data.lotId,
    });
  }

  createTimeout (lotId: string, auctionId: string) {
    return setTimeout(async () => {
      await this.lotRepository.updateById(lotId, {
        state: State.CLOSED,
      });

      const lot = await this.lotRepository.find({
        state: State.OPENED,
        auctionId,
      }, {
        minPrice: 'asc',
      });

      if (!lot) {
        await this.auctionRepository.updateById(auctionId, {
          state: State.CLOSED,
        });
        this.server.to(auctionId).emit('closed', 'Auction Is closed');
      } else {
        this.server.to(auctionId).emit('newLot', lot);
      }
    }, 60000);
  }

  getAllMessages (auctionId: string) {
    return this.messageRepository.findMany({
      auctionId,
    }, {
      createdAt: 'desc',
    });
  }

  createMessage (data: CreateMessageDTO, auctionId: string) {
    return this.messageRepository.create({
      ...data,
      auctionId,
    });
  }
}