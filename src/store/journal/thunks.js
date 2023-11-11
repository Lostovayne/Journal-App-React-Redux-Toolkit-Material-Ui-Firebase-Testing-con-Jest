import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
    addNewEmpyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNotes,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
} from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: "xd",
            body: "",
            imageUrls: [],
            date: new Date().getTime(),
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);
        newNote.id = newDoc.id;
        dispatch(addNewEmpyNote(newNote));
        dispatch(setActiveNotes(newNote));
    };
};

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error("El UID del usuario no existe");
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        const noteToFireStore = { ...note };
        delete noteToFireStore.id;
        // Se eliminó el id de la nota ya que la ruta de la nota es incluye dicho id  y no es necesario para la base de datos
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });
        dispatch(updateNote(note));
    };
};

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving());
        // await fileUpload(files[0]);
        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }
        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrls));
    };
};

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);
        dispatch(deleteNoteById(note.id));
    };
};
