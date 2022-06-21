import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GenusDto } from './genus.dto';
import { GenusService } from './genus.service';

@Controller('genus')
@ApiTags('종속 (Genus)')
export class GenusController {
  constructor(private readonly genusService: GenusService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  create(@Req() reqeust, @Body() genus: GenusDto) {
    console.info(reqeust)
    genus.writerId = reqeust.user.userId
    return this.genusService.create(genus);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findAll() {
    return this.genusService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findOne(@Param('id') id: string) {
    return this.genusService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  update(@Param('id') id: string, @Body() genus: GenusDto) {
    return this.genusService.update(+id, genus);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  remove(@Param('id') id: string) {
    return this.genusService.remove(+id);
  }
}
