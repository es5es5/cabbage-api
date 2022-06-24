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

  create(bank: BankDto) {
    return this.bankRepository.save(bank)
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
