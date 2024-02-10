import { Module } from '@nestjs/common';
import { LotServer } from './LotServer';
import { GatewayService } from './GatewayService';
import { ChatServer } from './ChatServer';
import { PrismaModule } from '../modules/PrismaModule';
import { MapperModule } from '../modules/MapperModule';
import { SchedulerRegistry } from '@nestjs/schedule';

@Module({
  providers: [
    LotServer,
    ChatServer,
    GatewayService,
    SchedulerRegistry,
  ],
  imports: [PrismaModule, MapperModule],
  exports: [LotServer, GatewayService],
})
export class GatewayModule {}