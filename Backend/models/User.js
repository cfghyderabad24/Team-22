import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, requried:true, unique:true},
    role: {type:String, required:true},
    password: {type:String, required:true},
    confirmPassword: {type:String, requried: true}
});

const GoogleSchema = new mongoose.Schema({
    googleId: {type:String, required:true},
    name: {type:String, required:true},
    email:{type:String, required:true},
});

const User = mongoose.model('User',UserSchema);
const Google = mongoose.model('Google',GoogleSchema);

export {User, Google}