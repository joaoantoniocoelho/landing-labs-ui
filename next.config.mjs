/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/sitemap',
            },
            {
                source: '/robots.txt',
                destination: '/robots',
            },
        ];
    },
  
    images: {
        domains: ['https://page-express-ui.vercel.app'],
    },
  
    compress: true,
  
    swcMinify: true,
};
  
export default nextConfig;
  