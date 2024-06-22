import express from 'express';
import { getQuestions, userQuestions } from '../controllers/quizController.js';

const router = express.Router();

router.route('/question').get(getQuestions);
router.route('/submitquiz').post(userQuestions);