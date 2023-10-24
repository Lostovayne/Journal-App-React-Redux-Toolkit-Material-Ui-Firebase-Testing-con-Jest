import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";

const formData = {
    email: "epsaind@gmail.com",
    password: "123456",
    displayName: "Franco",
};

const formValidations = {
    email: [(value) => value.includes("@"), "El correo debe de tener una @"],
    password: [(value) => value.length >= 6, "El password debe de tener mas de 6 caracteres"],
    displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
    const [formSubmitted, setformSubmitted] = useState(false);

    const {
        formState,
        displayName,
        email,
        password,
        onInputChange,
        isFormValid,
        displayNameValid,
        emailValid,
        passwordValid,
    } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setformSubmitted(true);
        console.log(formState);
    };

    return (
        <AuthLayout title="Register">
            <h1>FormValid {isFormValid ? "Válido" : " Invalid"} </h1>

            <form action="" onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label="Name"
                            type="text"
                            placeholder="Your Name"
                            variant="outlined"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                    </Grid>

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
                            helperText={emailValid}
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
                            helperText={passwordValid}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ my: 1 }}>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ py: 1 }}
                                type="submit"
                            >
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction={"row"} justifyContent="end" sx={{ mt: 1 }}>
                        <Typography>¿Already have an account? </Typography>
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
