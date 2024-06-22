import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import dotenv from 'dotenv';
import initializePassport from '../services/passport.js';

dotenv.config();

initializePassport(passport);
const router = express.Router();

router.get('/google',passport.authenticate('google',{scope:['profile','email']}));

router.get('/google/callback', passport.authenticate('google',{session:false}), async(request,response) => {
    const payload = {
        user : {
            id: request.user.id,
            name: request.user.name,
            email: request.user.email
        }
    };

    jwt.sign(payload,jwtSecret, {expiresIn:'1h'}, (err,token) => {
        if(err) throw err;
        response.cookie('token',token,{httpOnly:true});
        response.redirect('http://localhost:3000/home');
    });
});




