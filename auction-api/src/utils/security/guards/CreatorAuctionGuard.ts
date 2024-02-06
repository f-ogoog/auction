import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuctionRepository } from '../../../repositories/AuctionRepository';

@Injectable()
export class CreatorAuctionGuard implements CanActivate {
  constructor (
    private readonly auctionRepository: AuctionRepository,
  ) {}

  async canActivate (
    context: ExecutionContext,
  ): Promise<boolean> {
    const { user, params: { auctionId } } = context.switchToHttp().getRequest();
    const auction = await this.auctionRepository.findById(auctionId);

    return auction.userId === user.id;
  }
}