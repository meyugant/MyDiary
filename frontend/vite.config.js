import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    // proxy: {
    //   "/api": "http://localhost:3000",
    // },
    host: true,
    port: 5173,
  },
  plugins: [react()],
  base: "/",
});
