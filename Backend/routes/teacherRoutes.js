import { Router } from "express";
import { createTeacher } from "../controllers/teacherController.js";



const router = Router()

router.route('/registerteacher').post(createTeacher)



export default router