import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Microorganism } from './microorganism.entity'

@Injectable()
export class MicroorganismService {
  constructor(
    @InjectRepository(Microorganism)
    private microorganismRepository: Repository<Microorganism>
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
    // return `This action updates a #${id} microorganism`
    this.microorganismRepository.update({ id }, updateMicroorganismDto)
    return updateMicroorganismDto
  }

  remove(id: string) {
    return this.microorganismRepository.update({ id }, {
      able: false
    })
  }
}
