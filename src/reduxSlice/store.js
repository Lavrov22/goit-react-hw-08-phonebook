import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "reduxSlice/contactsSlice";
import { filterReducer } from "reduxSlice/filterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
})