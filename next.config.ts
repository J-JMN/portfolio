import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/skills",
        destination: "/experience",
        permanent: true,
      },
      {
        source: "/services/website-design",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/projects/6",
        destination: "/projects/sun-rays-foundation",
        permanent: true,
      },
      {
        source: "/projects/2",
        destination: "/projects/stratedge-solutions",
        permanent: true,
      },
      {
        source: "/projects/4",
        destination: "/projects/nyota-roots",
        permanent: true,
      },
      {
        source: "/projects/1",
        destination: "/projects/chanzo-technologies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
