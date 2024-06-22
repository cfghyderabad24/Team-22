import express from 'express';
import passport form 'passport';
import jwt from 'jsonwebtoken';
import bcrypt form 'bcryptjs';
import dotenv from 'dotenv';
import middleware from '../middleware/auth.js';
import initializePassport from '../services/passport.js';

initializePassport(passport);
const router = express.Router();

router.get('/google',passport.authenticate('google',{scope:['profile','email']}));




