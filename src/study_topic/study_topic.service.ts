import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudyTopicDto } from './study_topic.dto';
import { StudyTopic } from './study_topic.entity';
import { StudyTopicRepository } from './study_topic.repository';

@Injectable()
export class StudyTopicService {
  constructor(
    @InjectRepository(StudyTopic)
    private studyTopicRepository: StudyTopicRepository
  ) {}

  create(studyTopic: StudyTopicDto) {
    return this.studyTopicRepository.save(studyTopic)
  }

  findAll() {
    return this.studyTopicRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
  }

  findOne(id: number): Promise<StudyTopic> {
    return this.studyTopicRepository.findOneBy({ id, able: true })
  }

  update(id: number, studyTopic: StudyTopicDto) {
    this.studyTopicRepository.update({ id }, studyTopic)
    return studyTopic
  }

  remove(id: number) {
    return this.studyTopicRepository.update({ id }, { able: false })
  }
}
