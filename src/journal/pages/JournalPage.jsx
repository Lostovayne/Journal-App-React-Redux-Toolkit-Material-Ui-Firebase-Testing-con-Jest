/* eslint-disable no-extra-boolean-cast */
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "./../views/NothingSelectedView";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
    const { isSaving, active } = useSelector((state) => state.journal);
    const dispatch = useDispatch();

    const onClickNewNote = () => {
        dispatch(startNewNote());
    };

    return (
        <JournalLayout>
            {!!active ? <NoteView /> : <NothingSelectedView />}

            {!isSaving && (
                <IconButton
                    onClick={onClickNewNote}
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
                    <AddOutlined sx={{ fontSize: 30, color: "white" }} />
                </IconButton>
            )}
        </JournalLayout>
    );
};
