import type { MetadataRoute } from "next";
import { defaultDescription } from "../lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "INTAVOR",
    short_name: "INTAVOR",
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0B1220",
    theme_color: "#7163FF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "256x256",
        type: "image/x-icon",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
