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

export const getallStudents = asyncHandler(async (req,res)=>{
    try {
        const getStudents = await student.find()
        res.json(getStudents)
        
    } catch (error) {
     throw new Error(error)   
    }

})


// get a student


export const getaStudent = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.user;

        const getStudent =await student.findById(id)
        res.json(getStudent)
    } catch (error) {
        throw new Error(error)
    }
})



