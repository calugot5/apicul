import { Module } from '@nestjs/common';
import { TasksStatusService } from './tasks_status.service';
import { TasksStatusController } from './tasks_status.controller';

@Module({
  controllers: [TasksStatusController],
  providers: [TasksStatusService],
})
export class TasksStatusModule {}
