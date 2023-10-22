import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";

export const store = configureStore({
    reducer: {
        // nombre: nombreSlice.reducer,
        auth: authSlice.reducer,
    },
});
