import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // destination: 'http://localhost:7001/:path*', // Proxy to Backend
        destination: 'https://mock.apifox.cn/m1/2398938-0-default/api/:path*', // Proxy to Mock Server
      },
    ];
  },
};

export default nextConfig;
