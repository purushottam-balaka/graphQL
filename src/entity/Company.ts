import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({schema:'my_local'})
export class Company{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    address:string;
}