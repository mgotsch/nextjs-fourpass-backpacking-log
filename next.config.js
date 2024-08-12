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
  async redirects() {
    return [
      {
        source: '/read-file',
        destination: '/api/read-file',
        permanent: true,
      },
    ];
  },
}

experimental: {
  images: {
      allowFutureImage: true
  }
}