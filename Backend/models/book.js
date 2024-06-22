import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    book_title:{type:String,required:true},
    bid:{type:String,required:true,unique:true},
    noc:{type:Number,required:true},
    level:{type:Number,required:true},
    genre:{type:String,required:true},
    bok_lan:{type:String,required:true},
    author:{type:String,required:true},
    publication_name:{type:String,required:true},
});

const book = mongoose.model("Book",bookSchema)

export default book