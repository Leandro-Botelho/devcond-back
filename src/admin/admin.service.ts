import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { transformHasPassword } from 'src/shared/utils/transformHashPassword';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const userAdmin = {
      ...createAdminDto,
      password: await transformHasPassword(createAdminDto.password),
    };

    const createAdmin = this.adminRepository.create(userAdmin);

    return await this.adminRepository.save(createAdmin);
  }

  async findAll() {
    return await this.adminRepository.find();
  }

  async findOneByUid(id: number) {
    const adminUser = await this.adminRepository.findOneBy({ id });

    if (adminUser === null) {
      throw new NotFoundException(`adminUser with ID:${id} not found`);
    }

    return adminUser;
  }

  async findByEmail(email: string) {
    const emailUser = await this.adminRepository.findOneBy({ email });

    if (emailUser === null) {
      throw new NotFoundException(`user with E-mail:${email} not found`);
    }

    return emailUser;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const adminUser = await this.adminRepository.preload({
      ...updateAdminDto,
      id,
    });

    if (!adminUser) {
      throw new NotFoundException(`adminUser with ID:${id} not found`);
    }

    return this.adminRepository.save(adminUser);
  }

  async remove(id: number) {
    const adminUser = await this.adminRepository.delete(id);

    if (adminUser.affected === 0) {
      throw new NotFoundException(`adminUser with id ${id} not found`);
    }
  }
}
