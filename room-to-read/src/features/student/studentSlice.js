import { createSlice, createAsyncThunk,createAction } from "@reduxjs/toolkit";

const initialState = {
    isError:false,
    isSuccess:false,
    isLoading:false,
}



const serverSlice = createSlice({
    name:'student',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
    //     builder.addCase(serverOnOrOff.pending,(state)=>{
    //         state.isError = false
    //         state.isSuccess = false
    //         state.isLoading = true
    // })
    }
})

export default serverSlice.reducer