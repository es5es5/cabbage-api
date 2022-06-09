import { Body, Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UsersDto } from 'src/users/users.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
@ApiTags('인증 (auth)')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() users: UsersDto, @Request() req: Request, @Res() res: Response) {
    const { accessToken } = await this.authService.login(users);

    res
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', origin)
      .cookie('accessToken', accessToken, {
        expires: new Date(new Date().getTime() + 60 * 1000 * 60 * 2),
        sameSite: 'none',
        secure: true,
        httpOnly: false,
      })
    // return this.authService.login(users);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
