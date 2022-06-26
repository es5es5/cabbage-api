import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StudyTopicDto } from './study_topic.dto';
import { StudyTopicService } from './study_topic.service';

@ApiTags('연구 주제 (StudyTopic)')
@Controller('study-topic')
export class StudyTopicController {
  constructor(private readonly studyTopicService: StudyTopicService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  create(@Req() reqeust, @Body() studyTopic: StudyTopicDto) {
    studyTopic.writerId = reqeust.user.userId
    return this.studyTopicService.create(studyTopic);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findAll() {
    return this.studyTopicService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findOne(@Param('id') id: string) {
    return this.studyTopicService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  update(@Param('id') id: string, @Body() studyTopic: StudyTopicDto) {
    return this.studyTopicService.update(+id, studyTopic);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  remove(@Param('id') id: string) {
    return this.studyTopicService.remove(+id);
  }
}
