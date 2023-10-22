import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "./../../hooks";
import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";

export const LoginPage = () => {
    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: "epsaind@gmail.com",
        password: "123456",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        dispatch(checkingAuthentication(email, password));
    };

    const onGoogleSignIn = () => {
        console.log("On google sign in");
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
                    <Grid container spacing={2} sx={{ my: 1 }}>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ py: 1 }}
                                type="submit"
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
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction={"row"}
                        justifyContent="end"
                        sx={{ mt: 1 }}
                    >
                        <Link
                            component={RouterLink}
                            color="inherit"
                            to="/auth/register"
                        >
                            create a new account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
