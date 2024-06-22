import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import crypto from 'crypto'

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
    },
    refreshToken:{
        type:String,
        default:""
    },
},{timestamps:true})


adminSchema.pre('save',async function(next){
    if(!this.isModified('apassword')) { next() }
     console.log("eneter");
    const salt = await bcrypt.genSaltSync(10)   
    this.apassword = await bcrypt.hash(this.apassword,salt)
    next()
} )

adminSchema.methods.createPasswordResetToken = async function(){
    const resetToken = crypto.randomBytes(32).toString("hex")
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    this.passwordResetExpires = Date.now() + 30 * 60 * 1000  // 30 minutes
    return resetToken
}


adminSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.apassword)
}



const admin = mongoose.model('admin',adminSchema)

export default admin;