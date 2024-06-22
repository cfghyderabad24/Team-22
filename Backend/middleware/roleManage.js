import expressAsyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken'
import admin from "../models/admin.js";
import teacher from "../models/teacher.js";


export const authMiddleWareAdmin = expressAsyncHandler(async (req,res,next)=>{
    const tokenavl = req.headers.authorization?.startsWith('Bearer')
    if(tokenavl){
        const token = req.headers.authorization.split(" ")[1];
        try {
            if(token){
                const decode = jwt.verify(token,process.env.JWT_SECRET)
                const adminRec = await admin.findById(decode?.id)
                req.admin = adminRec
                next()
            }
        } catch (error) {
            res.json({status:404,message:"Session TimeOut Login Again"})
        }
    }else{
        res.json({status:404,message:"Session TimeOut Login Again"})
    }
})

export const authMiddleWareTeacher = expressAsyncHandler(async (req,res,next)=>{
    const tokenavl = req.headers.authorization?.startsWith('Bearer')
    if(tokenavl){
        const token = req.headers.authorization.split(" ")[1];
        try {
            if(token){
                const decode = jwt.verify(token,process.env.JWT_SECRET)
                const teacherRec = await teacher.findById(decode?.id)
                req.teacher = teacherRec
                next()
            }
        } catch (error) {
            res.json({status:404,message:"Session TimeOut Login Again"})
        }
    }else{
        res.json({status:404,message:"Session TimeOut Login Again"})
    }
})