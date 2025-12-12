import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { glob } from "glob";

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    rollupOptions: {
      input: glob.sync("resources/**/app/*.html"),
    },
  },
});
