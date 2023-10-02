import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const LoginPage = () => {
    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            minHeight={'100vh'}
            sx={{ backgroundColor: 'primary.main', padding: 4 }}>
            <Grid item xs={3} className='box-shadow' sx={{ backgroundColor: 'white', borderRadius: 2, padding: 3 }}>
                <Typography variant='h5' sx={{ mb: 1 }}>
                    Login
                </Typography>

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
            </Grid>
        </Grid>
    );
};
