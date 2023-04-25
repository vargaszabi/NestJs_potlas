import { Test, TestingModule } from '@nestjs/testing';
import { CharachterController } from './charachter.controller';
import { CharachterService } from './charachter.service';

describe('CharachterController', () => {
  let controller: CharachterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharachterController],
      providers: [CharachterService],
    }).compile();

    controller = module.get<CharachterController>(CharachterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
