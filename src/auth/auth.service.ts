import { HttpException, HttpStatus, Injectable, NotFoundException, Res, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './login.dto';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { ChangePasswordDto } from './change-password.dto';

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
      throw new HttpException('비밀번호가 틀렸습니다.', HttpStatus.BAD_REQUEST)
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

  async changePassword(userId: number, changeUser: ChangePasswordDto) {
    if (changeUser.password1 !== changeUser.password2) {
      throw new HttpException('새로운 비밀번호가 같지 않습니다.', HttpStatus.BAD_REQUEST)
    }

    const loginUser = new LoginDto()
    loginUser.username = changeUser.username
    loginUser.password = changeUser.password
    const payload = await this.validateUser(loginUser)
    if (payload) {
      return this.usersService.changePassword(userId, changeUser)
    } else {
      throw new HttpException('사용자 정보가 없습니다.', HttpStatus.UNAUTHORIZED)
    }
  }
}
