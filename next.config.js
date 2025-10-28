/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  transpilePackages: ['three', 'react-globe.gl'],
}

module.exports = nextConfig
