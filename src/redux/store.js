import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "redux/contacts/contactsSlice";
import { filterReducer } from "redux/contacts/filterSlice";
import { authReducer } from "redux/Auth/authSlice";
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer
});

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// }
// const persistedauthReducer = persistReducer(authPersistConfig, authReducer);


export const store = configureStore({
  // reducer: {
  //   auth: persistedauthReducer,
  //   contacts: rootReducer,
  // },
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
  // devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);