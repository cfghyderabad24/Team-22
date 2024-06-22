import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'
import dbConnect from './dbConnect.js'

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(cookieParser())





dbConnect() 
.then(()=>{
    console.log("DB Connection Successfull")
    app.listen(PORT,()=>{
        console.log(`Server is running at PORT ${PORT}`)
    })
})
.catch(e=>console.log("DB Connection Lost"))