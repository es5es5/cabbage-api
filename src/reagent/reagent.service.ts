import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReagentDto } from './reagent.dto';
import { Reagent } from './reagent.entity';
import { ReagentRepository } from './reagent.repository';

@Injectable()
export class ReagentService {
  constructor(
    @InjectRepository(Reagent)
    private reagentRepository: ReagentRepository
  ) {}

  create(reagent: ReagentDto) {
    return this.reagentRepository.save(reagent)
  }

  findAll() {
    return this.reagentRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
  }

  findOne(id: number): Promise<Reagent> {
    return this.reagentRepository.findOneBy({ id, able: true })
  }

  update(id: number, reagent: ReagentDto) {
    this.reagentRepository.update({ id }, reagent)
    return reagent
  }

  remove(id: number) {
    return this.reagentRepository.update({ id }, { able: false })
  }
}
