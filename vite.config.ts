import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 8080, // Change the port to 8080
    host: true, // Optional: allows access from network (e.g., localhost or IP)
    open: true, // Optional: automatically opens the browser
  },
});
