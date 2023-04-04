import { configureStore } from "@reduxjs/toolkit";
import { authSlice, cartSlice, themeSlice } from "./slices";

export const store = configureStore({
    reducer: {
        cartReducer: cartSlice.reducer,
        authReducer: authSlice.reducer,
        themeReducer: themeSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch