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

// Submit user attempt
export const userQuestions = asyncHandler(async(req,res)=> {
    const {userId, answers} = req.body;
    try {
        const ques = await question.find();
        let score = 0;
        ques.forEach((q,index) => {
            if(answers[index] === question.correct) {
                score++;
            }
        });
        const ua = new userAttempt({
            userId,
            answers,
            score
        });
        await ua.save();
        res.json({score, totalQuestions: getQuestions.length});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});