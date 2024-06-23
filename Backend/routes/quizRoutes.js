import express from 'express';
import { createQuestions, getBookNames, getQuestions, userQuestions } from '../controllers/quizController.js';

const router = express.Router();

router.route('/create').post(createQuestions);
router.route('/questions/:bookName').get(getQuestions);
router.route('/submitquiz').post(userQuestions);
router.route('/books').get(getBookNames);

export default router;