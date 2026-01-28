import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      // Alias '@' to the 'src' directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), tsconfigPaths(), tailwindcss()],
});
