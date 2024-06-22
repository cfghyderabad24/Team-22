import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    book_title:{type:String},
    bid:{type:String,required:true,unique:true},
    noc:{type:Number},
    level:{type:Number},
    genre:{type:String},
    bok_lan:{type:String},
    author:{type:String},
    publication_name:{type:String},
},{timestamps:true});

const book = mongoose.model("Book",bookSchema)

export default book