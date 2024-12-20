/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'shop.riotgames.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;