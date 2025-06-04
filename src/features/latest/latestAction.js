import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLatest = createAsyncThunk('/latest/fetch',
    async()=>{
        try {
            let response  = await fetch(`https://api.themoviedb.org/3/tv/latest?api_key=e23f92d8f170ad2fa576190611936eff`)
            return response.json()
        } catch (error) {
            return Promise.reject(error)
        }
    }
)