import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/createUsers.dto';
import { UpdateUsersDTO } from './dto/updateUsers.dto';
import { IsPublic } from 'src/auth/decorators/is-public-decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOneByUid(id);
  }

  @IsPublic()
  @Post()
  createUser(@Body() createUsersDto: CreateUsersDto) {
    return this.userService.createUser(createUsersDto);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUsersDTO) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
