import { Router } from "express";
import { createAdmin, getaAdmin, getallAdmins, getallIssues, triggerblockadmin, updateAdmin } from "../controllers/adminControllers.js";
import { createBook, getallBooks, updateBook } from "../controllers/bookController.js";


const router = Router()

router.route('/registeradmin').post(createAdmin);
router.route('/blockadmin').put(triggerblockadmin);
router.route('/getalladmins').get(getallAdmins);
router.route('/getaadmin').get(getaAdmin);
router.route('/updateadmin').put(updateAdmin);
router.route('/getIssues').get(getallIssues);
router.route('/createBook').post(createBook);
router.route('/getallBooks').get(getallBooks);
router.route('/updateBooks').put(updateBook);


export default router