import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORMConfig } from './configs/typeorm.config';
import { MicroorganismModule } from './microorganism/microorganism.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), MicroorganismModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
