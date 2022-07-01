import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessRepository } from './bank.repository';
import { BusinessDto } from './business.dto';
import { Business } from './business.entity';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private businessRepository: BusinessRepository
  ) {}

  create(business: BusinessDto) {
    return this.businessRepository.save(business)
  }

  findAll() {
    return this.businessRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
  }

  findOne(id: number): Promise<Business> {
    return this.businessRepository.findOneBy({ id, able: true })
  }

  update(id: number, business: BusinessDto) {
    this.businessRepository.update({ id }, business)
    return business
  }

  remove(id: number) {
    return this.businessRepository.update({ id }, { able: false })
  }
}
