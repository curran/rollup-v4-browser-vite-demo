import { defineConfig } from "vite";

// Inspired by
// https://github.com/mycelial/mycelial-js/issues/25#issuecomment-1533305723
// Turns out this was not needed, but I'm leaving it here for reference
// const wasmContentTypePlugin = {
//   name: "wasm-content-type-plugin",
//   configureServer(server) {
//     server.middlewares.use((req, res, next) => {
//       if (req.url.endsWith(".wasm")) {
//         res.setHeader("Content-Type", "application/wasm");
//       }
//       next();
//     });
//   },
// };

//  plugins: [wasmContentTypePlugin],
export default defineConfig({
  optimizeDeps: {
    exclude: ["@rollup/browser"],
  },
});
