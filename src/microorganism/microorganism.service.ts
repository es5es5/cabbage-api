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
    // return 'This action adds a new microorganism'
    return createMicroorganismDto
  }

  findAll() {
    return this.microorganismRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} microorganism`
  }

  update(id: number, updateMicroorganismDto: Microorganism) {
    // return `This action updates a #${id} microorganism`
    return updateMicroorganismDto
  }

  remove(id: number) {
    return `This action removes a #${id} microorganism`
  }
}
