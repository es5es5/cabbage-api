import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ScheduleDto } from './schedule.dto';
import { Schedule } from './schedule.entity';
import { ScheduleRepository } from './schedule.repository';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private placementRepository: ScheduleRepository
  ) {}

  create(placement: ScheduleDto) {
    return this.placementRepository.save(placement)
  }

  findAll() {
    return this.placementRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
  }

  findOne(id: string): Promise<Schedule> {
    return this.placementRepository.findOneBy({ id, able: true })
  }

  update(id: string, placement: ScheduleDto) {
    this.placementRepository.update({ id }, placement)
    return placement
  }

  remove(id: string) {
    return this.placementRepository.update({ id }, {
      able: false
    })
  }
}
