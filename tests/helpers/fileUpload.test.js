import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: "dndyttpfh",
    api_key: "249964259886213",
    api_secret: "_KNVBynQqirRNQXtujlQtF-Q-wE",
    secure: true,
});

/* eslint-disable no-undef */

//Probando la subida de imagenes a Cloudinary y tambien eliminar la imagen despues de subirla

describe("Pruebas en fileUpload", () => {
    test("debe de subir un archivo correctamente a cloudinary", async () => {
        const imageUrl =
            "https://static.vecteezy.com/system/resources/previews/011/483/098/non_2x/anime-cute-girl-free-vector.jpg";
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], "foto.jpg");

        const url = await fileUpload(file);
        expect(typeof url).toBe("string");
        // console.log(url);

        const segments = url.split("/");
        const imageId = segments[segments.length - 1].replace(".jpg", "");
        // console.log(imageId);
        await cloudinary.api.delete_resources(["journal/" + imageId], {
            resource_type: "image",
            invalidate: true,
        });
    });

    test("debe de retornar null", async () => {
        const file = new File([], "foto.jpg");

        const url = await fileUpload(file);
        expect(url).toBe(null);
    });
});
