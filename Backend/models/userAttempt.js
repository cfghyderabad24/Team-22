import mongoose from "mongoose";

const userAttemptSchema = new mongoose.Schema({
    userId: String,
    answers: [Number],
    score: Number
});

const userAttempt = mongoose.model('userAttempt',userAttemptSchema);