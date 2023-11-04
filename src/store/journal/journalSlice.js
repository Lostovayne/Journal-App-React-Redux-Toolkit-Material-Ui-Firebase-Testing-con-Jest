import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name: "journal",
    initialState: {
        isSaving: true,
        messageSaved: "",
        notes: [],
        active: null,
    },
    reducers: {
        addNewEmpyNote: (state, action) => {},

        setActiveNotes: (state, action) => {},

        setNotes: (state, action) => {},

        setSaving: (state, action) => {},

        updateNote: (state, action) => {},

        deleteNoteById: (state, action) => {},
    },
});

export const { addNewEmpyNot, setActiveNotes, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;
