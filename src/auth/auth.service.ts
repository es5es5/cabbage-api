import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/users.entity';
import { UsersDto } from 'src/users/users.dto';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(users: UsersDto): Promise<any> {
    const user = await this.usersService.findUser(users.username)
    if (user && user.password === users.password) {
      const { password, ...result } = user;
      console.log(result)
      return result;
    }
    return null;
  }

  async login(users: UsersDto) {
    if (await this.validateUser(users)) {
      const payload = { username: users.username }
      return { accessToken: this.jwtService.sign(payload) }
    }
  }
}
