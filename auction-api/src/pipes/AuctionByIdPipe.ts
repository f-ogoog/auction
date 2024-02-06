import { Injectable, PipeTransform } from '@nestjs/common';
import { AuctionRepository } from '../repositories/AuctionRepository';
import { InvalidEntityIdException } from '../utils/exceptions/InvalidEntityIdException';

@Injectable()
export class AuctionByIdPipe implements PipeTransform<string, Promise<string>> {
  constructor (
    private readonly auctionRepository: AuctionRepository,
  ) {}

  async transform (auctionId: string): Promise<string> {
    const auction = await this.auctionRepository.findById(auctionId);
    if (!auction) {
      throw new InvalidEntityIdException('Auction');
    }

    return auctionId;
  }
}