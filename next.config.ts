import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fitoyar.ir",
      },
    ],
  },
};

export default nextConfig;
