export async function getServerSideProps({ res }) {
    const baseUrl = 'https://pageexpress.io';

    const robotsTxt = `
User-agent: *
Disallow:
Sitemap: ${baseUrl}/sitemap.xml
`;

    // Definir o cabeçalho para garantir que o cache seja controlado adequadamente
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Expires', '0');
    res.setHeader('Pragma', 'no-cache');
    res.write(robotsTxt.trim());
    res.end();

    return {
        props: {}, // Sem necessidade de props, pois não há renderização
    };
}

export default function Robots() {
    return null;
}
