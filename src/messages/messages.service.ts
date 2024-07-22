import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async create(createMessageDto: CreateMessageDto) {
    return await this.messageRepository.save(createMessageDto);
  }

  async findAll() {
    return await this.messageRepository.find();
  }

  async findOne(id: number) {
    const message = await this.messageRepository.findOneBy({ id });

    if (!message) {
      throw new NotFoundException(`Message with ID:${id} not found`);
    } else return message;
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    const message = await this.messageRepository.preload({
      ...updateMessageDto,
      id,
    });

    if (!message) {
      throw new NotFoundException(`Message with id ${id} not found`);
    } else return this.messageRepository.save(message);
  }

  async remove(id: number) {
    const message = await this.messageRepository.delete(id);

    if (message.affected === 0) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }
  }
}
