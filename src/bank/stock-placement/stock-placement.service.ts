import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockPlacementRepository } from './genus.repository';
import { StockPlacement } from './stock-placement.entity';
import { StockPlacementDto } from './stock-placemnet.dto';

@Injectable()
export class StockPlacementService {
  constructor(
    @InjectRepository(StockPlacement)
    private stockPlacementRepository: StockPlacementRepository
  ) {}

  create(stockPlacement: StockPlacementDto) {
    return this.stockPlacementRepository.save(stockPlacement)
  }

  findAll() {
    return this.stockPlacementRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
  }

  findOne(id: string): Promise<StockPlacement> {
    return this.stockPlacementRepository.findOneBy({ id, able: true })
  }

  update(id: string, stockPlacement: StockPlacementDto) {
    this.stockPlacementRepository.update({ id }, stockPlacement)
    return stockPlacement
  }

  remove(id: string) {
    return this.stockPlacementRepository.update({ id }, { able: false })
  }
}
