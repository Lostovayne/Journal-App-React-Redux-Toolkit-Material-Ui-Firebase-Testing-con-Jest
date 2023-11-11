import { Box, ImageList, ImageListItem } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const ImageGallery = ({ images = [] }) => {
    return (
        <Box sx={{ width: "100%", height: 500, overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={4} gap={8}>
                {images.map((item) => (
                    <ImageListItem key={item}>
                        <img
                            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item}?w=248&fit=crop&auto=format`}
                            alt={"Imagen Nota"}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};
