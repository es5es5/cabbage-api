import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { typeORMConfig } from './configs/typeorm.config';
import { MicroorganismModule } from './microorganism/microorganism.module';
import { UsersModule } from './users/users.module';
import { OriginModule } from './origin/origin.module';
import { BankModule } from './bank/bank.module';
import { GenusModule } from './genus/genus.module';
import { PlacementModule } from './placement/placement.module';
import { ScheduleModule } from './schedule/schedule.module';
import { StudyTopicModule } from './study_topic/study_topic.module';
import { BusinessModule } from './business/business.module';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), MicroorganismModule, AuthModule, UsersModule, OriginModule, BankModule, GenusModule, PlacementModule, ScheduleModule, StudyTopicModule, BusinessModule, EquipmentModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
