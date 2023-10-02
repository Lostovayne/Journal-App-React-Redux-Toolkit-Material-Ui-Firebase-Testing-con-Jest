import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title='Register'>
            <form action=''>
                <Grid container>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField label='Name' type='text' placeholder='Your Name' variant='outlined' fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <TextField
                            label='Email'
                            type='email'
                            placeholder='correo@example.com'
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mb: 1 }}>
                        <TextField
                            label='Password'
                            type='password'
                            placeholder='********'
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ my: 1 }}>
                        <Grid item xs={12}>
                            <Button variant='contained' color='primary' fullWidth sx={{ py: 1 }}>
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction={'row'} justifyContent='end' sx={{ mt: 1 }}>
                        <Typography>¿Already have an account? </Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login'>
                            Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
