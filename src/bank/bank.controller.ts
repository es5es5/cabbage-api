import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BankDto } from './bank.dto';
import { BankService } from './bank.service';

@Controller('bank')
@ApiTags('뱅크 (Bank)')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  create(@Req() request, @Body() bank: BankDto) {
    bank.writerId = request.user.userId
    return this.bankService.create(bank);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findAll() {
    return this.bankService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  findOne(@Param('id') id: number) {
    return this.bankService.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  update(@Param('id') id: number, @Body() updateBankDto: BankDto) {
    return this.bankService.update(id, updateBankDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  remove(@Param('id') id: number) {
    return this.bankService.remove(id);
  }
}
