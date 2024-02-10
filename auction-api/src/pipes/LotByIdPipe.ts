import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../utils/exceptions/InvalidEntityIdException';
import { LotRepository } from '../repositories/LotRepository';

@Injectable()
export class LotByIdPipe implements PipeTransform<string, Promise<string>> {
  constructor (
    private readonly lotRepository: LotRepository,
  ) {}

  async transform (lotId: string): Promise<string> {
    const lot = await this.lotRepository.findById(lotId);
    if (!lot) {
      throw new InvalidEntityIdException('Lot');
    }

    return lotId;
  }
}
