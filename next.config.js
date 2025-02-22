const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./app/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['abassdev.com'],
    },
};

module.exports = withNextIntl(nextConfig);