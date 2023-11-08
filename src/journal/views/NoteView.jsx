/* eslint-disable react-hooks/exhaustive-deps */
import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "./../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { useEffect } from "react";
import { setActiveNotes, startSaveNote } from "../../store/journal";

export const NoteView = () => {
    const { active: note } = useSelector((state) => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);
    const dispatch = useDispatch();

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNotes(formState));
    }, [formState]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    };

    return (
        <Grid container direction="row" justifyContent={"space-between"} alignItems={"center"} sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight={"light"}>
                    {dateString}
                </Typography>
            </Grid>

            <Grid item>
                <Button color="primary" sx={{ p: 2 }} onClick={onSaveNote}>
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

            {/* Image Gallery */}
            <ImageGallery />
        </Grid>
    );
};
