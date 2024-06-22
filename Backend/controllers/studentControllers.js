import student from "../models/student.js"
import asyncHandler from 'express-async-handler';


export const createStudent = asyncHandler( async (req,res)=>{
    const {uid} = req.body
    const findUser = await student.findOne({uid})
    if(!findUser){
        const newStudent = student.create(req.body)
        res.json({status:201})
    }   
    else{
       res.json({status:404})
    }
})

