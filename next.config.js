/* eslint @typescript-eslint/no-var-requires: "off" */
const { i18n } = require('./next-i18next.config');

// Redirect root url to login page

const redirects = [
  {
    source: '/',
    destination: '/auth/login',
    permanent: true,
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['boxyhq.com'],
  },
  i18n,
  async redirects() {
    return redirects;
  },
};

module.exports = nextConfig;
