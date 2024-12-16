import path from "path";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };

    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 480, 600, 640, 750, 768, 828, 980, 1080, 1200, 1560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  i18n: {
    locales: ["en", "uk"],
    defaultLocale: "en",
    localeDetection: false,
  },
};

export default nextConfig;
