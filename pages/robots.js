export async function getServerSideProps({ res }) {
    const baseUrl = 'https://page-express-ui.vercel.app/';
  
    const robotsTxt = `
      User-agent: *
      Disallow:
      Sitemap: ${baseUrl}/sitemap.xml
    `;
  
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
  