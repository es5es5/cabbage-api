import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersDto } from './users/users.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  hello(): string {
    return 'Hello, Cabbage!'
  }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() users: UsersDto) {
    return this.authService.login(users);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
