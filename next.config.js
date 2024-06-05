const { hostname } = require("os");

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol:'https',
        hostname:'res.cloudinary.com',
      },
    ],
  },
}

experimental: {
  images: {
      allowFutureImage: true
  }
}