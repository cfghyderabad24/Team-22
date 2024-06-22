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

// added inc for copies

export const getaBook = asyncHandler(async(req,res)=>{
    const {id} = req.body
    try {
        const getBook = await book.findById(id)
        if(!getBook) res.json({error:error,status:404})

        const updateViews = await book.findByIdAndUpdate(id,{
            $inc:{noc:1}  // increment function in mongodb
        },{new:true})
        res.json({getBook:getBook,status:201})
    } catch (error) {
        throw new Error(error)
    }
})


// added dec for copies

export const returnaBook = asyncHandler(async(req,res)=>{
    const {id} = req.body
    try {
        const returnBook = await book.findById(id)
        if(!returnBook) res.json({error:error,status:404})

        const updateViews = await book.findByIdAndUpdate(id,{
            $dec:{noc:1}  // decrement function in mongodb
        },{new:true})
        res.json({returnBook:returnBook,status:201})
    } catch (error) {
        throw new Error(error)
    }
})





