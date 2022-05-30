import { Test, TestingModule } from '@nestjs/testing'
import { MicroorganismController } from './microorganism.controller'
import { MicroorganismService } from './microorganism.service'

describe('MicroorganismController', () => {
  let controller: MicroorganismController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroorganismController],
      providers: [MicroorganismService],
    }).compile()

    controller = module.get<MicroorganismController>(MicroorganismController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
