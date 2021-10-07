import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlConfig } from './config/database.config';
import { ContactInfo } from './entities/contact-info.entity';
import { Employee } from './entities/employee.entity';
import { Meeting } from './entities/meeting.entity';
import { Task } from './entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(MysqlConfig),
    TypeOrmModule.forFeature([Employee,ContactInfo,Task,Meeting])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
