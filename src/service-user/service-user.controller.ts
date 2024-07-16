import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ServiceUserService } from './service-user.service';
import { CreateServiceUserDto } from './dto/create-service-user.dto';
import { UpdateServiceUserDto } from './dto/update-service-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public-decorator';

//** */
@IsPublic()
@Controller('service-user')
export class ServiceUserController {
  constructor(private readonly serviceUserService: ServiceUserService) {}

  @Post()
  create(@Body() createServiceUserDto: CreateServiceUserDto) {
    return this.serviceUserService.create(createServiceUserDto);
  }

  @Get()
  findAll() {
    return this.serviceUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceUserService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateServiceUserDto: UpdateServiceUserDto,
  ) {
    return this.serviceUserService.update(id, updateServiceUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.serviceUserService.remove(id);
  }
}
