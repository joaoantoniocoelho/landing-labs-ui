export async function getServerSideProps({ res }) {
    const baseUrl = 'https://www.landinglabs.com';  // Substitua pelo domínio real do seu site
  
    const robotsTxt = `
      User-agent: *
      Disallow:
      Sitemap: ${baseUrl}/sitemap.xml
    `;
  
    // Enviar o conteúdo do robots.txt como resposta
    res.setHeader('Content-Type', 'text/plain');
    res.write(robotsTxt);
    res.end();
  
    return {
        props: {},
    };
}
  
export default function Robots() {
    return null;
}
  