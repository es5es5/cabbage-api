import {
  Body, Controller, Delete, Get, Param, Post, Put
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { MicroorganismService } from './microorganism.service'
import { Microorganism } from './model/microorganism.entity'

@Controller('microorganism')
@ApiTags('균종 (microorganism)')
export class MicroorganismController {
  constructor(private readonly microorganismService: MicroorganismService) {}

  @Post()
  create(@Body() microorganism: Microorganism) {
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
    @Body() microorganism: Microorganism,
  ) {
    return this.microorganismService.update(id, microorganism)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.microorganismService.remove(id)
  }
}
