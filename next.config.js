const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./app/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Only rewrite the non-localized /blog path
      {
        source: '/blog/:path*',
        has: [
          {
            type: 'host',
            value: 'abassdev.com',
          },
        ],
        destination: 'http://server6.stormerhost.com/blog/:path*'
      },
      {
        source: '/blog/:path*',
        has: [
          {
            type: 'host',
            value: 'www.abassdev.com',
          },
        ],
        destination: 'http://server6.stormerhost.com/blog/:path*'
      },
      {
        source: '/ads.txt',
        destination: '/ads.txt'
      }
    ]
  },
  images: {
    domains: ['abassdev.com'],
  },
};

module.exports = withNextIntl(nextConfig);