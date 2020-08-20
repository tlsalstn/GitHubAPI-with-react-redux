import * as express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import api from './api'
dotenv.config()

const app = express.default()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/", api)

const server = app.listen(process.env.PORT, () => {
    console.log("Server started at " + process.env.PORT)
})

export default server