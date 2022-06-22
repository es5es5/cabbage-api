import { Module } from '@nestjs/common';
import { PlacementService } from './placement.service';
import { PlacementController } from './placement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Placement } from './placement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Placement])],
  controllers: [PlacementController],
  providers: [PlacementService]
})
export class PlacementModule {}
