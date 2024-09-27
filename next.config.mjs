/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        domains: ['page-express-ui.vercel.app'], // Remova https://
    },

    compress: true,

    swcMinify: true,

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
};

export default nextConfig;
