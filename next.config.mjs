import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

if (typeof globalThis !== 'undefined') {
  Object.defineProperty(globalThis, 'localStorage', {
    get: function() {
      return undefined;
    },
  });
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
};

export default withNextIntl(nextConfig);
