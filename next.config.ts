import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Exporta como HTML estático
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes (GitHub Pages no soporta imágenes optimizadas)
  },
  basePath: "/thomas-landing", // Cambia esto por el nombre de tu repo
  assetPrefix: "/thomas-landing",
};

export default nextConfig;
