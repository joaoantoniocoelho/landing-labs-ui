/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        domains: ['pageexpress.io'],
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
