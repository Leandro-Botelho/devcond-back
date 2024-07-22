import { Module } from '@nestjs/common';
import { FindItemsService } from './find-items.service';
import { FindItemsController } from './find-items.controller';
import { FindItem } from './entities/find-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FindItem])],
  controllers: [FindItemsController],
  providers: [FindItemsService],
  exports: [FindItemsService],
})
export class FindItemsModule {}
