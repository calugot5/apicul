import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TasksStatusModule } from './tasks_status/tasks_status.module';
import { TaskStatus } from './tasks_status/entities/tasks_status.entity';
import { TaskCategoryModule } from './task_category/task_category.module';
import { TaskCategory } from './task_category/entities/task_category.entity';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/entities/task.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apicul',
    entities: [User, TaskStatus, TaskCategory, Task],
    synchronize: true,
  }), UserModule, TasksStatusModule, TaskCategoryModule, TasksModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
