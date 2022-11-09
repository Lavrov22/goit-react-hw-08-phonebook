import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const contactsInitialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
];

export const contactSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContacts: {
            reducer(state, { payload }) {
                const contactName = state.map(contact =>
                    contact.name.toLowerCase());
            if (contactName.includes(payload.name.toLowerCase())) {
                alert(`${payload.name} is alredy in contacts`);
                return state;
            } else {
                state.splice(0, 0, payload);
            }
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContacts(state, { payload }) {
             return state.filter(contact => contact.id !== payload);
        }
    }
})

export const { addContacts, deleteContacts } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;