import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
        pathname: "**",
      },
    ],
    qualities: [90],
  },
};
export default nextConfig;
