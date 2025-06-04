import { createSlice } from "@reduxjs/toolkit";
import { fetchPeople, fetchPeopleDetail } from "./peopleAction";


const initialState = {
    data: {},
    status: "",
    error: {},
    detail: {}
}
export const peopleSlice = createSlice({
    name : "people",
    initialState: initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchPeople.fulfilled,(state,action) => {
                state.status = "SUCCESS"
                state.data = action.payload /* payload from api */

            })
            .addCase(fetchPeople.pending,(state,action) => {
                state.status = "PENDING"
            })
            .addCase(fetchPeople.rejected,(state,action) => {
                state.status = "ERROR"
                state.error = action.error
            })
            .addCase(fetchPeopleDetail.fulfilled,(state,action)=> {
                state.detail = action.payload
            })
    }
})

export default peopleSlice.reducer