import { Router } from "express";
import { createAdmin, getaAdmin, getallAdmins, triggerblockadmin, updateAdmin } from "../controllers/adminControllers.js";


const router = Router()

router.route('/registeradmin').post(createAdmin)
router.route('/blockadmin').put(triggerblockadmin)
router.route('/getalladmins').get(getallAdmins)
router.route('/getaadmin').get(getaAdmin)
router.route('/updateadmin').put(updateAdmin)


export default router