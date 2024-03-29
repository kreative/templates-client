/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.kreativeusa.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
  async redirects() {
    return [
      {
        source: "/templates",
        destination: "/",
        permanent: true,
      },
      {
        source: "/categories",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
		enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
