import { Module } from '@nestjs/common';
import { ExperimentService } from './experiment.service';
import { ExperimentController } from './experiment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experiment } from './experiment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Experiment])],
  controllers: [ExperimentController],
  providers: [ExperimentService]
})
export class ExperimentModule {}
