import { defineConfig } from "vite";

// Inspired by
// https://github.com/mycelial/mycelial-js/issues/25#issuecomment-1533305723
const wasmContentTypePlugin = {
  name: "wasm-content-type-plugin",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.endsWith(".wasm")) {
        res.setHeader("Content-Type", "application/wasm");
      }
      next();
    });
  },
};

export default defineConfig({
  plugins: [wasmContentTypePlugin],
});
