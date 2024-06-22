import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnect from './dbConnect.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import studentRouter from './routes/studentRoutes.js'
import passport from 'passport';
import initializePassport from './services/passport.js';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(cookieParser())

app.use('/api/user',studentRouter)

dbConnect() 
.then(()=>{
    console.log("DB Connection Successfull")
    app.listen(PORT,()=>{
        console.log(`Server is running at PORT ${PORT}`)
    })
})
.catch(e=>console.log("DB Connection Lost"))

// Google OAuth 
app.use(passport.initialize());
initializePassport(passport);

// Contact Us 
app.post('/api/contact', async (request, response) => {
    const { name, email,  message } = request.body;

    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS  
        }
    });

    let mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, 
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

