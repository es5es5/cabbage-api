import { HttpException, HttpStatus, Injectable, NotFoundException, Res, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './login.dto';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(users: LoginDto): Promise<any> {
    const user = await this.usersService.findUserForLogin(users.username)
    if (!user) throw new NotFoundException()

    const checkPassword = await bcrypt.compare(users.password, user.password)
    if (checkPassword) {
      const result = {
        sub: user.id,
        username: user.username,
      }
      console.info(new Date(), `Login User: ${user.username} ${user.displayName}`)
      return result;
    } else {
      throw new UnauthorizedException();
    }
  }

  async login(users: LoginDto) {
    const payload = await this.validateUser(users)
    if (payload) {
      return { accessToken: this.jwtService.sign(payload) }
    } else {
      throw new HttpException('사용자 정보가 없습니다.', HttpStatus.UNAUTHORIZED)
    }
  }

  public getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }
}
