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
        domains: ['www.landinglabs.com'], // Permitir o uso de imagens do seu domínio
    },
  
    compress: true,
  
    swcMinify: true, // Usa o minificador SWC para melhorar o tempo de build e a performance do site
};
  
export default nextConfig;
  