import { Module } from '@nestjs/common'
import { MicroorganismService } from './microorganism.service'
import { MicroorganismController } from './microorganism.controller'

@Module({
  controllers: [MicroorganismController],
  providers: [MicroorganismService],
})
export class MicroorganismModule {}
