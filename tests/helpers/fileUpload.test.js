import { fileUpload } from "../../src/helpers/fileUpload";

/* eslint-disable no-undef */

//Probando la subida de imagenes a Cloudinary

describe("Pruebas en fileUpload", () => {
    test("debe de subir un archivo correctamente a cloudinary", async () => {
        const imageUrl =
            "https://static.vecteezy.com/system/resources/previews/011/483/098/non_2x/anime-cute-girl-free-vector.jpg";
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], "foto.jpg");
        const url = await fileUpload(file);
        expect(typeof url).toBe("string");
    });
});
