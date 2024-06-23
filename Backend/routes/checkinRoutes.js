import express from 'express';
import { checkinStudent, checkoutStudent, getCheckins } from '../controllers/checkinController.js';

const router = express.Router();

router.route('/checkin').post(checkinStudent);
router.route('/checkout').post(checkoutStudent);
router.route('/checkins').get(getCheckins);

export default router;
 