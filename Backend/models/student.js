import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    uid:{
        type:String,
        unique:true,
        required:true
    },
    uname:{
        type:String,
        required:true
    },
    ulevel:{
        type:String
    },
    uage:{
        type:String
    },
    uSchool:{
        type:String
    }
},{timestamps:true})


const student = mongoose.model('student',studentSchema)

export default student;