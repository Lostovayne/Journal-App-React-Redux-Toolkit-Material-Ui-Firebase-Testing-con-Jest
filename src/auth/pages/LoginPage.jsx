/* eslint-disable no-extra-boolean-cast */
import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "./../../hooks";

export const LoginPage = () => {
    const { status, errorMessage } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: "email@email.com",
        password: "123456",
    });

    // Disabled buttons if status is equal to checking
    const isAuthenticating = useMemo(() => status === "checking", [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log({ email, password });
        dispatch(startLoginWithEmailPassword({ email, password }));
    };

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
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
