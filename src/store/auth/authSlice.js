import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "not-authenticated", // "checking", "not-authenticated" , "authenticated"
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) => {},

        logout: (state, payload) => {},

        checkingCredentials: (state, action) => {
            state.status = "checking";
        },
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
