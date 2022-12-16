import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk('user/getuser', async (token) => {
    const config = {
        headers: {
            authorization: 'Bearer ' + token
        }
    };
    const response = await axios.get("http://localhost:8080/api/users/me", config);
    return response.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: { user: {} },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    }
});

export default userSlice.reducer;