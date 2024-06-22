import asyncHandler from 'express-async-handler';
import book from '../models/book.js';

// Book Creation
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

// get all books
export const getallBooks = asyncHandler(async (req,res)=>{
    try {
        const getBooks = await book.find()
        res.json({getBooks:getBooks,status:201})
    } catch (error) {
     res.json({error:error,status:404}) 
    }
})

// get a book
export const getaBook = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.body;
        const getBook =await book.findById(id)
        res.json({getBook:getBook,status:201})
    } catch (error) {
        res.json({error:error,status:404})
    }
})

// update a book

export const updateBook = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.body
        const updatebook = await book.findByIdAndUpdate(id,{
            book_title:req?.body?.book_title,
            noc:req?.body?.noc,
            level:req?.body?.level,
            genre:req.body?.genre,
            bok_lan:req.body?.bok_lan,
            author:req.body?.author,
            publication_name:req.body?.publication_name
        },{new:true})

        res.json({status:201,updatebook:updatebook})

    } catch (error) {
        res.json({status:500,error:error})
    }
})




