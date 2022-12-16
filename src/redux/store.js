import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";
import tokenReducer from "./tokenReducer";
import userReducer from "./userReducer";


export const store = configureStore({
    reducer: {
        // auth
        movieReducer: movieReducer,
        userReducer: userReducer,
        tokenReducer: tokenReducer
    }
});