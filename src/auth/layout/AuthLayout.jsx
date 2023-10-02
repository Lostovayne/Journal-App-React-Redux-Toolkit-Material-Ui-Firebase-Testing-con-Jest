import { Grid, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            minHeight={'100vh'}
            sx={{ backgroundColor: 'primary.main', padding: 4 }}>
            <Grid
                item
                xs={3}
                className='box-shadow'
                sx={{
                    width: { sm: 550 },
                    backgroundColor: 'white',
                    borderRadius: 2,
                    padding: 3,
                }}>
                <Typography variant='h5' sx={{ mb: 1 }}>
                    {title}
                </Typography>
                {children}
            </Grid>
        </Grid>
    );
};
