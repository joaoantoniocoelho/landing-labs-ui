/** @type {import('next').NextConfig} */
const nextConfig = {
    // Ativar React Strict Mode para detectar problemas comuns
    reactStrictMode: true,
  
    // Configuração de reescritas para redirecionar /sitemap.xml e /robots.txt
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
  
    // Outras otimizações de performance e SEO
    images: {
        domains: ['www.landinglabs.com'], // Permitir o uso de imagens do seu domínio
    },
  
    // Compressão gzip para melhorar o desempenho
    compress: true,
  
    // Configuração de build otimizado
    swcMinify: true, // Usa o minificador SWC para melhorar o tempo de build e a performance do site
  
    // Se você planeja adicionar internacionalização no futuro
    i18n: {
        locales: ['pt-BR'], // Definir o locale padrão para o português do Brasil
        defaultLocale: 'pt-BR',
    },
};
  
export default nextConfig;
  