import mongoose from 'mongoose';

const GoogleSchema = new mongoose.Schema({
    googleId: {type:String, required:true},
    name: {type:String, required:true},
    email:{type:String, required:true},
},{timestamps:true});

const Google = mongoose.model('Google',GoogleSchema);

export {Google}