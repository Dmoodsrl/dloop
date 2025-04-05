/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: false,
  experimental: {
    forceSwcTransforms: true,
    swcTraceProfiling: false
  }
};

module.exports = nextConfig;