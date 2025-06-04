import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import movieReducer from './features/movie/movieSlice'
import authReducer from './features/auth/authSlice'
import peopleReducer from './features/people/peopleSlice'
import popularReducer from './features/popular/popularSlice'
import topratedReducer from './features/toprated/topratedSlice'
import latestReducer from './features/latest/latestSlice'
import upcomingReducer from './features/upcoming/upcomingSlice'
export const store = configureStore({
  reducer: {
    counter : counterReducer,
    movie: movieReducer,
    auth : authReducer,
    people : peopleReducer,
    popular : popularReducer,
    toprated : topratedReducer,
    latest : latestReducer,
    upcoming : upcomingReducer,
  },  
})