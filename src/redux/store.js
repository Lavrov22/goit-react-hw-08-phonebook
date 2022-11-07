// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "redux/reducer";
import { contactsReducer,  filterReducer} from "redux/reducer";


// =======vanila============

// const enhacer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhacer);

// ======reduxToolkit======

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
})