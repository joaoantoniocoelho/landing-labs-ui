export async function getServerSideProps({ req, res }) {
    const baseUrl = 'https://pageexpress.io';
    
    const host = req.headers.host;
    const isDevSubdomain = host.startsWith('dev.');

    const robotsTxt = isDevSubdomain
        ? `
User-agent: *
Disallow: /
`
        : `
User-agent: *
Disallow:
Sitemap: ${baseUrl}/sitemap.xml
`;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Expires', '0');
    res.setHeader('Pragma', 'no-cache');
    res.write(robotsTxt.trim());
    res.end();

    return {
        props: {},
    };
}

export default function Robots() {
    return null;
}
