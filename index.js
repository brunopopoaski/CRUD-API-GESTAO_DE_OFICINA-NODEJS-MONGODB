import express from "express";
import routes from "./src/routes.js"

const app = express()

app.use(routes)
app.use(express.json())

export default app