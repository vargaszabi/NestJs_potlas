import { Test, TestingModule } from '@nestjs/testing';
import { CharachterService } from './charachter.service';

describe('CharachterService', () => {
  let service: CharachterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharachterService],
    }).compile();

    service = module.get<CharachterService>(CharachterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
