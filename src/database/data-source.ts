import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"
import { CreateTutorTable1727797219467 } from "./migrations/1727797219467-CreateTutorTable"
import { CreateAnimalTable1727907553003 } from "./migrations/1727907553003-CreateAnimalTable"
import Tutor from "../app/entities/tutor"
import Animal from "../app/entities/animal"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: process.env.POSTGRES_PASSWORD,
    database: "mimipet",
    synchronize: true,
    logging: false,
    entities: [Tutor,Animal],
    migrations: [CreateTutorTable1727797219467,CreateAnimalTable1727907553003],
    subscribers: [],
})
