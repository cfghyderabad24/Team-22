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
        res.json({getStudents:getStudents,status:201})
        
    } catch (error) {
     res.json({error:error,status:404}) 
    }

})


// get a student


export const getaStudent = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.user;

        const getStudent =await student.findById(id)
        res.json({getStudent:getStudent,status:201})
    } catch (error) {
        res.json({error:error,status:404})
    }
})

// delete a student 

export const deleteStudent = asyncHandler(async (req,res)=>{
    try {
        const {id} = req.params
        const deletestudent = await student.findByIdAndDelete(id)
            res.json({
               deletestudent: deletestudent,
               status:201
            })

    } catch (error) {
        res.json({error:error,status:404})
    }
})


