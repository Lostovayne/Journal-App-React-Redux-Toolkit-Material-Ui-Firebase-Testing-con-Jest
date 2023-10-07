import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "./../views/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
    return (
        <JournalLayout>
            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size="large"
                sx={{
                    color: "white",
                    backgroundColor: "error.main",
                    ":hover": {
                        backgroundColor: "error.main",
                        opacity: [0.9, 0.8, 0.7],
                        transition: "all 0.2s",
                    },
                    position: "fixed",
                    right: 50,
                    bottom: 50,
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    );
};
