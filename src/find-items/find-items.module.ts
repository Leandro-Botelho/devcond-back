import { Module } from '@nestjs/common';
import { FindItemsService } from './find-items.service';
import { FindItemsController } from './find-items.controller';

@Module({
  controllers: [FindItemsController],
  providers: [FindItemsService],
})
export class FindItemsModule {}
