import { Injectable } from '@nestjs/common';
import { OriginDto } from './origin.dto';

@Injectable()
export class OriginService {
  create(origin: OriginDto) {
    return 'This action adds a new origin';
  }

  findAll() {
    return `This action returns all origin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} origin`;
  }

  update(id: number, origin: OriginDto) {
    return `This action updates a #${id} origin`;
  }

  remove(id: number) {
    return `This action removes a #${id} origin`;
  }
}
