import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay()
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.url, "../client/src"),
      "@shared": path.resolve(import.meta.url, "../shared"),
      "@assets": path.resolve(import.meta.url, "../attached_assets")
    }
  },
  root: path.resolve(import.meta.url, "../client"),
  build: {
    outDir: path.resolve(import.meta.url, "../client/dist"), // <- match Express
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});
