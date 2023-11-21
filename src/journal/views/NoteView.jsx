/* eslint-disable react-hooks/exhaustive-deps */
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import {
    setActiveNotes,
    startDeletingNote,
    startSaveNote,
    startUploadingFiles,
} from "../../store/journal";
import { ImageGallery } from "../components";
import { useForm } from "./../../hooks/useForm";

export const NoteView = () => {
    const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);
    const dispatch = useDispatch();

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNotes(formState));
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire("Nota actualizada", messageSaved, "success");
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    };

    const onFileInputChange = ({ target }) => {
        dispatch(startUploadingFiles(target.files));
    };

    const onDelete = () => {
        dispatch(startDeletingNote());
    };

    return (
        <Grid
            container
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight={"light"}>
                    {dateString}
                </Typography>
            </Grid>

            <Grid item>
                <input
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                />

                <IconButton
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                    color="primary"
                >
                    <UploadOutlined />
                </IconButton>

                <Button color="primary" sx={{ p: 2 }} onClick={onSaveNote} disabled={isSaving}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Escriba un titulo "
                    label="Título"
                    sx={{ border: "none", mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió esta mañana?"
                    // label="Título"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container justifyContent={"end"}>
                <Button
                    onClick={onDelete}
                    sx={{
                        mt: 2,
                        color: "error",
                    }}
                >
                    <DeleteOutline />
                    Borrar
                </Button>
            </Grid>

            {/* Image Gallery */}
            <ImageGallery images={note.imageUrls} />
        </Grid>
    );
};
