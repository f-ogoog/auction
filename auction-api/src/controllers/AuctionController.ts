import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AuctionService } from '../services/AuctionService';
import { JwtAuthGuard } from '../utils/security/guards/JWTAuthGuard';
import { CreatorAuctionGuard } from '../utils/security/guards/CreatorAuctionGuard';
import { AuctionByIdPipe } from '../pipes/AuctionByIdPipe';
import { ImageValidationPipe } from '../pipes/ImageValidationPipe';
import { CreateAuctionDTO, UpdateAuctionDTO } from '../dtos/AuctionDTO';
import { RequestWithUser } from '../utils/types';
import { CreateLotDTO, UpdateLotDTO } from '../dtos/LotDTO';
import { ImagesValidationPipe } from '../pipes/ImagesValidationPipe';
import { LotByIdPipe } from '../pipes/LotByIdPipe';
import { QueryAllAuctionsDTO } from '../dtos/QueryAllAuctionsDTO';

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

  @Get()
  async getAll (@Query() query: QueryAllAuctionsDTO) {
    const { data, pagination } = await this.auctionService.getAll(query);

    return {
      auctions: Object.values(data).filter((item) => typeof item === 'object'),
      pagination,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('my')
  getUserAuctions (@Req() req: RequestWithUser) {
    return this.auctionService.getAuctionsByUserId(req.user.id);
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
    @Param('auctionId', AuctionByIdPipe) auctionId: string,
  ) {
    return this.auctionService.deleteById(auctionId);
  }

  @UseGuards(JwtAuthGuard, CreatorAuctionGuard)
  @UseInterceptors(FilesInterceptor('photos'))
  @Post('/:auctionId/lots')
  createLot (
    @Param('auctionId', AuctionByIdPipe) auctionId: string,
    @Body() body: CreateLotDTO,
    @UploadedFiles(ImagesValidationPipe) photos: Array<Express.Multer.File>,
  ) {
    return this.auctionService.createLot(auctionId, body, photos);
  }

  @UseGuards(JwtAuthGuard, CreatorAuctionGuard)
  @UseInterceptors(FilesInterceptor('photos'))
  @Patch('/:auctionId/lots/:lotId')
  updateLot (
    @Param('auctionId', AuctionByIdPipe) auctionId: string,
    @Param('lotId', LotByIdPipe) lotId: string,
    @Body() body: UpdateLotDTO,
    @UploadedFiles(ImagesValidationPipe) photos: Array<Express.Multer.File>,
  ) {
    return this.auctionService.updateLot(auctionId, lotId, body, photos);
  }

  @UseGuards(JwtAuthGuard, CreatorAuctionGuard)
  @Delete('/:auctionId/lots/:lotId/photos')
  deletePhotoByUrl (
    @Param('auctionId', AuctionByIdPipe) auctionId: string,
    @Param('lotId', LotByIdPipe) lotId: string,
    @Query('url') url: string,
  ) {
    return this.auctionService.deletePhotoByUrl(auctionId, lotId, url);
  }

  @UseGuards(JwtAuthGuard, CreatorAuctionGuard)
  @Delete('/:auctionId/lots/:lotId')
  deleteLot (
    @Param('auctionId', AuctionByIdPipe) auctionId: string,
    @Param('lotId', LotByIdPipe) lotId: string,
  ) {
    return this.auctionService.deleteLot(auctionId, lotId);
  }
}
