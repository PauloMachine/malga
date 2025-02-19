import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    if (config.optimization && config.optimization.splitChunks) {
      config.optimization.splitChunks.chunks = "all";
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/checkout",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
