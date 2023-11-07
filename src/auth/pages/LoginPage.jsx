/* eslint-disable no-extra-boolean-cast */
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "./../../hooks";
import { useState } from "react";

const formValidations = {
    email: [(value) => value.includes("@"), "El correo debe de tener una @"],
    password: [(value) => value.length >= 6, "El password debe de tener mas de 6 caracteres"],
};

const formData = {
    email: "",
    password: "",
};

export const LoginPage = () => {
    const { status, errorMessage } = useSelector((state) => state.auth);
    const [formSubmitted, setformSubmitted] = useState(false);
    const dispatch = useDispatch();

    const { email, password, onInputChange, emailValid, passwordValid } = useForm(formData, formValidations);

    // Disabled buttons if status is equal to checking
    const isAuthenticating = useMemo(() => status === "checking", [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        setformSubmitted(true);
        // console.log({ email, password });
        dispatch(startLoginWithEmailPassword({ email, password }));
    };

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn">
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="correo@example.com"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={formSubmitted && emailValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="********"
                            variant="outlined"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={formSubmitted && passwordValid}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 1 }} display={!!errorMessage ? "" : "none"}>
                        <Alert variant="outlined" severity="error">
                            {errorMessage}
                        </Alert>
                    </Grid>
                    <Grid container spacing={2} sx={{ my: 1 }}>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ py: 1 }}
                                type="submit"
                                disabled={isAuthenticating}
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ py: 1 }}
                                onClick={onGoogleSignIn}
                                disabled={isAuthenticating}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction={"row"} justifyContent="end" sx={{ mt: 1 }}>
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            create a new account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
