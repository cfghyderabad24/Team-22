import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";
import checkoutServices from "./checkoutService";
import { toast } from "react-toastify";

const initialState = {
    isError:false,
    isSuccess:false,
    isLoading:false,
}


export const checkinSli = createAsyncThunk('teacher/checkin', async (registerData, thunkAPI) => {
    try {
        return await checkoutServices.checkin(registerData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); 
    }
}); 

export const checkoutSli = createAsyncThunk('teacher/checkout', async (registerData, thunkAPI) => {
    try {
        return await checkoutServices.checkout(registerData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data); 
    }
}); 



const checkInOutSlice = createSlice({
    name:'checkout',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(checkinSli.pending,(state)=>{
            state.isError = false
            state.isSuccess = false
            state.isLoading = true
        })
        .addCase(checkinSli.fulfilled,(state,action)=>{
            state.isError = false
            state.isSuccess = true
            state.isLoading = false
            if(action.payload?.status === 201) toast.success("Checkin Completed")
            else if(action.payload?.status === 404){
                toast.error('Checkin Failed')
            }
        })
        .addCase(checkinSli.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message =action.error
        })
        builder.addCase(checkoutSli.pending,(state)=>{
            state.isError = false
            state.isSuccess = false
            state.isLoading = true
        })
        .addCase(checkoutSli.fulfilled,(state,action)=>{
            state.isError = false
            state.isSuccess = true
            state.isLoading = false
            if(action.payload?.status === 201) toast.success("Checkin Completed")
            else if(action.payload?.status === 404){
                toast.error('Checkin Failed')
            }
        })
        .addCase(checkoutSli.rejected,(state,action)=>{
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message =action.error
        })
    }
})

export default checkInOutSlice.reducer