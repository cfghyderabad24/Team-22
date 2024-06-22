import { Router } from "express";
import { createStudent, deleteStudent, getaStudent, getallStudents } from "../controllers/studentControllers.js";

const router = Router()

router.route('/registerstudent').post(createStudent)
router.route('/deletestudent').delete(deleteStudent)
router.route('/getallstudents').put(getallStudents)
router.route('/getastudent').put(getaStudent)


export default router