import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ChangePasswordDto } from 'src/auth/change-password.dto';
import { UsersDto } from './users.dto';
import { Users } from './users.entity';
import { UsersRepository } from './users.repository';

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

  async findAll() {
    const users = await this.usersRepository.find({ where: { able: true }, order: { createtime: 'DESC' }})
    users.forEach(user => delete user['password'])
    return users
  }

  async findOne(id: number): Promise<Users> {
    const user = await this.usersRepository.findOneBy({ id, able: true })
    delete user['password']
    return user
  }

  async findUserForLogin(username: string): Promise<Users> {
    const user = await this.usersRepository.findOneBy({ username, able: true })
    return user
  }

  async update(id: number, user: UsersDto) {
    const result = await this.usersRepository.update({ id }, user)
    return result
  }

  async changePassword(id: number, changeUser: ChangePasswordDto) {
    const user = await this.usersRepository.findOneBy({ id })
    user.password = await bcrypt.hash(changeUser.password1, 10);
    const resultUser = await this.usersRepository.update({ id }, user)
    delete resultUser['password']
    return resultUser
  }

  remove(id: number) {
    return this.usersRepository.update({ id }, {
      able: false
    })
  }

  async check(username: string) {
    const [result, count] = await this.usersRepository.findAndCountBy({ able: true, username })
    return count < 1
  }
}