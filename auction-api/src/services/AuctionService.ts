import { Injectable } from '@nestjs/common';
import { CreateAuctionDTO } from '../dtos/CreateAuctionDTO';
import { AuctionRepository } from '../repositories/AuctionRepository';

@Injectable()
export class AuctionService {
  constructor (
    private readonly auctionRepository: AuctionRepository,
  ) {}

  create (userId: string, body: CreateAuctionDTO) {
    return this.auctionRepository.create({ userId, ...body });
  }

  findById (auctionId: string) {
    return this.auctionRepository.findById(auctionId);
  }

  deleteById (auctionId: string) {
    return this.auctionRepository.deleteById(auctionId);
  }
}