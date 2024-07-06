// import react from "@vitejs/plugin-react-swc";
// import { defineConfig } from "vite";
// import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     host: "0.0.0.0",
//   },
//   plugins: [
//     react(),
//     ViteImageOptimizer({
//       jpg: {
//         quality: 85,
//       },
//       png: {
//         quality: 10,
//       },
//     }),
//   ],
//   build: {
//     outDir: "dist",
//     assetsDir: "assets",
//   },
// });
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 85,
      },
      png: {
        quality: 10,
      },
    }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
