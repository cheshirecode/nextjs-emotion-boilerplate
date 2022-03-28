/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    emotion: true,
    modularizeImports: {
      ramda: {
        transform: 'ramda/{{member}}',
      },
    },
  },
}

module.exports = nextConfig