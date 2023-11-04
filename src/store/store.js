import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { journalSlice } from "./journal";

export const store = configureStore({
    reducer: {
        // nombre: nombreSlice.reducer,
        auth: authSlice.reducer,
        journal: journalSlice.reducer,
    },
});
