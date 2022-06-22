import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PlacementDto } from './placement.dto';
import { PlacementService } from './placement.service';

@Controller('placement')
@ApiTags('장소 (Placement)')
export class PlacementController {
  constructor(private readonly placementService: PlacementService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  create(@Req() reqeust, @Body() placement: PlacementDto) {
    placement.writerId = reqeust.user.userId
    return this.placementService.create(placement);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findAll() {
    return this.placementService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findOne(@Param('id') id: string) {
    return this.placementService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  update(@Param('id') id: string, @Body() placement: PlacementDto) {
    return this.placementService.update(+id, placement);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  remove(@Param('id') id: string) {
    return this.placementService.remove(+id);
  }
}
