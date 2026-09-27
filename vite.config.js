import { defineConfig } from "vite";

export default defineConfig({

    root: "html",

    publicDir: "../imagens",

    build: {
        outDir: "../dist",
        emptyOutDir: true
    }

});