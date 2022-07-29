import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExperimentDto } from './experiment.dto';
import { Experiment } from './experiment.entity';
import { ExperimentRepository } from './experiment.repository';

@Injectable()
export class ExperimentService {
  constructor(
    @InjectRepository(Experiment)
    private experimentRepository: ExperimentRepository
  ) {}

  create(experiment: ExperimentDto) {
    return this.experimentRepository.save(experiment)
  }

  findAll() {
    return this.experimentRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
  }

  findOne(id: number): Promise<Experiment> {
    return this.experimentRepository.findOneBy({ id, able: true })
  }

  update(id: number, experiment: ExperimentDto) {
    this.experimentRepository.update({ id }, experiment)
    return experiment
  }

  remove(id: number) {
    return this.experimentRepository.update({ id }, { able: false })
  }
}
