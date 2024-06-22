import admin from '../models/admin.js';
import contact from '../models/contactTeacher.js';
import asyncHandler from 'express-async-handler';

// Admin Creation
export const createBook = asyncHandler(async (request,response) => {
    const {bid} = request.body
    const findBook = await book.findOne({bid})
    if(!findBook){
        const newBook = book.create(request.body)
        response.status(201).json({newBook:newBook,status:201});
    }   
    else{
       response.status(404).json({message:"Admin already exists",status:404});
    }
});

// admin get all admins
export const getallBooks = asyncHandler(async (req,res)=>{
    try {
        const getBooks = await book.find()
        res.json({getBooks:getBooks,status:201})
    } catch (error) {
     res.json({error:error,status:404}) 
    }
})


