import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { dirname } from "path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "src/core"),

      "@chief-police": path.resolve(__dirname, "src/modules/chief-police"),
      "@investigator": path.resolve(__dirname, "src/modules/investigator"),
      "@expert": path.resolve(__dirname, "src/modules/expert"),
      "@public-reporter": path.resolve(
        __dirname,
        "src/modules/public-reporter",
      ),
      "@review-police": path.resolve(__dirname, "src/modules/review-police"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
