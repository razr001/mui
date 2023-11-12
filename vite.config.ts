import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { visualizer } from "rollup-plugin-visualizer"
import path from "path";
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_HOST } = loadEnv(mode, process.cwd());
  return {
    plugins: [react(), removeConsole() /* visualizer({ open: true }) */],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // @替代src
      },
    },
    server: {
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: VITE_HOST,
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, '')
        },
      },
    },
  };
});
