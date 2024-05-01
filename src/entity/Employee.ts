import {Entity, PrimaryGeneratedColumn, Column,ManyToOne , JoinColumn } from 'typeorm'

import {Company} from './Company'

@Entity({schema:'my_local'})
export class Employee{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    gender:string;

    @Column()
    phoneNumber:number

    @ManyToOne(()=>Company)
    @JoinColumn()
    Cid:Company
    
} 