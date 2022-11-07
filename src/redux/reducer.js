// import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, findContacts } from "redux/actions";
// ============vanila=================

// const contactsInitialState = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
// ];

// export const contactsReducer = (state = contactsInitialState, {type, payload}) => {
//     switch (type) {
//         case "contacts/addContacts":
//             const contactName = state.map(contact =>
//                 contact.name.toLowerCase());
//             if (contactName.includes(payload.name.toLowerCase())) {
//                 alert(`${payload.name} is alredy in contacts`);
//                 return state;
//             } else {
//                 return [payload, ...state]
//             };

//         case "contacts/deleteContacts":
//             return state.filter(contact => contact.id !== payload);
//         default:
//             return state;
//     }
// };

// const filterInitialState = '';

// export const filterReducer = (state = filterInitialState, { type, payload }) => {
//     switch (type) {
//         case "filter/findContacts":
//             return payload;
//         default:
//             return state;
//     }
// }

// export const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// })


// ======reduxToolkit======

const contactsInitialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
];

export const contactsReducer = createReducer(contactsInitialState, {
    [addContacts]: (state, {payload}) => {
        const contactName = state.map(contact =>
                contact.name.toLowerCase());
            if (contactName.includes(payload.name.toLowerCase())) {
                alert(`${payload.name} is alredy in contacts`);
                return state;
            } else {
                state.splice(0, 0, payload);
            };
    },
    [deleteContacts]: (state, { payload }) => {
        return state.filter(contact => contact.id !== payload);
    }
})


const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
    [findContacts]: (state, { payload }) => {
        return payload;
    }
})



