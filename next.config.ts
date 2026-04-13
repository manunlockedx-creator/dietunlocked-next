import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tools",
        destination: "/calculators",
        permanent: true,
      },
      {
        source: "/tools/:path*",
        destination: "/calculators/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
