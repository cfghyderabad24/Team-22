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
        type:Boolean,
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

teacherSchema.pre('save',async function(next){
    if(!this.isModified('tpassword')) { next() }
    const salt = await bcrypt.genSaltSync(10)   
    this.tpassword = await bcrypt.hash(this.tpassword,salt)
    next()
} )

teacherSchema.methods.createPasswordResetToken = async function(){
    const resetToken = crypto.randomBytes(32).toString("hex")
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    this.passwordResetExpires = Date.now() + 30 * 60 * 1000  // 30 minutes
    return resetToken
}


teacherSchema.methods.isPasswordMatched = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.tpassword)
}



const teacher = mongoose.model('teacher',teacherSchema)

export default teacher;