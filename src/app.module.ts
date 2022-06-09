import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { MicroorganismModule } from './microorganism/microorganism.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), MicroorganismModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
