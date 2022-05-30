import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroorganismModule } from './microorganism/microorganism.module';
import { OriginModule } from './origin/origin.module';

@Module({
  imports: [MicroorganismModule, OriginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
