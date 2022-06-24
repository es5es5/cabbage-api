import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MicroorganismRepository } from './microorganism.repository'
import { Microorganism } from './microorganism.entity'
import { MicroorganismDto } from './microorganism.dto'

@Injectable()
export class MicroorganismService {
  constructor(
    @InjectRepository(Microorganism)
    private microorganismRepository: MicroorganismRepository
  ) {}

  create(microorganism: MicroorganismDto) {
    return this.microorganismRepository.save(microorganism)
  }

  findAll() {
    return this.microorganismRepository.findBy({ able: true })
  }

  findOne(id: string): Promise<MicroorganismDto> {
    return this.microorganismRepository.findOneBy({ id, able: true })
  }

  update(id: string, microorganism: MicroorganismDto) {
    this.microorganismRepository.update({ id }, microorganism)
    return microorganism
  }

  remove(id: string) {
    return this.microorganismRepository.update({ id }, { able: false })
  }
}
