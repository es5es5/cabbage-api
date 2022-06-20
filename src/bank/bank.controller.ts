import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankDto } from './bank.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('bank')
@ApiTags('뱅크 (Bank)')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post()
  create(@Body() createBankDto: BankDto) {
    return this.bankService.create(createBankDto);
  }

  @Get()
  findAll() {
    return this.bankService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankDto: BankDto) {
    return this.bankService.update(id, updateBankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankService.remove(id);
  }
}
