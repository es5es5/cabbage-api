import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BankDto } from './bank.dto';
import { Bank } from './bank.entity';
import { BankRepository } from './bank.repository';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private bankRepository: BankRepository
  ) {}

  async create(bank: BankDto) {
    const result = await this.bankRepository.save(bank)
    // 22-식품-0001
    result.code = `${new Date().getFullYear().toString().substring(2)}-${result.category}-${result.id.toString().padStart(4, '0')}`
    return this.update(result.id, result)
  }

  findAll() {
    // return this.bankRepository.findBy({ able: true })
    return this.bankRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
  }

  findOne(id: number): Promise<Bank> {
    return this.bankRepository.findOneBy({ id, able: true })
  }

  update(id: number, bank: BankDto) {
    this.bankRepository.update({ id }, bank)
    return bank
  }

  remove(id: number) {
    return this.bankRepository.update({ id }, { able: false })
  }
}
