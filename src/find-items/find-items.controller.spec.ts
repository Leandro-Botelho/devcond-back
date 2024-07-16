import { Test, TestingModule } from '@nestjs/testing';
import { FindItemsController } from './find-items.controller';
import { FindItemsService } from './find-items.service';

describe('FindItemsController', () => {
  let controller: FindItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindItemsController],
      providers: [FindItemsService],
    }).compile();

    controller = module.get<FindItemsController>(FindItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
