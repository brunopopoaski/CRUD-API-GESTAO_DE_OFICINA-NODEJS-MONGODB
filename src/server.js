import env from "./config/env.config.js"
import app from "../index.js";
import connection from "./database/connection.db.js" // AUTOMATICAMENTE SE CONECTA AO BANCO DO CONNECTION.DB.JS --- APRENDI ISSO USANDO MESMO KK

app.listen(env.app_port, () => {
    console.log("Server Running");
})