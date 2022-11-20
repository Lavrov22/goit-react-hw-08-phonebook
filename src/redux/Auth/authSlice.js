import { createSlice } from "@reduxjs/toolkit";
import { register } from "redux/Auth/operations";
import { logIn } from "redux/Auth/operations";
import { logOut } from "redux/Auth/operations";

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
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        }
    },
})

export const authReducer = authSlice.reducer;