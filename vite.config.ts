import vinext from "vinext";
import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { cloudflare } from "@cloudflare/vite-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    vinext(),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
  ssr: {
    noExternal: ["@next/third-parties", "third-party-capital"],
  },
  resolve: {
    alias: {
      "third-party-capital": path.resolve(__dirname, "node_modules/third-party-capital/lib/esm/index.js"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@config": path.resolve(__dirname, "./config"),
      "@/app": path.resolve(__dirname, "./app"),
      "@/components": path.resolve(__dirname, "./components"),
      "@/src": path.resolve(__dirname, "./src"),
      "@/config": path.resolve(__dirname, "./config"),
    },
  },
});
