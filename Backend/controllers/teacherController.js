import teacher from '../models/teacher.js';
import student from '../models/student.js';
import asyncHandler from 'express-async-handler';

// Teacher Creation
export const createTeacher = asyncHandler(async (request,response) => {
    const {tid} = request.body
    const findUser = await teacher.findOne({tid})
    if(!findUser){
        const newTeacher = admin.create(request.body)
        response.status(201).json(newTeacher);
    }   
    else{
       response.status(404).json({message:"Teacher already exists"});
    }
});


// Students Table Dashboard
export const getallStudents = asyncHandler(async (req,res)=>{
    try {
        const getStudents = await student.find()
        res.stauts(201).json({getStudents})
        
    } catch (error) {
     res.status(404).json({message:"No Students Data"}) 
    }
});

// Get a particular student data

export const getaStudent = asyncHandler(async(request,response)=>{
    try {
        const {id} = request.user;
        const getStudent =await student.findById(id)
        res.status(201).json(getStudent)
    } catch (error) {
        res.status(404).json({message:"Student Data Missing"})
    }
});






