import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Real-Time-Communication-and-Collaboration-Platform/",
  build: {
    outDir: 'dist'
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
