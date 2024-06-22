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
        type:Number
    },
    uage:{
        type:Number
    },
    uSchool:{
        type:String
    },
    refreshToken:{
        type:String,
        default:""
    },
    
},{timestamps:true})


const student = mongoose.model('student',studentSchema)

export default student;