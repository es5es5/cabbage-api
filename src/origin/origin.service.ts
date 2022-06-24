import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OriginDto } from './origin.dto';
import { Origin } from './origin.entity';
import { OriginRepository } from './origin.repository';

@Injectable()
export class OriginService {
  constructor(
    @InjectRepository(Origin)
    private originRepository: OriginRepository
  ) {}

  create(origin: OriginDto) {
    return this.originRepository.save(origin)
  }

  findAll() {
    return this.originRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
  }

  findOne(id: number): Promise<OriginDto> {
    return this.originRepository.findOneBy({ id, able: true })
  }

  update(id: number, origin: OriginDto) {
    this.originRepository.update({ id }, origin)
    return origin
  }

  remove(id: number) {
    return this.originRepository.update({ id }, { able: false })
  }
}
