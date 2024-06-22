import { Router } from "express";
import { createBook, getaBook, getallBooks, returnaBook, updateBook } from "../controllers/bookController";



const router = Router()

router.route('/createbook').post(createBook)
router.route('/getallbooks').get(getallBooks)
router.route('/getabook').put(getaBook)
router.route('/updatebook').put(updateBook)
router.route('/returnabook').put(returnaBook)


export default router