import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TechBridge – Digitalisierung, Produktentwicklung & KI-Automatisierung",
    short_name: "TechBridge",
    description: "Digitalisierung, Produktentwicklung & KI-Automatisierung für Schweizer Unternehmen",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#094D81",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
