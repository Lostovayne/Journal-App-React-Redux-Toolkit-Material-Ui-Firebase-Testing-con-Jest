import { Box, Toolbar } from "@mui/material";
import { Navbar, Sidebar } from "../components";

const drawerWidth = 280;

// eslint-disable-next-line react/prop-types
export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }} className="animate__animated animate__fadeIn">
            <Navbar drawerWidth={drawerWidth} />
            {/* Sidebar */}
            <Sidebar drawerWidth={drawerWidth} />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};
