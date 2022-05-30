import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroorganismModule } from './microorganism/microorganism.module';

@Module({
  imports: [MicroorganismModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
