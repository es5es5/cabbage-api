import {
  Body, Controller, Delete, Get, Param, Post, Put, UseGuards
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
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
  @ApiBearerAuth('Authorization')
  @UseGuards(JwtAuthGuard)
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
