import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";
import teacherServices from "./teacherService";
import { toast } from "react-toastify";
import cookies from "../../components/cookies";

const initialState = {
    isError:false,
    isSuccess:false,
    isLoading:false,
}


// export const studentRegistration = createAsyncThunk('auth/register', async (registerData, thunkAPI) => {
//     try {
//         return await teacherServices.registerStudent(registerData);
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.response.data); 
//     }
// }); 


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
            state.LoginData = action.payload
            if(action.payload?.status === 201)
            {
                toast.success("Login Sucess")
                cookies.set('teacherData',action.payload,{
                    expires:new Date(Date.now()+ 600000)
                })
                localStorage.setItem('Time LoggedIn',Date(Date.now()))
            }
            else if(action.payload?.status === 404)
            {
                toast.error("Password Not Matched")
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