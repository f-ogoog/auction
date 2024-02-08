import { BadRequestException, Injectable } from '@nestjs/common';
import { AuctionRepository } from '../repositories/AuctionRepository';
import { CreateAuctionDTO, UpdateAuctionDTO } from '../dtos/AuctionDTO';
import { OpeningNotAllowedException } from '../utils/exceptions/OpeningNotAllowedException';
import { Prisma, State } from '@prisma/client';
import { FileService } from '../utils/files/FileService';
import { CreateLotDTO, UpdateLotDTO } from '../dtos/LotDTO';
import { LotRepository } from '../repositories/LotRepository';
import { NotBelongException } from '../utils/exceptions/NotBelongException';

const MIN_LOTS = 5;

@Injectable()
export class AuctionService {
  constructor (
    private readonly auctionRepository: AuctionRepository,
    private readonly lotRepository: LotRepository,
    private readonly fileService: FileService,
  ) {}

  async create (userId: string, body: CreateAuctionDTO, file: Express.Multer.File) {
    const avatar = file && await this.fileService.saveByHash(file, 'avatars');
    return this.auctionRepository.create({ userId, ...body, avatar });
  }

  findById (auctionId: string) {
    return this.auctionRepository.findById(auctionId);
  }

  async updateById (auctionId: string, body: UpdateAuctionDTO, file: Express.Multer.File) {
    if (body.state === State.OPENED) {
      const auction = await this.auctionRepository.findById(auctionId);

      if (auction.lots.length < MIN_LOTS) {
        throw new OpeningNotAllowedException(`The auction must have at least ${MIN_LOTS} lots`);
      }
    }

    const avatar = file && await this.fileService.saveByHash(file, 'avatars');

    return this.auctionRepository.updateById(auctionId, { ...body, avatar });
  }

  deleteById (auctionId: string) {
    return this.auctionRepository.deleteById(auctionId);
  }

  async createLot (auctionId: string, body: CreateLotDTO, files: Array<Express.Multer.File>) {
    await this.checkOverflow(auctionId, files.length);
    const photos = await this.fileService.getPhotosFromFiles(files);

    return this.lotRepository.create({ ...body, auctionId, photos });
  }

  async updateLot (auctionId: string, lotId: string, body: UpdateLotDTO, files: Express.Multer.File[]) {
    await this.checkBelonging(auctionId, lotId);
    await this.checkOverflow(auctionId, files.length);

    const updateData: Prisma.LotUncheckedUpdateInput = body;

    if (files.length) {
      updateData.photos = await this.fileService.getPhotosFromFiles(files);
    }

    return this.lotRepository.updateById(lotId, updateData);
  }

  async deletePhotoByUrl (auctionId: string, lotId: string, url: string) {
    await this.checkBelonging(auctionId, lotId);

    const lot = await this.lotRepository.findById(lotId);
    const photos = lot.photos.filter((photo) => photo !== url);

    return this.lotRepository.updateById(lotId, { photos });
  }

  async deleteLot (auctionId: string, lotId: string) {
    await this.checkBelonging(auctionId, lotId);

    return this.lotRepository.deleteById(lotId);
  }

  private async checkOverflow (auctionId: string, lots: number) {
    const auction = await this.auctionRepository.findById(auctionId);

    if (lots > auction.maxSlots) {
      throw new BadRequestException('Too many files provided');
    }
  }

  private async checkBelonging (auctionId: string, lotId: string) {
    const lot = await this.lotRepository.findById(lotId);

    if (lot.auctionId !== auctionId) {
      throw new NotBelongException('lot', 'auction');
    }
  }

}
