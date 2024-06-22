import { Router } from "express";
import { createAdmin, getaAdmin, getallAdmins, getallIssues, loginAdmin, triggerblockadmin, updateAdmin } from "../controllers/adminControllers.js";

import { authMiddleWareAdmin } from "../middleware/roleManage.js";

const router = Router()

router.route('/registeradmin').post(createAdmin);
router.route('/blockadmin').put(triggerblockadmin);
router.route('/getalladmins').get(authMiddleWareAdmin,getallAdmins);
router.route('/getaadmin').get(authMiddleWareAdmin,getaAdmin);
router.route('/updateadmin').put(authMiddleWareAdmin,updateAdmin);
router.route('/getIssues').get(authMiddleWareAdmin,getallIssues);
router.route('/adminlogin').get(loginAdmin)

export default router