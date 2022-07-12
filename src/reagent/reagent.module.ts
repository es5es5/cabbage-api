import { Module } from '@nestjs/common';
import { ReagentService } from './reagent.service';
import { ReagentController } from './reagent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reagent } from './reagent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reagent])],
  controllers: [ReagentController],
  providers: [ReagentService]
})
export class ReagentModule {}
