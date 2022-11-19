import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

export const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        findContacts(_, { payload }) {
           return payload; 
        }
    }
})

export const { findContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;