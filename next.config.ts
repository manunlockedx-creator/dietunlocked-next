import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tools",
        has: [{ type: "host", value: "manunlocked.com" }],
        destination: "https://www.manunlocked.com/calculators",
        permanent: true,
      },
      {
        source: "/tools/:path*",
        has: [{ type: "host", value: "manunlocked.com" }],
        destination: "https://www.manunlocked.com/calculators/:path*",
        permanent: true,
      },
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
