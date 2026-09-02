import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/RBDIGITAL",
  assetPrefix: "/RBDIGITAL/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/RBDIGITAL",
    NEXT_PUBLIC_SITE_URL: "https://gabrielmenezesc.github.io/RBDIGITAL",
  },
};

export default nextConfig;
