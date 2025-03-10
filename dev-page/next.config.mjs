/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
          protocol: 'https',
          hostname: 'prowly-prod.s3.eu-west-1.amazonaws.com',
        }]
      },
};

export default nextConfig;
