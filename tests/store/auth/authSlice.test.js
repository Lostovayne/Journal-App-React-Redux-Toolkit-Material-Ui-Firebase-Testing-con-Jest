import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import {
    authenticatedState,
    demoUser,
    initialState,
    notAuthenticatedState,
} from "../../fixtures/authFixtures";

/* eslint-disable no-undef */
describe("Pruebas en el authSlice", () => {
    test("Debe de regresar el estado inicial", () => {
        // console.log(authSlice);
        expect(authSlice.name).toBe("auth");
        const state = authSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test("Debe de autenticar el usuario", () => {
        // console.log(login(demoUser));
        const state = authSlice.reducer(initialState, login(demoUser));
        expect(state).toEqual({
            status: "authenticated",
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        });
    });

    test("Debe se Realizar el logout", () => {
        const state = authSlice.reducer(authenticatedState, logout());
        expect(state).toEqual(notAuthenticatedState);
    });

    test("Debe de realizar el checking authentication", () => {
        const state = authSlice.reducer(authenticatedState, checkingCredentials());
        expect(state.status).toBe("checking");
    });
});
