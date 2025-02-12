// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
<<<<<<< HEAD
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
=======
        hostname: 'images.unsplash.com',
>>>>>>> 4d37bc6 (language 2)
      },
    ],
  },
};

export default withNextIntl(nextConfig);
