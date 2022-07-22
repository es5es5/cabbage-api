import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StockPlacementService } from './stock-placement.service';
import { StockPlacementDto } from './stock-placemnet.dto';

@Controller('stock-placement')
@ApiTags('뱅크 보관장소 (StockPlacement)')
export class StockPlacementController {
  constructor(private readonly stockPlacementService: StockPlacementService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  create(@Req() reqeust, @Body() stockPlacement: StockPlacementDto) {
    stockPlacement.writerId = reqeust.user.userId
    return this.stockPlacementService.create(stockPlacement);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findAll() {
    return this.stockPlacementService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findOne(@Param('id') id: string) {
    return this.stockPlacementService.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  update(@Param('id') id: string, @Body() stockPlacement: StockPlacementDto) {
    return this.stockPlacementService.update(id, stockPlacement);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  remove(@Param('id') id: string) {
    return this.stockPlacementService.remove(id);
  }
}
