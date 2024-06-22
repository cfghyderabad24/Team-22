import { Router } from "express";
import { createStudent } from "../controllers/studentControllers.js";

const router = Router()

router.route('/register').post(createStudent)

export default router