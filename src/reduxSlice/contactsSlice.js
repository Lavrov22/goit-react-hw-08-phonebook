import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "reduxSlice/operation";

// const contactsInitialState = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
// ];

export const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    // reducers: {
    //     addContacts: {
    //         reducer(state, { payload }) {
    //             console.log(state.contacts)
    //             const contactName = state.map(contact =>
    //                 contact.name.toLowerCase());
    //         if (contactName.includes(payload.name.toLowerCase())) {
    //             alert(`${payload.name} is alredy in contacts`);
    //             return state;
    //         } else {
    //             state.splice(0, 0, payload);
    //         }
    //         },
    //         prepare({ name, number }) {
    //             return {
    //                 payload: {
    //                     id: nanoid(),
    //                     name,
    //                     number,
    //                 },
    //             };
    //         },
    //     },
    //     deleteContacts(state, { payload }) {
    //          return state.filter(contact => contact.id !== payload);
    //     }
    // },
    extraReducers: {
        
        [fetchContacts.pending](state) {
            state.isLoading = true;
         },
        [fetchContacts.fulfilled](state, action) { 
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state, action) { 
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.pending](state) {
            state.isLoading = true;
         },
        [addContact.fulfilled](state, { payload }) { 
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        },
        [addContact.rejected](state, action) { 
            state.isLoading = false;
            state.error = action.payload;
        },

    }
})



export const {  deleteContacts } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;