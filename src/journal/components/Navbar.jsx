import { LogoutOutlined } from '@mui/icons-material';
import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const Navbar = ({ drawerWidth }) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}>
            <Toolbar>
                <IconButton color='inherit' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>

                <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='h6' noWrap component='div'>
                        Journal App
                    </Typography>
                    <IconButton>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
