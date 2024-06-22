import express from 'express';
import { createQuestions, getQuestions, userQuestions } from '../controllers/quizController.js';

const router = express.Router();

router.route('/create').post(createQuestions);
router.route('/questions').get(getQuestions);
router.route('/submitquiz').post(userQuestions);

export default router;