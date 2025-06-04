import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router";
import { fetchToprated } from "./toprateAction";

const initialState={
    data : {},
    status : "",
    error : {}
}

export const topratedSlice = createSlice({
    name : "toprated",
    initialState : initialState,
    reducers : "",
    extraReducers(builder){
        builder
            .addCase(fetchToprated.fulfilled, (state,action)=>{
                state.status = "SUCCESS"
                state.data = action.payload
            })
            .addCase(fetchToprated.pending,(state,action)=>{
                state.status = "Pending"
            })
            .addCase(fetchToprated.rejected,(state,action)=>{
                state.status = "ERROR"
                state.error = action.error
            })

    }
})

export default topratedSlice.reducer