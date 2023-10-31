import { Test, TestingModule } from '@nestjs/testing';
import { CircumferenceController } from './circumference.controller';

describe('CircumferenceController', () => {
  let controller: CircumferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CircumferenceController],
    }).compile();

    controller = module.get<CircumferenceController>(CircumferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
