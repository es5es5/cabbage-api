import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenusDto } from './genus.dto';
import { Genus } from './genus.entity';
import { GenusRepository } from './genus.repository';

@Injectable()
export class GenusService {
  constructor(
    @InjectRepository(Genus)
    private genusRepository: GenusRepository
  ) {}

  create(genus: GenusDto) {
    return this.genusRepository.save(genus)
  }

  findAll() {
    return this.genusRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
  }

  findOne(id: number): Promise<Genus> {
    return this.genusRepository.findOneBy({ id, able: true })
  }

  update(id: number, genus: GenusDto) {
    this.genusRepository.update({ id }, genus)
    return genus
  }

  remove(id: number) {
    return this.genusRepository.update({ id }, { able: false })
  }
}
