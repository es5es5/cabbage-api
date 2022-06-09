import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { ApiTags } from '@nestjs/swagger'
import { Users } from './users.entity'

@Controller('users')
@ApiTags('균종 (users)')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() users: Users) {
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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() users: Users,
  ) {
    return this.usersService.update(id, users)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }
}
