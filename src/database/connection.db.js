import env from "../config/env.config.js"
import mongoose from "mongoose"

const connection = mongoose.connect(`mongodb+srv://${env.app_user}:${env.app_password}@lionsdev.fq1qgzn.mongodb.net/gestaoOficina`)

mongoose.connection.once(`open`, () => {
    console.log(`Conectado ao mongoDB`);
})

mongoose.connection?.on(`error`, (err) => {
    console.error(`Erro ao conectar ao mongoDB, Error: ${err.mensage}`)
})

export default connection