import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { FirebaseAuth } from "./config";

export const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // User info
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        const errorMessage = error.message;
        const errorCode = error.code;

        return {
            ok: false,
            errorMessage,
            errorCode,
        };
    }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        //*Actualizar el displayName en firebase
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName,
        };
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message,
        };
    }
};
