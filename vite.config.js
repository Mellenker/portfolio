import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/.netlify/functions/get-projects": {
        target: "https://mellenkerbackend2.netlify.app",
        changeOrigin: true,
      },
      "/images": {
        target: "https://mellenkerbackend2.netlify.app",
        changeOrigin: true,
      },
    },
  },
});
