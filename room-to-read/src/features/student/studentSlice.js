import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";
import studentServices from "./studentServices";

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