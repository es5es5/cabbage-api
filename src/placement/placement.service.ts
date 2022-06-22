import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlacementRepository } from './genus.repository';
import { PlacementDto } from './placement.dto';
import { Placement } from './placement.entity';

@Injectable()
export class PlacementService {
  constructor(
    @InjectRepository(Placement)
    private placementRepository: PlacementRepository
  ) {}

  create(placement: PlacementDto) {
    return this.placementRepository.save(placement)
  }

  findAll() {
    return this.placementRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
  }

  findOne(id: number): Promise<Placement> {
    return this.placementRepository.findOneBy({ id, able: true })
  }

  update(id: number, placement: PlacementDto) {
    this.placementRepository.update({ id }, placement)
    return placement
  }

  remove(id: number) {
    return this.placementRepository.update({ id }, {
      able: false
    })
  }
}
