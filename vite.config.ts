import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [viteSingleFile()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "flight-card": "resources/flight-card/mcp-app/flight-card-mcp-app.html",
        // Add more HTML resources here as needed
      },
    },
  },
});
