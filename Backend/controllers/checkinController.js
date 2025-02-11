import asyncHandler from 'express-async-handler';
import Checkin from '../models/checkin.js';

// Check-in a student
const checkinStudent = asyncHandler (async (req, res) => {
    try {
        const checkinData = new Checkin(req.body);
        await checkinData.save();
        res.status(201).json({ message: 'Student checked in successfully', data: checkinData,status:201 });
    } catch (error) {
        res.status(400).send({ message: 'Error checking in student', error });
    }
});

// Check-out a student
const checkoutStudent = async (req, res) => {
    try {
        const { student_id, book_id } = req.body;
        const checkinData = await Checkin.findOneAndDelete({ student_id, book_id });

        if (!checkinData) {
            return res.status(404).send({ message: 'Check-in record not found' });
        }

        res.status(201).json({ message: 'Student checked out successfully', data: checkinData, status:201 });
    } catch (error) {
        res.status(400).send({ message: 'Error checking out student', error });
    }
};


// Get all check-ins
const getCheckins = async (req, res) => {
    try {
        const checkins = await Checkin.find();
        res.status(201).send({ data: checkins });
    } catch (error) {
        res.status(400).send({ message: 'Error fetching check-ins', error });
    }
};

export { checkinStudent, checkoutStudent, getCheckins };
