import asyncHandler from 'express-async-handler';
import question from '../models/question.js';
import userAttempt from '../models/userAttempt.js';

// Get All Questions
export const getQuestions = asyncHandler(async(req,res)=> {
    try {
        const ques = await question.find();
        res.json(ques);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});