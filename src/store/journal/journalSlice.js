import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: "journal",
    initialState: {
        isSaving: false,
        messageSaved: "",
        notes: [],
        active: null,
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },

        addNewEmpyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },

        setActiveNotes: (state, action) => {
            state.active = action.payload;
        },

        setNotes: (state, action) => {},

        setSaving: (state, action) => {},

        updateNote: (state, action) => {},

        deleteNoteById: (state, action) => {},
    },
});

export const {
    savingNewNote,
    addNewEmpyNote,
    setActiveNotes,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
} = journalSlice.actions;
