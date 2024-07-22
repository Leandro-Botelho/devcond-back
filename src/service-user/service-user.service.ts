import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceUserDto } from './dto/create-service-user.dto';
import { UpdateServiceUserDto } from './dto/update-service-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceUser } from './entities/service-user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceUserService {
  constructor(
    @InjectRepository(ServiceUser)
    private readonly serviceUsersRepository: Repository<ServiceUser>,
  ) {}

  async create(createServiceUserDto: CreateServiceUserDto) {
    const createServiceUser =
      this.serviceUsersRepository.create(createServiceUserDto);

    return await this.serviceUsersRepository.save(createServiceUser);
  }

  async findAll() {
    return await this.serviceUsersRepository.find();
  }

  async findOne(id: number) {
    const serviceUser = await this.serviceUsersRepository.findOneBy({ id });

    if (!serviceUser) {
      throw new NotFoundException(`Service User with ID:${id} not found`);
    }

    return serviceUser;
  }

  async update(id: number, updateServiceUserDto: UpdateServiceUserDto) {
    const serviceUser = await this.serviceUsersRepository.preload({
      ...updateServiceUserDto,
      id,
    });

    if (!serviceUser) {
      throw new NotFoundException(`Service User with id ${id} not found`);
    }

    return this.serviceUsersRepository.save(serviceUser);
  }

  async remove(id: number) {
    const service = await this.serviceUsersRepository.delete(id);

    if (service.affected === 0) {
      throw new NotFoundException(`Service User with id ${id} not found`);
    }
  }
}
