import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { MicroorganismModule } from './microorganism/microorganism.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), MicroorganismModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
