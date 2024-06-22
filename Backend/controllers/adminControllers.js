import admin from '../models/admin.js';
import asyncHandler from 'express-async-handler';

// Admin Creation
export const createAdmin = asyncHandler(async (request,response) => {
    const {aid} = request.body
    const findUser = await admin.findOne({aid})
    if(!findUser){
        const newAdmin = admin.create(request.body)
        response.status(201).json(newAdmin);
    }   
    else{
       response.status(404).json({message:"Admin already exists"});
    }
});

// admin get all admins
export const getallAdmins = asyncHandler(async (req,res)=>{
    try {
        const getAdmins = await admin.find()
        res.json({getAdmins:getAdmins,status:201})
        
    } catch (error) {
     res.json({error:error,status:404}) 
    }
})

// admin get a admin

export const getaAdmin = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.body;
        const getAdmin =await student.findById(id)
        res.json({getAdmin:getAdmin,status:201})
    } catch (error) {
        res.json({error:error,status:404})
    }
})

// update admin

export const updateUser = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.body
        const updateadmin = await student.findByIdAndUpdate(id,{
            aname:req?.body.aname,
            aphone:req?.body.aphone,
            aemail:req?.body.aemail,
        },{new:true})

        res.json({status:201})

    } catch (error) {
        res.json({status:500,error})
    }
})

