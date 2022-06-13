import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OriginDto } from './origin.dto';
import { OriginService } from './origin.service';

@Controller('origin')
@ApiTags('Origin (origin)')
export class OriginController {
  constructor(private readonly originService: OriginService) {}

  @Post()
  create(@Body() createOriginDto: OriginDto) {
    return this.originService.create(createOriginDto);
  }

  @Get()
  findAll() {
    return this.originService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.originService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOriginDto: OriginDto) {
    return this.originService.update(id, updateOriginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.originService.remove(id);
  }
}
