import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersDto } from 'src/users/users.dto';
import { UsersService } from '../users/users.service';

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
      console.info(new Date(), `Login User: ${result.username}`)
      return result;
    }
    return null;
  }

  async login(users: UsersDto) {
    if (await this.validateUser(users)) {
      const payload = { username: users.username }
      return { accessToken: this.jwtService.sign(payload) }
    } else {
      throw new HttpException('사용자 정보가 없습니다.', HttpStatus.UNAUTHORIZED)
    }
  }
}
