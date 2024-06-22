import { Router } from "express";
import { createTeacher, getaTeacher, getallTeachers, loginTeacher, triggerblockteacher, updateTeacher } from "../controllers/teacherController.js";

import { authMiddleWareAdmin, authMiddleWareTeacher } from "../middleware/roleManage.js";


const router = Router()

router.route('/registerteacher').post(createTeacher)
router.route('/blockteacher').put(authMiddleWareAdmin,triggerblockteacher)
router.route('/getallteachers').get(authMiddleWareTeacher,getallTeachers)
router.route('/getateacher').get(authMiddleWareTeacher,getaTeacher)
router.route('/updateteacher').put(authMiddleWareTeacher,updateTeacher)
router.route('/loginTeacher').get(loginTeacher)



export default router