import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "redux/operation";

const handleRejected = (state, { payload }) => {
    state.operation = null;
    state.isLoading = '';
    state.error = payload;
};


export const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        operation: null,
    },
    extraReducers: {
        
        [fetchContacts.pending](state) {
            state.operation = 'fetch';
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, {payload}) {
            state.operation = null;
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending](state) {
            state.operation = 'add';
            state.isLoading = true;

        },
        [addContact.fulfilled](state, { payload }) { 
            state.operation = null;
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending](state, action) {
            state.operation = `${action.meta.arg}`
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, { payload }) { 
            state.operation = null;
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === payload.id);
            state.items.splice(index, 1);

        },
        [deleteContact.rejected]: handleRejected,

    }
})


export const contactsReducer = contactSlice.reducer;