import admin from '../models/admin.js';
import asyncHandler from 'express-async-handler';

// Admin Creation
export const createAdmin = asyncHandler(async (request,response) => {
    const {aid} = request.body
    const findUser = await admin.findOne({aid})
    if(!findUser){
        const newAdmin = admin.create(request.body)
        response.status(201).json({newAdmin:newAdmin,status:201});
    }   
    else{
       response.status(404).json({message:"Admin already exists",status:404});
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
        const getAdmin =await admin.findById(id)
        res.json({getAdmin:getAdmin,status:201})
    } catch (error) {
        res.json({error:error,status:404})
    }
})

// update admin

export const updateAdmin = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.body
        const updateadmin = await admin.findByIdAndUpdate(id,{
            aname:req?.body.aname,
            aphone:req?.body.aphone,
            aemail:req?.body.aemail,
        },{new:true})

        res.json({status:201,updateAdmin:updateadmin})

    } catch (error) {
        res.json({status:500,error:error})
    }
})

// block admin

export const triggerblockadmin = asyncHandler(async(req,res)=>{
    const {id} = req.body
    try {
        const triggerblock = await admin.findByIdAndUpdate(id,{
            isBlocked:!req.body?.isBlocked
        },{new:true})
        res.json({triggerblock:triggerblock,status:201})
    } catch (error) {
        res.json({status:404,error:error})
    }
})
