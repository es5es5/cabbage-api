import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { UsersDto } from 'src/users/users.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
@ApiTags('인증 (auth)')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(201)
  @Post('login')
  async login(@Body() users: UsersDto, @Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const { accessToken } = await this.authService.login(users);

    const origin = req.get('Origin')

    res
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', origin)
      .cookie('accessToken', accessToken, {
        expires: new Date(new Date().getTime() + 60 * 1000 * 60 * 2),
        sameSite: 'none',
        secure: true,
        httpOnly: false,
      })

    throw new HttpException('Success Login.', HttpStatus.OK)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
