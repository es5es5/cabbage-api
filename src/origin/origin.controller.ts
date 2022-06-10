import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { OriginDto } from './origin.dto';
import { OriginService } from './origin.service';

@Controller('origin')
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
    return this.originService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOriginDto: OriginDto) {
    return this.originService.update(+id, updateOriginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.originService.remove(+id);
  }
}
