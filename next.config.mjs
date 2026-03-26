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

export default nextConfig;
