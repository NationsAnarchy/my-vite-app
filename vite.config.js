/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      includeAssets: ["android-chrome-512x512.png"],
      manifest: {
        name: "My PWA Application",
        short_name: "My PWA",
        description: "Me testing something",
        theme_color: "#000",
        icons: [
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
    }),
  ],
});
