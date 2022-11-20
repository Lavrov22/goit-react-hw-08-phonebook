import { createSlice } from "@reduxjs/toolkit";
import { register } from "redux/Auth/operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
    },
})

export const authReducer = authSlice.reducer;