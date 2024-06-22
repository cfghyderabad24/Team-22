import admin from '../models/admin.js';
import asyncHandler from 'express-async-handler';

// Admin Creation
export const createAdmin = asyncHandler(async (request,response) => {
    const {aid} = request.body
    const findUser = await admin.findOne({aid})
    if(!findUser){
        const newAdmin = admin.create(request.body)
        response.status(201).json(newAdmin);
    }   
    else{
       response.status(404).json({message:"Admin already exists"});
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
