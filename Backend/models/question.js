import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correct: Number
});

