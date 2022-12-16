import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getMovies = createAsyncThunk('movie/getMovies',  async (token) => {
    const config = {
        headers: {
            authorization: 'Bearer ' + token
        }
    };
    let response = await axios.get("http://localhost:8080/api/movies", config);
    return response.data;
});

const movieSlice = createSlice(
    {
        name: 'movie',
        initialState: {movies: []},
        reducers: {},
        extraReducers: (builder)=>{
            builder.addCase(getMovies.fulfilled, (state, action)=>{
                state.movies = action.payload;
            });
        }
    }
);

export default movieSlice.reducer;