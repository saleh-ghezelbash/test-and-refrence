import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Delete()
  deleteEmployee(){
    this.appService.deleteEmployee();
  }

  @Post()
  createData(){
    return this.appService.createData();
  }
}
