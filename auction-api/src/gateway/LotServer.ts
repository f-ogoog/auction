import {
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { GatewayService } from './GatewayService';
import { CreateBetDTO } from '../dtos/CreateBetDTO';
import { BetMapper } from '../mappers/BetMapper';
import {UserMapper} from "../mappers/UserMapper";

@WebSocketGateway({
  namespace: '/lot',
  cors: '*',
})
export class LotServer implements OnModuleInit, OnGatewayDisconnect  {

  @WebSocketServer()
    server: Server;

  constructor (
    private readonly gatewayService: GatewayService,
    private readonly betMapper: BetMapper,
    private readonly userMapper: UserMapper,
  ) {}

  onModuleInit () {
    this.server.on('connection', async (socket: Socket) => {
      this.gatewayService.server = this.server;
      const auctionId = socket.handshake.query.auctionId as string;
      const userId = socket.handshake.query.userId as string;
      socket.join(auctionId);

      const room = await this.gatewayService.getRoom(auctionId);
      const { users } = await this.gatewayService.getActiveUsers(room.id);
      const mappedUsers = this.userMapper.getUsers(users);
      const newUser = await this.gatewayService.connectNewUser(room.id, userId);
      const mappedUser = this.userMapper.getUser(newUser);

      this.server.to(socket.id).emit('allUsers', mappedUsers);
      this.server.to(auctionId).emit('newUser', mappedUser);

      const { bets, ...lot } = await this.gatewayService.connectionToLot(auctionId);

      this.server.to(socket.id).emit('currentLot', lot);

      const mappedBets = this.betMapper.getBets(bets);
      this.server.to(socket.id).emit('allBets', mappedBets);
    });
  }

  async handleDisconnect (socket) {
    const auctionId = socket.handshake.query.auctionId as string;
    const userId = socket.handshake.query.userId as string;

    const room = await this.gatewayService.getRoom(auctionId);
    await this.gatewayService.disconnectUser(room.id, userId);


    this.server.to(auctionId).emit('deletedUser', userId);
  }

  @SubscribeMessage('newBet')
  async onNewBet (
    client,
    data: CreateBetDTO,
  ) {
    const auctionId = client.handshake.query.auctionId;
    const userId = client.handshake.query.auctionId;

    const bet = await this.gatewayService.createBet(data, userId, auctionId);
    const mappedBet = this.betMapper.getBet(bet);
    this.server.to(auctionId).emit('newBet', { time: 60, bet: mappedBet });
  }
}
