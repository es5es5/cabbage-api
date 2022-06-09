import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { MicroorganismRepository } from './microorganism.repository'
import { Microorganism } from './model/microorganism.entity'

@Injectable()
export class MicroorganismService {
  constructor(
    @InjectRepository(Microorganism)
    private microorganismRepository: MicroorganismRepository
  ) {}

  create(createMicroorganismDto: Microorganism) {
    return this.microorganismRepository.save(createMicroorganismDto)
  }

  findAll() {
    return this.microorganismRepository.findBy({ able: true })
  }

  findOne(id: string): Promise<Microorganism> {
    return this.microorganismRepository.findOneBy({ id })
  }

  update(id: string, updateMicroorganismDto: Microorganism) {
    this.microorganismRepository.update({ id }, updateMicroorganismDto)
    return updateMicroorganismDto
  }

  remove(id: string) {
    return this.microorganismRepository.update({ id }, {
      able: false
    })
  }
}
