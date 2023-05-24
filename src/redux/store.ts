import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Penyimpanan lokal

import restoReducer from "./slices/restoSlices";

// Konfigurasi untuk redux-persist
const persistConfig = {
  key: "root", // Kunci untuk menyimpan state
  storage, // Penyimpanan lokal yang digunakan
};

// Reducer yang akan dipersist
const rootReducer = combineReducers({
  resto: restoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // Reducer yang telah dipersist

export const store = configureStore({
  reducer: persistedReducer, // Menggunakan reducer yang telah dipersist
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store); // Mempersist state ke dalam penyimpanan lokal
