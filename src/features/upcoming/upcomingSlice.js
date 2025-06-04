import { createSlice } from "@reduxjs/toolkit";
import { fetchUpcoming } from "./upcomingAction";


const initialState = {
    data : {},
    status : "",
    error : []
}

export const upcomingSlice = createSlice ({
    name : "upcoming",
    initialState : initialState,
    reducers : {},
    extraReducers(builder){
        builder
            .addCase(fetchUpcoming.fulfilled,(state,action)=>{
                state.status = "SUCCESS",
                state.data = action.payload
            })
            .addCase(fetchUpcoming.pending,(state,action)=>{
                state.status = "PENDING"
            })
            .addCase(fetchUpcoming.rejected,(state,action)=>{
                state.status = "ERROR",
                state.error = action.error
            })

    }
})

export default upcomingSlice.reducer