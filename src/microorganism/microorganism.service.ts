import { Injectable } from '@nestjs/common'
import { CreateMicroorganismDto } from './dto/create-microorganism.dto'
import { UpdateMicroorganismDto } from './dto/update-microorganism.dto'

@Injectable()
export class MicroorganismService {
  create(createMicroorganismDto: CreateMicroorganismDto) {
    // return 'This action adds a new microorganism'
    return createMicroorganismDto
  }

  findAll() {
    return `This action returns all microorganism`
  }

  findOne(id: number) {
    return `This action returns a #${id} microorganism`
  }

  update(id: number, updateMicroorganismDto: UpdateMicroorganismDto) {
    // return `This action updates a #${id} microorganism`
    return updateMicroorganismDto
  }

  remove(id: number) {
    return `This action removes a #${id} microorganism`
  }
}
