import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correct: Number
});

const question = mongoose.model('Question',questionSchema);

export default question;