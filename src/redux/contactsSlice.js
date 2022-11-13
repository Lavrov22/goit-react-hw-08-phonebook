import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "redux/operation";

const handleRejected = (state, { payload }) => {
    state.isLoading = '';
    state.error = payload;
};


export const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: '',
        error: null,
    },
    extraReducers: {
        
        [fetchContacts.pending](state) {
             state.isLoading = 'pending'
        },
        [fetchContacts.fulfilled](state, action) { 
            state.isLoading = '';
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending](state) {
             state.isLoading = 'pendingAddContact'
        },
        [addContact.fulfilled](state, { payload }) { 
            state.isLoading = '';
            state.error = null;
            state.items.push(payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending](state) {
             state.isLoading = 'pendingDeleteContact'
        },
        [deleteContact.fulfilled](state, { payload }) { 
            state.isLoading = "";
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === payload.id);
            state.items.splice(index, 1);

        },
        [deleteContact.rejected]: handleRejected,

    }
})


export const contactsReducer = contactSlice.reducer;