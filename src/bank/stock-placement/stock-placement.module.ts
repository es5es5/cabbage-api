import { Module } from '@nestjs/common';
import { StockPlacementService } from './stock-placement.service';
import { StockPlacementController } from './stock-placement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockPlacement } from './stock-placement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockPlacement])],
  controllers: [StockPlacementController],
  providers: [StockPlacementService]
})
export class StockPlacementModule {}
