import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";
import studentServices from "./studentServices";
import { toast } from "react-toastify";

const initialState = {
    isError:false,
    isSuccess:false,
    isLoading:false,
}


export const studentRegistration = createAsyncThunk('auth/register', async (registerData, thunkAPI) => {
    try {
        return await studentServices.registerStudent(registerData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); 
    }
}); 



const serverSlice = createSlice({
    name:'student',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(studentRegistration.pending,(state)=>{
            state.isError = false
            state.isSuccess = false
            state.isLoading = true
        })
        .addCase(studentRegistration.fulfilled,(state,action)=>{
            state.isError = false
            state.isSuccess = true
            state.isLoading = false
            if(action.payload?.status === 201) toast.success("Student Registration Completed")
            else if(action.payload?.status === 404){
                toast.error('Student Registration Failed')
            }
        })
        .addCase(studentRegistration.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message =action.error
        })
    }
})

export default serverSlice.reducer