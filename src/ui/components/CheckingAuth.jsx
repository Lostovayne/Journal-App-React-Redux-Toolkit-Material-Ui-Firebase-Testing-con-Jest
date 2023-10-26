import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            minHeight={"100vh"}
            sx={{ backgroundColor: "primary.main", padding: 4 }}
        >
            <Grid
                item
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <CircularProgress color="warning" />
            </Grid>
        </Grid>
    );
};
