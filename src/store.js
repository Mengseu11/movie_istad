import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import movieReducer from './features/movie/movieSlice'
import authReducer from './features/auth/authSlice'

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    movie: movieReducer,
    auth : authReducer,
  },  
})