import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchToprated = createAsyncThunk('/toprated/fetch',
    async ()=> {
        try {
            let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=e23f92d8f170ad2fa576190611936eff`)
            return response.json()
        } catch (error) {
            return Promise.reject(error)
        }
    }
)