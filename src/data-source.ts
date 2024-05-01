import {DataSource} from 'typeorm'
import 'reflect-metadata'

export const AppDataSource=new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username:"postgres",
    password: "ASDF12345@a",
    database: "mydb",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ["src/migrations/*.ts"],
  })
  