const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.macaly-user-data.dev',
        pathname: '/**',
      },
    ],
  },
  devIndicators: false,
};

module.exports = nextConfig;
