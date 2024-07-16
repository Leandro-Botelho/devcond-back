import { Injectable } from '@nestjs/common';
import { CreateFindItemDto } from './dto/create-find-item.dto';
import { UpdateFindItemDto } from './dto/update-find-item.dto';

@Injectable()
export class FindItemsService {
  create(createFindItemDto: CreateFindItemDto) {
    return 'This action adds a new findItem';
  }

  findAll() {
    return `This action returns all findItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} findItem`;
  }

  update(id: number, updateFindItemDto: UpdateFindItemDto) {
    return `This action updates a #${id} findItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} findItem`;
  }
}
