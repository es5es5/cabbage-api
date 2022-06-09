import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersDto } from 'src/users/users.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
@ApiTags('인증 (auth)')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() users: UsersDto) {
    return this.authService.login(users);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
