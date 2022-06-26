import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StudyTopicDto } from './study_topic.dto';
import { StudyTopicService } from './study_topic.service';

@ApiTags('연구 주제 (StudyTopic)')
@Controller('study-topic')
export class StudyTopicController {
  constructor(private readonly studyTopicService: StudyTopicService) {}

  @Post()
  create(@Body() studyTopic: StudyTopicDto) {
    return this.studyTopicService.create(studyTopic);
  }

  @Get()
  findAll() {
    return this.studyTopicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studyTopicService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() studyTopic: StudyTopicDto) {
    return this.studyTopicService.update(+id, studyTopic);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studyTopicService.remove(+id);
  }
}
