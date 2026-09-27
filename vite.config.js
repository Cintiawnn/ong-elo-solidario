import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({

    root: ".",

    publicDir: "imagens",

    build: {
        outDir: "dist",
        emptyOutDir: true,

        rollupOptions: {
            input: resolve(__dirname, "html/index.html")
        }
    }

});