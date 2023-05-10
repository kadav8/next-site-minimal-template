const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/hu',
        permanent: true,
      },
      {
        source: '/hu/about',
        destination: '/hu/rolam',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/hu/rolam',
        destination: '/hu/about',
      },
    ];
  }
}

module.exports = nextConfig
