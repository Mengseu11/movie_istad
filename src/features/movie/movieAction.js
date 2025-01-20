import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies  = createAsyncThunk('/product/fetch',
    async () => {
        try{
            let response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=e23f92d8f170ad2fa576190611936eff')
            return await response.json()
        } catch(error) {
            return Promise.reject(error)
            
        }
    }
)