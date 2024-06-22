import admin from '../models/admin.js';
import asyncHandler from 'express-async-handler';


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