import { createSlice } from "@reduxjs/toolkit"
import { fetchLatest } from "./latestAction"

const initialState = {
    data : {},
    status : "",
    error : {},
}

export const latestSlice = createSlice({
    name : "latest",
    initialState : initialState,
    reducers : "",
    extraReducers(builder){
        builder
            .addCase(fetchLatest.fulfilled,(state,action)=>{
                state.status = "SUCCESS"
                state.status = action.payload
            })
            .addCase(fetchLatest.pending,(state,action)=>{
                state.status = "Pending"
            })
            .addCase(fetchLatest.rejected,(state,action)=>{
                state.status = "ERROR"
                state.error = action.error
            })
    }
})

export default latestSlice.reducer