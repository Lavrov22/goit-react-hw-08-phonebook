import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "reduxSlice/contactsSlice";
import { filterReducer } from "reduxSlice/filterSlice";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
})


