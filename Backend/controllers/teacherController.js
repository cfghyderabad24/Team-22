import teacher from '../models/teacher.js';
import generateToken from '../utils/jwtToken.js';
import asyncHandler from 'express-async-handler';


// Teacher Creation
export const createTeacher = asyncHandler(async (request,response) => {
    const {tid} = request.body
    const findUser = await teacher.findOne({tid})
    if(!findUser){
        const newTeacher = teacher.create(request.body)
        response.status(201).json({newTeacher:newTeacher,status:201});
    }   
    else{
       response.status(404).json({message:"Teacher already exists"});
    }
});

// Teacher Login

export const loginTeacher = asyncHandler(async (req,res)=>{
    const {temail,tpassword} = req.body;
    // check if teacher exist or not 
    const findTeacher = await teacher.findOne({temail});

    if(!findTeacher) res.json({status:404})

    if(findTeacher?.isBlocked === true) res.json({status:409,message:"Account Blocked"})
    
    if(findTeacher && await findTeacher.isPasswordMatched(tpassword)){
        const refreshToken = await generateToken(findTeacher?._id)
        const updateteacher = await teacher.findByIdAndUpdate(findTeacher?.id,{
            refreshToken:refreshToken
        },{new:true})

        res.cookie('refreshToken',refreshToken,{
            httpOnly:true,
            maxAge:72*1
        })

        res.json({
            _id:findTeacher?._id,
            tname:findTeacher?.tname,
            temail:findTeacher?.temail,
            tphone:findTeacher?.tphone,
            status:201
        })
    }else{
        res.json({status:404,message:"Invalid Credentials"})
    }
})


// teacher get all teachers
export const getallTeachers = asyncHandler(async (req,res)=>{
    try {
        const getTeachers = await teacher.find()
        res.json({getTeachers:getTeachers,status:201})
        
    } catch (error) {
     res.json({error:error,status:404}) 
    }
})

// teacher get a teacher

export const getaTeacher = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.body;
        const getTeacher =await teacher.findById(id)
        res.json({getTeacher:getTeacher,status:201})
    } catch (error) {
        res.json({error:error,status:404})
    }
})

// update teacher

export const updateTeacher = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.body
        const updateteacher = await teacher.findByIdAndUpdate(id,{
            tname:req?.body.tname,
            tphone:req?.body.tphone,
            temail:req?.body.temail,
        },{new:true})

        res.json({status:201,updateteacher:updateteacher})

    } catch (error) {
        res.json({status:500,error:error})
    }
})

// block teacher

export const triggerblockteacher = asyncHandler(async(req,res)=>{
    const {id} = req.body
    try {
        const triggerblock = await teacher.findByIdAndUpdate(id,{
            isBlocked:!req.body?.isBlocked
        },{new:true})
        res.json({triggerblock:triggerblock,status:201})
    } catch (error) {
        res.json({status:404,error:error})
    }
})





