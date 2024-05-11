import { Injectable } from '@nestjs/common';
import { CreateTasksStatusDto } from './dto/create-tasks_status.dto';
import { UpdateTasksStatusDto } from './dto/update-tasks_status.dto';

@Injectable()
export class TasksStatusService {
  create(createTasksStatusDto: CreateTasksStatusDto) {
    return 'This action adds a new tasksStatus';
  }

  findAll() {
    return `This action returns all tasksStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tasksStatus`;
  }

  update(id: number, updateTasksStatusDto: UpdateTasksStatusDto) {
    return `This action updates a #${id} tasksStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} tasksStatus`;
  }
}
