import { Test, TestingModule } from '@nestjs/testing';
import { ServiceUserController } from './service-user.controller';
import { ServiceUserService } from './service-user.service';

describe('ServiceUserController', () => {
  let controller: ServiceUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceUserController],
      providers: [ServiceUserService],
    }).compile();

    controller = module.get<ServiceUserController>(ServiceUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
