import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity({schema:'my_local'})
export class Customer{
    @PrimaryGeneratedColumn()
    id:number

    @Column({unique:true})
    PrimaryNumber:number

    @Column()
    name:string

    @Column()
    gender:string

    @Column()
    address:string

    // @Column()
    // phoneNumber:number
}