/* eslint-disable no-unused-vars */
import { checkingCredentials, login, logout } from ".";
import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    };
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({
            email,
            password,
            displayName,
        });

        if (!ok) return dispatch(logout(errorMessage));

        dispatch(login({ uid, displayName, email, photoURL }));
    };
};
