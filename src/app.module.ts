import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutsModule } from './workouts/workouts.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [WorkoutsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
