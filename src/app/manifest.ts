import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: "#d6e8b5",
    background_color: "#fcb51d",
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "icons/icon512_maskable.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "icons/icon512_rounded.png",
        type: "image/png",
      },
    ],
    orientation: "any",
    display: "standalone",
    dir: "auto",
    lang: "ko-KR",
    name: "pwa-study",
    short_name: "pwa",
    start_url: "/",
    scope: "/",
    description: "redstone: pwa-study",
  };
}
