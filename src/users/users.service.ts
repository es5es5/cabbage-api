import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: UsersRepository
  ) {}

  create(user: Users) {
    return this.usersRepository.save(user)
  }

  findAll() {
    return this.usersRepository.findBy({ able: true })
  }

  findOne(id: string): Promise<Users> {
    return this.usersRepository.findOneBy({ id, able: true })
  }

  findUser(username: string): Promise<Users> {
    return this.usersRepository.findOneBy({ username, able: true })
  }

  update(id: string, user: Users) {
    this.usersRepository.update({ id }, user)
    return user
  }

  remove(id: string) {
    return this.usersRepository.update({ id }, {
      able: false
    })
  }
}