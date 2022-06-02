import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MicroorganismController } from './microorganism.controller'
import { Microorganism } from './microorganism.entity'
import { MicroorganismService } from './microorganism.service'

@Module({
  imports: [TypeOrmModule.forFeature([Microorganism]), MicroorganismModule],
  controllers: [MicroorganismController],
  providers: [MicroorganismService],
})
export class MicroorganismModule {}
