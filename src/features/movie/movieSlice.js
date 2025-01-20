import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./movieAction";

const initialState = {
    data: {},
    status: "",
    error: {}
}
export const movieSlice = createSlice({
    name : "movie",
    initialState: initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchMovies.fulfilled,(state,action) => {
                state.status = "SUCCESS"
                state.data = action.payload /* payload from api */

            })
            .addCase(fetchMovies.pending,(state,action) => {
                state.status = "PENDING"
            })
            .addCase(fetchMovies.rejected,(state,action) => {
                state.status = "ERROR"
                state.error = action.error
            })

    }
})

export default movieSlice.reducer