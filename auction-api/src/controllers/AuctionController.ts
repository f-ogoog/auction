import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuctionService } from '../services/AuctionService';
import { CreateAuctionDTO } from '../dtos/CreateAuctionDTO';
import { JwtAuthGuard } from '../utils/security/guards/JWTAuthGuard';
import { AuctionByIdPipe } from '../pipes/AuctionByIdPipe';
import { CreatorAuctionGuard } from '../utils/security/guards/CreatorAuctionGuard';

@Controller('/auctions')
export class AuctionController {
  constructor (
    private readonly auctionService: AuctionService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create (
    @Req() req,
    @Body() body: CreateAuctionDTO,
  ) {
    return this.auctionService.create(req.user.id, body);
  }

  @Get('/:auctionId')
  findById (
    @Param('auctionId', AuctionByIdPipe) auctionId: string,
  ) {
    return this.auctionService.findById(auctionId);
  }

  @UseGuards(JwtAuthGuard, CreatorAuctionGuard)
  @Delete('/:auctionId')
  delete (
    @Req() req,
    @Param('auctionId', AuctionByIdPipe) auctionId: string
  ) {
    return this.auctionService.deleteById(auctionId);
  }
}