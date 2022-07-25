import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StockPlacementService } from './stock-placement.service';
import { StockPlacementDto } from './stock-placemnet.dto';

@Controller('/bank/:bankId/stock-placement')
@ApiTags('뱅크 보관장소 (StockPlacement)')
export class StockPlacementController {
  constructor(private readonly stockPlacementService: StockPlacementService) {}

  @Post('')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  create(@Param('bankId') bankId: number, @Req() reqeust, @Body() stockPlacementList: Array<StockPlacementDto>) {
    return this.stockPlacementService.create(bankId, reqeust.user.userId, stockPlacementList);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findAll(@Param('bankId') bankId: number) {
    return this.stockPlacementService.findAll(bankId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findOne(@Param('bankId') bankId: number, @Param('id') id: string) {
    return this.stockPlacementService.findOne(bankId, id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  update(@Param('bankId') bankId: number, @Param('id') id: string, @Body() stockPlacement: StockPlacementDto) {
    return this.stockPlacementService.update(bankId, id, stockPlacement);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  remove(@Param('bankId') bankId: number, @Param('id') id: string) {
    return this.stockPlacementService.remove(bankId, id);
  }
}
