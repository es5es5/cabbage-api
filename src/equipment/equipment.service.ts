import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EquipmentDto } from './equipment.dto';
import { Equipment } from './equipment.entity';
import { EquipmentRepository } from './equipment.repository';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    private equipmentRepository: EquipmentRepository
  ) {}

  create(equipment: EquipmentDto) {
    return this.equipmentRepository.save(equipment)
  }

  findAll() {
    return this.equipmentRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
  }

  findOne(id: number): Promise<Equipment> {
    return this.equipmentRepository.findOneBy({ id, able: true })
  }

  update(id: number, equipment: EquipmentDto) {
    this.equipmentRepository.update({ id }, equipment)
    return equipment
  }

  remove(id: number) {
    return this.equipmentRepository.update({ id }, { able: false })
  }
}
