/**
 * @type {import('next').NextConfig}
**/

const isVercel = process.env.VERCEL_URL !== undefined;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
    ],
  },
};

if (!isVercel) {
  nextConfig.images.loader = 'akamai';
  nextConfig.images.path = '';
  nextConfig.images.unoptimized = true;
}

export default nextConfig;
