import { Injectable } from '@nestjs/common';
import { UserMapper } from './UserMapper';
import { Bet, User } from '@prisma/client';

@Injectable()
export class BetMapper {
  constructor (
    private readonly userMapper: UserMapper,
  ) {}

  getBets (bets: (Bet & { user: User })[]) {
    return bets.map((bet) => this.getBet(bet));
  }

  getBet (bet: Bet & { user: User }) {
    return {
      value: bet.value,
      user: this.userMapper.getUser(bet.user),
    };
  }
}
