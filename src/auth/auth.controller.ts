import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { UsersDto } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './login.dto';

@Controller('auth')
@ApiTags('인증 (auth)')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post('sign-in')
  create(@Body() users: UsersDto) {
    return this.usersService.create(users)
  }

  @Post('login')
  async login(@Body() users: LoginDto, @Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const { accessToken } = await this.authService.login(users);

    const origin = req.get('Origin')

    res
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', origin)
      .setHeader('Authorization', 'Bearer ' + accessToken)
      .cookie('accessToken', accessToken, {
        expires: new Date(new Date().getTime() + 60 * 1000 * 60 * 16), // 16 hours
        // sameSite: 'none',
        // secure: true,
        httpOnly: false,
      })

    return accessToken
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('Authorization')
  getProfile(@Req() req) {
    return this.usersService.findOne(req.user.userId)
  }
}
