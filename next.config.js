const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./app/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        has: [
          {
            type: 'host',
            value: 'abassdev.com',
          },
        ],
        destination: 'http://abassdev.com/blog/:path*'
      },
      {
        source: '/blog/:path*',
        has: [
          {
            type: 'host',
            value: 'www.abassdev.com',
          },
        ],
        destination: 'http://abassdev.com/blog/:path*'
      }
    ]
  },
    images: {
        domains: ['abassdev.com'],
    },
};

module.exports = withNextIntl(nextConfig);