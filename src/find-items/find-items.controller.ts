import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FindItemsService } from './find-items.service';
import { CreateFindItemDto } from './dto/create-find-item.dto';
import { UpdateFindItemDto } from './dto/update-find-item.dto';

@Controller('find-items')
export class FindItemsController {
  constructor(private readonly findItemsService: FindItemsService) {}

  @Post()
  create(@Body() createFindItemDto: CreateFindItemDto) {
    return this.findItemsService.create(createFindItemDto);
  }

  @Get()
  findAll() {
    return this.findItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findItemsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFindItemDto: UpdateFindItemDto,
  ) {
    return this.findItemsService.update(+id, updateFindItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.findItemsService.remove(+id);
  }
}
