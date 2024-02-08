import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuctionService } from '../services/AuctionService';
import { JwtAuthGuard } from '../utils/security/guards/JWTAuthGuard';
import { CreatorAuctionGuard } from '../utils/security/guards/CreatorAuctionGuard';
import { AuctionByIdPipe } from '../pipes/AuctionByIdPipe';
import { ImageValidationPipe } from '../pipes/ImageValidationPipe';
import { CreateAuctionDTO, UpdateAuctionDTO } from '../dtos/AuctionDTO';
import { RequestWithUser } from '../utils/types';

@Controller('/auctions')
export class AuctionController {
  constructor (
    private readonly auctionService: AuctionService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('avatar'))
  @Post()
  create (
    @Req() req: RequestWithUser,
    @Body() body: CreateAuctionDTO,
    @UploadedFile(ImageValidationPipe) file: Express.Multer.File,
  ) {
    return this.auctionService.create(req.user.id, body, file);
  }

  @Get('/:auctionId')
  findById (
    @Param('auctionId', AuctionByIdPipe) auctionId: string,
  ) {
    return this.auctionService.findById(auctionId);
  }

  @UseGuards(JwtAuthGuard, CreatorAuctionGuard)
  @UseInterceptors(FileInterceptor('avatar'))
  @Patch('/:auctionId')
  updateById (
    @Param('auctionId', AuctionByIdPipe) auctionId: string,
    @Body() body: UpdateAuctionDTO,
    @UploadedFile(ImageValidationPipe) file: Express.Multer.File,
  ) {
    return this.auctionService.updateById(auctionId, body, file);
  }

  @UseGuards(JwtAuthGuard, CreatorAuctionGuard)
  @Delete('/:auctionId')
  delete (
    @Param('auctionId', AuctionByIdPipe) auctionId: string
  ) {
    return this.auctionService.deleteById(auctionId);
  }
}
