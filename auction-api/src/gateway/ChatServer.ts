import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { GatewayService } from './GatewayService';
import { CreateMessageDTO } from '../dtos/CreateMessageDTO';
import { MessageMapper } from '../mappers/MessageMapper';

@WebSocketGateway({
  namespace: 'chat',
  cors: '*',
})
export class ChatServer implements OnModuleInit {
  @WebSocketServer()
    server: Server;

  constructor (
    private readonly gatewayService: GatewayService,
    private readonly messageMapper: MessageMapper,
  ) {}

  onModuleInit () {
    this.server.on('connection', async (socket: Socket) => {
      this.gatewayService.server = this.server;
      const auctionId = socket.handshake.query.auctionId as string;
      socket.join(auctionId);

      const messages = await this.gatewayService.getAllMessages(auctionId);
      const mappedMessages = this.messageMapper.getMessages(messages);
      this.server.to(auctionId).emit('allMessages', mappedMessages);
    });
  }

  @SubscribeMessage('newMessage')
  async createMessage (
    client,
    data: CreateMessageDTO,
  ) {
    const auctionId = client.handshake.query.auctionId;

    const message = await this.gatewayService.createMessage(data, auctionId);
    const mappedMessage = this.messageMapper.getMessage(message);
    this.server.to(auctionId).emit('newMessage', mappedMessage);
  }
}
