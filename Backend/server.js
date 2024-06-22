import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(cookieParser())


