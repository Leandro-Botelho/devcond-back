import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsersDto } from './dto/createUsers.dto';
import { UpdateUsersDTO } from './dto/updateUsers.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOneByUid(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (user === null) {
      throw new NotFoundException(`user with ID:${id} not found`);
    }

    return user;
  }

  async findByEmail(email: string) {
    const emailUser = await this.userRepository.findOneBy({ email });

    if (emailUser === null) {
      throw new NotFoundException(`user with E-mail:${email} not found`);
    }

    return emailUser;
  }

  async createUser(createUserDTO: CreateUsersDto) {
    const createUser = this.userRepository.create(createUserDTO);

    return await this.userRepository.save(createUser);
  }

  async updateUser(id: number, updateUsersDTO: UpdateUsersDTO) {
    const user = await this.userRepository.preload({
      ...updateUsersDTO,
      id,
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return this.userRepository.save(user);
  }

  async deleteUser(id: number) {
    const user = await this.userRepository.delete(id);

    if (user.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
