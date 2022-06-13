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
    return this.originRepository.findBy({ able: true })
  }

  findOne(id: string): Promise<OriginDto> {
    return this.originRepository.findOneBy({ id, able: true })
  }

  update(id: string, origin: OriginDto) {
    this.originRepository.update({ id }, origin)
    return origin
  }

  remove(id: string) {
    return this.originRepository.update({ id }, {
      able: false
    })
  }
}
