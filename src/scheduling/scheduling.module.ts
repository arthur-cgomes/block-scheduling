import { Module } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
import { SchedulingController } from './scheduling.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scheduling } from './entity/scheduling.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Scheduling]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
  ],
  providers: [SchedulingService],
  controllers: [SchedulingController],
  exports: [SchedulingService],
})
export class SchedulingModule {}
