/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'shop.riotgames.com',
          pathname: '/**', // Allow all image paths from Google
        },
      ],
    },
  };
  
  export default nextConfig;