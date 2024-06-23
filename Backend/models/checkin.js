import mongoose from 'mongoose';

const checkinSchema = new mongoose.Schema({
    student_id: { type: String, required: true },
    book_id: { type: String, required: true },
    book_level: { type: Number, required: true },
    genuine: { type: Boolean, required: true },
    timestamp: { type: Date, default: Date.now }
});


const Checkin = mongoose.model('Checkin', checkinSchema);

export default Checkin;