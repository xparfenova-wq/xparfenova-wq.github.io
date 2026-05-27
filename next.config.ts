import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  output: isGhPages ? "export" : undefined,
  basePath: isGhPages ? (process.env.NEXT_BASE_PATH ?? "/anton-site") : "",
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: isGhPages ? true : false,
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
