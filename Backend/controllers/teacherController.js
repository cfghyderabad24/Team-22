import teacher from '../models/teacher.js';
import asyncHandler from 'express-async-handler';

export const createAdmin = asyncHandler(async (request,response) => {
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