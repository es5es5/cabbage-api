import { Test, TestingModule } from '@nestjs/testing'
import { MicroorganismService } from './microorganism.service'

describe('MicroorganismService', () => {
  let service: MicroorganismService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroorganismService],
    }).compile()

    service = module.get<MicroorganismService>(MicroorganismService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
