import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { UsersDto } from './users.dto'

@Controller('users')
@ApiTags('유저 (users)')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() users: UsersDto) {
    return this.usersService.create(users)
  }

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
