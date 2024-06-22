import asyncHandler from 'express-async-handler';
import question from '../models/question.js';
import userAttempt from '../models/userAttempt.js';

// Create Questions
export const createQuestions = asyncHandler(async(req,res) => {
    const {bookName, questions, options, correct } = req.body;
    if(!bookName || !questions || !options || correct === undefined) {
        return res.status(400).json({message: 'All Fields are Required'});
    }
    const newQuestion = new question({
        bookName,
        questions,
        options,
        correct
    });

    try {
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


// Get All Questions
export const getQuestions = asyncHandler(async(req,res)=> {
    const {bookName} = req.params;
    try {
        const ques = await question.find({ bookName});
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