export async function getServerSideProps({ res }) {
    const baseUrl = 'https://pageexpress.io';
  
    const robotsTxt = `
User-agent: *
Disallow:
Sitemap: ${baseUrl}/sitemap.xml
`;

    res.setHeader('Content-Type', 'text/plain');
    res.write(robotsTxt.trim()); // Use trim() para remover espaços extras
    res.end();
  
    return {
        props: {},
    };
}
  
export default function Robots() {
    return null; // Não renderiza nada
}
