import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPeople = createAsyncThunk('/people/fetch',
    async()=>{
        try{
            let response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=e23f92d8f170ad2fa576190611936eff`)
            return response.json()
        }catch(error){
            return Promise.reject(error)
        }
    }
)

export const fetchPeopleDetail = createAsyncThunk('/peopleDetail/fetch',
    async(personId)=>{
        try {
            let response = await fetch (`https://api.themoviedb.org/3/person/${personId}?api_key=e23f92d8f170ad2fa576190611936eff`)
            return response.json()
        } catch (error) {
            return Promise.reject(error)
        }
    }
)

export const fetchKnownfor = createAsyncThunk('/knownfor/fetch',
    async(personId)=>{
        try {
            let response = await fetch(`https://api.themoviedb.org/3/person/${personId}/combined_credits?api_key=e23f92d8f170ad2fa576190611936eff`)
            return response.json()
        } catch (error) {
            return Promise.reject(error)
        }
    }
)