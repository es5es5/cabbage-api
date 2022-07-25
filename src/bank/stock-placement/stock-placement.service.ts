import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockPlacementRepository } from './stock-placement.repository';
import { StockPlacement } from './stock-placement.entity';
import { StockPlacementDto } from './stock-placemnet.dto';

@Injectable()
export class StockPlacementService {
  constructor(
    @InjectRepository(StockPlacement)
    private stockPlacementRepository: StockPlacementRepository
  ) {}

  create(bankId: number, writerId: number, stockPlacementList: Array<StockPlacementDto>) {
    stockPlacementList.forEach(stockPlacement => {
      stockPlacement.bankId = bankId
      stockPlacement.writerId = writerId
    })
    return this.stockPlacementRepository.save(stockPlacementList)
  }

  findAll(bankId: number) {
    return this.stockPlacementRepository.find({ where: { bankId, able: true }, order: { createtime: 'ASC' }})
  }

  findOne(bankId: number, id: string): Promise<StockPlacement> {
    return this.stockPlacementRepository.findOneBy({ bankId, id, able: true })
  }

  update(bankId: number, id: string, stockPlacement: StockPlacementDto) {
    this.stockPlacementRepository.update({ bankId, id }, stockPlacement)
    return stockPlacement
  }

  remove(bankId: number, id: string) {
    return this.stockPlacementRepository.update({ bankId, id }, { able: false })
  }
}
