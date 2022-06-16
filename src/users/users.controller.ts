import {
  Body, Controller, Delete, Get, Param, Post, Put,
  Req
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { UsersDto } from './users.dto'
import { UsersService } from './users.service'

@Controller('users')
@ApiTags('유저 (users)')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() users: UsersDto,
  ) {
    return this.usersService.update(id, users)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }

  @Get('/check/:username')
  @ApiOperation({ summary: '중복체크' })
  check(@Param('username') username: string) {
    return this.usersService.check(username)
  }
}
