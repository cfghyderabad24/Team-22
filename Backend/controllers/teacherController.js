import teacher from '../models/teacher.js';
import asyncHandler from 'express-async-handler';

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
        res.json({getStudents:getStudents,status:201})
        
    } catch (error) {
     res.json({error:error,status:404}) 
    }
})