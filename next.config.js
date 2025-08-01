/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  images: {
    unoptimized: true,
    domains: [
      'images.pexels.com',
      'media.istockphoto.com',
      'plus.unsplash.com',
    ],
  },
};

module.exports = nextConfig;