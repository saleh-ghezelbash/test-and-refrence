import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactInfo } from './entities/contact-info.entity';
import { Employee } from './entities/employee.entity';
import { Meeting } from './entities/meeting.entity';
import { Task } from './entities/task.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Employee) private empRipo: Repository<Employee>,
    @InjectRepository(ContactInfo) private contactRipo: Repository<ContactInfo>,
    @InjectRepository(Meeting) private meetingRipo: Repository<Meeting>,
    @InjectRepository(Task) private taskRipo: Repository<Task>,
  ) { }


  getHello() {
    // return this.contactRipo.createQueryBuilder('cont')
    //   .leftJoinAndSelect('cont.employee', 'emp')
    //   .getMany()
    // return this.empRipo.createQueryBuilder('emp')
    // .leftJoinAndSelect('emp.contactInfo','con')
    // .getMany()

    return this.empRipo.findOne(9,{relations:['tasks','directReports']})
  }

  deleteEmployee() {
    this.empRipo.delete(1);
  }

  async createData() {

    /*
      One to One relation with two approach
      remember foreinkey is in Contact-info table
    */
    // const ceo = this.empRipo.create({ name: "mr.ceo1" });
    // const con = this.contactRipo.create({ email:"test@gmail.com"});
    // await this.contactRipo.save(con);
    // ceo.contactInfo = con;
    // await this.empRipo.save(ceo);

    // const ceo1 = this.empRipo.create({ name: "mr.ceo" });
    // const con1 = this.contactRipo.create({ email:"test2@gmail.com"});
    // await this.empRipo.save(ceo1);
    // con1.employee = ceo1;
    // await this.contactRipo.save(con1);


    /*
      one to many relation with two approach
    */
    // const ceo = this.empRipo.create({ name: "mr.ceo1" });
    // await this.empRipo.save(ceo);
    // const task1 = this.taskRipo.create({ name: "task3" });
    // const task2 = this.taskRipo.create({ name: "task4" });
    // await this.taskRipo.save(task1)
    // await this.taskRipo.save(task2)
    // ceo.tasks = [task1, task2];
    // await this.empRipo.save(ceo);

    // const ceo = this.empRipo.create({ name: "mr.ceo5" });
    // await this.empRipo.save(ceo);
    // const task1 = this.taskRipo.create({ name: "task5" });
    // task1.employee = ceo;
    // const task2 = this.taskRipo.create({ name: "task6" });
    // task2.employee = ceo;
    // await this.taskRipo.save(task1)
    // await this.taskRipo.save(task2)


    /*
      many to many relation with two approach
    */
    // const ceo1 = this.empRipo.create({ name: "mr.ceo7" });
    // await this.empRipo.save(ceo1);
    // const meet = this.meetingRipo.create({zoomUrl:"zoom 2"});
    // meet.attendees = [ceo1];
    // await this.meetingRipo.save(meet);

    // const meet = this.meetingRipo.create({zoomUrl:"zoom 3"});
    // await this.meetingRipo.save(meet);
    // const ceo1 = this.empRipo.create({ name: "mr.ceo8" });
    // ceo1.meetings = [meet];
    // await this.empRipo.save(ceo1);


      /*
         one to many self refrencing with two approach
      */
      // const ceo = this.empRipo.create({ name: "employee4" });
      // await this.empRipo.save(ceo);
      // const manager = this.empRipo.create({ name: "manager4"});
      // manager.directReports = [ceo];
      // await this.empRipo.save(manager);

      // const manager = this.empRipo.create({ name: "manager3" });
      // await this.empRipo.save(manager);
      // const ceo = this.empRipo.create({ name: "employee3"});
      // ceo.manager = manager;
      // await this.empRipo.save(ceo);

  }
}
