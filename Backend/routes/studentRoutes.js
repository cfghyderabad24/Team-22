import { Router } from "express";
import { createStudent, deleteStudent, getaStudent, getallStudents } from "../controllers/studentControllers.js";

const router = Router()

router.route('/registerstudent').post(createStudent)
router.route('/deletestudent').delete(deleteStudent)
router.route('/getallstudents').get(getallStudents)
router.route('/getastudent').get(getaStudent)


export default router