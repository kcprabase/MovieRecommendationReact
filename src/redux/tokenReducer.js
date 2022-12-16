import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: {key: 'xxx.yyy.zzz', logggedIn: true},
    reducers:{
        
    }
});

export default tokenSlice.reducer;