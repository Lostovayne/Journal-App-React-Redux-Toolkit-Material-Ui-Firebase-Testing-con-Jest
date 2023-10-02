import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return (
        <AuthLayout title='Login'>
            <form action=''>
                <Grid container>
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
                        <Grid item xs={12} sm={4}>
                            <Button variant='contained' color='primary' fullWidth sx={{ py: 1 }}>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button variant='contained' color='primary' fullWidth sx={{ py: 1 }}>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction={'row'} justifyContent='end' sx={{ mt: 1 }}>
                        <Link component={RouterLink} color='inherit' to='/auth/register'>
                            create a new account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
