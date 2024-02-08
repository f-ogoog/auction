import { Injectable } from '@nestjs/common';
import { AuctionRepository } from '../repositories/AuctionRepository';
import { CreateAuctionDTO, UpdateAuctionDTO } from '../dtos/AuctionDTO';
import { OpeningNotAllowedException } from '../utils/exceptions/OpeningNotAllowedException';
import { State } from '@prisma/client';
import { FileService } from '../utils/files/FileService';

const MIN_LOTS = 5;

@Injectable()
export class AuctionService {
  constructor (
    private readonly auctionRepository: AuctionRepository,
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
}
