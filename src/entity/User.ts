import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
@Entity({schema:'my_local'})
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string

    @Column({unique:true})
    email:string
    
}