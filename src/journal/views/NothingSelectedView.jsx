import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            minHeight={"  calc(100vh - 110px)"}
            sx={{ backgroundColor: "primary.main", borderRadius: 3 }}
        >
            <Grid item xs={12}>
                <StarOutline sx={{ fontSize: 100, color: "white" }} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" color="white">
                    Selecciona o crea una entrada
                </Typography>
            </Grid>
        </Grid>
    );
};
