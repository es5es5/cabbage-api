import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MicroorganismController } from './microorganism.controller'
import { MicroorganismService } from './microorganism.service'
import { Microorganism } from './model/microorganism.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Microorganism]), MicroorganismModule],
  controllers: [MicroorganismController],
  providers: [MicroorganismService],
})
export class MicroorganismModule {}
