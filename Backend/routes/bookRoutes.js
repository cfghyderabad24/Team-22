import { Router } from "express";
import { createBook, getaBook, getallBooks, returnaBook, updateBook } from "../controllers/bookController.js";



const router = Router()

router.route('/createbook').post(createBook)
router.route('/getallbooks').get(getallBooks)
router.route('/getabook').get(getaBook)
router.route('/updatebook').put(updateBook)
router.route('/returnabook').get(returnaBook)


export default router