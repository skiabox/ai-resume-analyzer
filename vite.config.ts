import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    {
      name: "well-known-handler",
      configureServer(server) {
        server.middlewares.use(
          "/.well-known/appspecific/com.chrome.devtools.json",
          (req, res) => {
            res.setHeader("Content-Type", "application/json");
            res.end("{}");
          }
        );
      }
    }
  ]
});
