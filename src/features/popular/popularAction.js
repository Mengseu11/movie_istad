import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopular = createAsyncThunk('popular/fetch',
    async()=>{
        try {
            let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e23f92d8f170ad2fa576190611936eff`)
            let data = await response.json()
            console.log("fetch data",data)
            return data
            
        } catch (error) {
            return Promise.reject(error)
        }
    }
)