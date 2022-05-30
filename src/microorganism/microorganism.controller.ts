import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { MicroorganismService } from './microorganism.service'
import { CreateMicroorganismDto } from './dto/create-microorganism.dto'
import { UpdateMicroorganismDto } from './dto/update-microorganism.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('microorganism')
@ApiTags('균종 (microorganism)')
export class MicroorganismController {
  constructor(private readonly microorganismService: MicroorganismService) {}

  @Post()
  create(@Body() createMicroorganismDto: CreateMicroorganismDto) {
    return this.microorganismService.create(createMicroorganismDto)
  }

  @Get()
  findAll() {
    return this.microorganismService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.microorganismService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMicroorganismDto: UpdateMicroorganismDto,
  ) {
    return this.microorganismService.update(+id, updateMicroorganismDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.microorganismService.remove(+id)
  }
}
