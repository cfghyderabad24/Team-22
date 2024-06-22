import { Router } from "express";
import { createBook, getaBook, getallBooks, returnaBook, updateBook } from "../controllers/bookController.js";

import { authMiddleWareAdmin } from "../middleware/roleManage.js";


const router = Router()

router.route('/createbook').post(authMiddleWareAdmin,createBook)
router.route('/getallbooks').get(getallBooks)
router.route('/getabook').get(getaBook)
router.route('/updatebook').put(authMiddleWareAdmin,updateBook)
router.route('/returnabook').get(returnaBook)


export default router