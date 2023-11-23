export const initialState = {
    status: "checking", // "checking", "not-authenticated" , "authenticated"
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authenticatedState = {
    status: "authenticated", // "checking", "not-authenticated" , "authenticated"
    uid: "123ABC",
    email: "demo@Google.cl",
    displayName: "Demo User",
    photoURL: "https://demo.png",
    errorMessage: null,
};

export const notAuthenticatedState = {
    status: "not-authenticated", // "checking", "not-authenticated" , "authenticated"
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const demoUser = {
    uid: "ABC123",
    email: "demo@Google.cl",
    displayName: "Demo User",
    photoURL: "https://demo.png",
};
