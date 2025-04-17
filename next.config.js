/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // ←★これを追加！App Router用
  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dropbox.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
