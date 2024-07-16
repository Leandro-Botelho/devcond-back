import { Test, TestingModule } from '@nestjs/testing';
import { FindItemsService } from './find-items.service';

describe('FindItemsService', () => {
  let service: FindItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindItemsService],
    }).compile();

    service = module.get<FindItemsService>(FindItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
