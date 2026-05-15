import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
