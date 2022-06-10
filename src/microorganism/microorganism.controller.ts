import {
  Body, Controller, Delete, Get, Param, Post, Put
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { MicroorganismDto } from './microorganism.dto'
import { MicroorganismService } from './microorganism.service'

@Controller('microorganism')
@ApiTags('균종 (microorganism)')
export class MicroorganismController {
  constructor(private readonly microorganismService: MicroorganismService) {}

  @Post()
  create(@Body() microorganism: MicroorganismDto) {
    return this.microorganismService.create(microorganism)
  }

  @Get()
  findAll() {
    return this.microorganismService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.microorganismService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() microorganism: MicroorganismDto,
  ) {
    return this.microorganismService.update(id, microorganism)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.microorganismService.remove(id)
  }
}
