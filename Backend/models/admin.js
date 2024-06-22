import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    aid:{
        type:String,
        unique:true,
        required:true
    },
    aname:{
        type:String,
        required:true
    },
    apassword:{
        type:String
    },
    aphone:{
        type:String
    },
    aemail:{
        type:String
    },
    isBlocked:{
        type:Boolean
    }
},{timestamps:true})


const admin = mongoose.model('admin',adminSchema)

export default admin;