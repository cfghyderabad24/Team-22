import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";
import teacherServices from "./teacherService";
import { toast } from "react-toastify";
import cookies from "../../components/cookies";

const initialState = {
    isError:false,
    isSuccess:false,
    isLoading:false,
    teacherData:''
}


export const loginTeacher = createAsyncThunk('teacher/login', async (loginData, thunkAPI) => {
    try {
        return await teacherServices.loginTeacher(loginData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); 
    }
}); 




const teacherSlice = createSlice({
    name:'teacher',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loginTeacher.pending,(state)=>{
            state.isError = false
            state.isSuccess = false
            state.isLoading = true
        })
        .addCase(loginTeacher.fulfilled,(state,action)=>{
            state.isError = false
            state.isSuccess = true
            state.isLoading = false
            state.teacherData = action.payload
            if(action.payload?.status === 201)
            {
                toast.success("Login Sucess Access Navbar")
                cookies.set('teacherData',action.payload,{
                    expires:new Date(Date.now()+ 600000)
                })
                localStorage.setItem('Time LoggedIn',Date(Date.now()))
            }
            else if(action.payload?.status !== 201)
            {
                toast.error("Detais Enter Invalid")
            }
        })
        .addCase(loginTeacher.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message =action.error
        })
    }
})

export default teacherSlice.reducer