import { Module } from '@nestjs/common';
import { PrismaModule } from './PrismaModule';
import { AuctionController } from '../controllers/AuctionController';
import { AuctionService } from '../services/AuctionService';
import { AuctionByIdPipe } from '../pipes/AuctionByIdPipe';
import { FileModule } from '../utils/files/FileModule';

@Module({
  imports: [PrismaModule, FileModule],
  controllers: [AuctionController],
  exports: [AuctionService, AuctionByIdPipe],
  providers: [AuctionService, AuctionByIdPipe],
})
export class AuctionModule {}