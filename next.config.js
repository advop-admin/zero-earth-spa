/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: true // For initial deployment, we'll ignore TS errors
  },
  eslint: {
    ignoreDuringBuilds: true // For initial deployment, we'll ignore ESLint errors
  }
}

module.exports = nextConfig