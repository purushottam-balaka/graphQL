import {PrimaryGeneratedColumn, Entity, Column} from 'typeorm'

@Entity({schema:'my_local'})
export class Agent{
    @PrimaryGeneratedColumn()
    id:String

    @Column()
    name:String

    @Column()
    gender:String

    @Column({unique:true})
    primaryNumber:String

}