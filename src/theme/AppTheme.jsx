import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { purpleTheme } from './';

// eslint-disable-next-line react/prop-types
export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme}>
            {children}
            <CssBaseline />
        </ThemeProvider>
    );
};
