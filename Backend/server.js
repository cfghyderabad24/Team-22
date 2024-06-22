import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnect from './dbConnect.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import studentRouter from './routes/studentRoutes.js'
import adminRouter from './routes/adminRoutes.js'
import passport from 'passport';
import initializePassport from './services/passport.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(cookieParser())

app.use('/api/user',studentRouter)
app.use('/api/admin',adminRouter)

dbConnect() 
.then(()=>{
    console.log("DB Connection Successfull")
    app.listen(PORT,()=>{
        console.log(`Server is running at PORT ${PORT}`)
    })
})
.catch(e=>console.log("DB Connection Lost"))

app.use(passport.initialize());
initializePassport(passport);
