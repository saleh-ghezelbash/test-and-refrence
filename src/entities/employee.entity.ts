import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";
import { Meeting } from "./meeting.entity";
import { Task } from "./task.entity";

@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @ManyToOne(() => Employee,emp => emp.directReports)
    manager:Employee;

    @OneToMany(() => Employee,emp => emp.manager)
    @JoinColumn({name:"manager"})
    directReports:Employee[];

    @OneToOne(() => ContactInfo,contInfo => contInfo.employee,{eager:true})
    contactInfo:ContactInfo;

    @OneToMany(() => Task,task => task.employee)
    tasks:Task[];

    @ManyToMany(() => Meeting,meeting => meeting.attendees)
    @JoinTable()
    meetings:Meeting[];
}