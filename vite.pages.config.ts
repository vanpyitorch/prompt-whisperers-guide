// Standalone static SPA build for GitHub Pages (no TanStack Start / server).
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import { renameSync, existsSync } from "node:fs";

export default defineConfig({
  base: "/prompt-whisperers-guide/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "pages-html-to-index",
      closeBundle() {
        const from = "dist-pages/pages.html";
        if (existsSync(from)) renameSync(from, "dist-pages/index.html");
      },
    },
  ],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
    rollupOptions: { input: "pages.html" },
  },
});
