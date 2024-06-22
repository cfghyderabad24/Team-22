import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    bookName: String,
    questions: String,
    options: [String],
    correct: Number
});

const question = mongoose.model('question',questionSchema);

export default question;