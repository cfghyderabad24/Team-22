import express from 'express';
import question from '../models/question.js';
import userAttempt from '../models/userAttempt.js';

const router = express.Router();

router.get('/question')