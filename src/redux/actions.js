import { nanoid } from 'nanoid'
import { createAction } from "@reduxjs/toolkit";
// =======vanila============

// export const addContacts = ({ name, number }) => {
//     return {
//         type: "contacts/addContacts",
//         payload: {
//             id: nanoid(),
//             name,
//             number,
//         },
//     };
// };

// export const deleteContacts = (contactId) => {
//     return {
//         type: "contacts/deleteContacts",
//         payload: contactId,
//     };
// };

// export const changeFilter = (value) => {
//     return {
//         type: "filter/findContacts",
//         payload: value,
//     };
// };

// ======reduxToolkit======

export const addContacts = createAction("contacts/addContacts", ({ name, number }) => {
    return {
        payload: {
            id: nanoid(),
            name,
            number,
        },
    };
});

export const deleteContacts = createAction("contacts/deleteContacts");
export const findContacts = createAction("filter/findContacts");
