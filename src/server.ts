import "reflect-metadata"
import cors from "cors"
import express from "express"
import "express-async-errors"
import { AppDataSource } from "./database/data-source"
import routers from "./app/routes"

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())
app.use(routers)

AppDataSource.initialize().then(async () => {
    console.log("Banco de dados iniciado!")
    app.listen(port, () => {
        console.log(`Servidor rodando em: http://localhost:${port}`)
    })
})