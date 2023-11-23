import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

/* eslint-disable no-undef */
describe("Pruebas en el authSlice", () => {
    test("Debe de regresar el estado inicial", () => {
        // console.log(authSlice);
        expect(authSlice.name).toBe("auth");
        const state = authSlice(initialState, {});
        expect(state).toEqual(initialState);
    });
});
