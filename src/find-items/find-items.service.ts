import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFindItemDto } from './dto/create-find-item.dto';
import { UpdateFindItemDto } from './dto/update-find-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindItem } from './entities/find-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FindItemsService {
  constructor(
    @InjectRepository(FindItem)
    private readonly findItemRepository: Repository<FindItem>,
  ) {}

  async create(createFindItemDto: CreateFindItemDto) {
    return await this.findItemRepository.save(createFindItemDto);
  }

  async findAll() {
    return await this.findItemRepository.find();
  }

  async findOne(id: number) {
    const findItem = await this.findItemRepository.findOneBy({ id });

    if (!findItem) {
      throw new NotFoundException(`FindItem with ID:${id} not found`);
    } else return findItem;
  }

  async update(id: number, updateFindItemDto: UpdateFindItemDto) {
    const findItem = await this.findItemRepository.preload({
      ...updateFindItemDto,
      id,
    });

    if (!findItem) {
      throw new NotFoundException(`FindItem with id ${id} not found`);
    } else return this.findItemRepository.save(findItem);
  }

  async remove(id: number) {
    const removeFindItem = await this.findItemRepository.delete(id);

    if (removeFindItem.affected === 0) {
      throw new NotFoundException(`FindItem with id ${id} not found`);
    }
  }
}
