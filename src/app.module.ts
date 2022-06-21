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

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), MicroorganismModule, AuthModule, UsersModule, OriginModule, BankModule, GenusModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
