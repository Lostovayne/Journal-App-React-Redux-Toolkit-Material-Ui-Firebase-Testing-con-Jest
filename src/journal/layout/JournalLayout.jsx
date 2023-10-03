import { Box } from '@mui/material';
import { Navbar } from '../components';

const drawerWidth = 240;

// eslint-disable-next-line react/prop-types
export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar drawerWidth={drawerWidth} />
            {/* Sidebar */}

            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                {/* Toolbar */}
                {children}
            </Box>
        </Box>
    );
};
