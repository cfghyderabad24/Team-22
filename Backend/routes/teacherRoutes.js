import { Router } from "express";
import { createTeacher, getaTeacher, getallTeachers, loginTeacher, triggerblockteacher, updateTeacher } from "../controllers/teacherController.js";



const router = Router()

router.route('/registerteacher').post(createTeacher)
router.route('/blockteacher').put(triggerblockteacher)
router.route('/getallteachers').get(getallTeachers)
router.route('/getateacher').get(getaTeacher)
router.route('/updateteacher').put(updateTeacher)
router.route('/loginTeacher').get(loginTeacher)



export default router