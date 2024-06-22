import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    tid:{
        type:String,
        unique:true,
        required:true
    },
    tname:{
        type:String,
        required:true
    },
    tpassword:{
        type:String
    },
    tphone:{
        type:String
    },
    temail:{
        type:String
    },
    isBlocked:{
        type:String,
    },
    refreshToken:{
        type:String,
        default:""
    },
    studentmap:[{
        student:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"student"
        }
}]
},{timestamps:true})


const teacher = mongoose.model('teacher',teacherSchema)

export default teacher;