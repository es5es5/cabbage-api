import { Module } from '@nestjs/common';
import { StudyTopicService } from './study_topic.service';
import { StudyTopicController } from './study_topic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyTopic } from './study_topic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudyTopic])],
  controllers: [StudyTopicController],
  providers: [StudyTopicService]
})
export class StudyTopicModule {}
