import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { EquipmentDto } from './equipment.dto';
import { EquipmentService } from './equipment.service';

@Controller('equipment')
@ApiTags('장비 (Equipment)')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  create(@Req() reqeust, @Body() equipment: EquipmentDto) {
    equipment.writerId = reqeust.user.userId
    return this.equipmentService.create(equipment);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findAll() {
    return this.equipmentService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  update(@Param('id') id: string, @Body() equipment: EquipmentDto) {
    return this.equipmentService.update(+id, equipment);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(+id);
  }
}
