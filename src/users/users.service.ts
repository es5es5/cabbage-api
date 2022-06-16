import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersDto } from './users.dto';
import { Users } from './users.entity';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: UsersRepository
  ) {}

  async create(user: UsersDto) {
    user.password = await bcrypt.hash(user.password, 10);
    return this.usersRepository.save(user)
  }

  findAll() {
    return this.usersRepository.findBy({ able: true })
  }

  async findOne(id: string): Promise<Users> {
    const user = await this.usersRepository.findOneBy({ id, able: true })
    delete user['password']
    return user
  }

  findUser(username: string): Promise<Users> {
    return this.usersRepository.findOneBy({ username, able: true })
  }

  update(id: string, user: UsersDto) {
    this.usersRepository.update({ id }, user)
    return user
  }

  remove(id: string) {
    return this.usersRepository.update({ id }, {
      able: false
    })
  }

  async check(username: string) {
    const [result, count] = await this.usersRepository.findAndCountBy({ able: true, username })
    return count < 1
  }
}