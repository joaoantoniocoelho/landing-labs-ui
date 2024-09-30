import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                {/* Meta Tags Básicas */}
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Crie páginas profissionais e otimizadas para SEO com o Page Express. Fácil, rápido e sem necessidade de conhecimento técnico. Ideal para negócios, autônomos e quem busca uma presença digital eficiente." />
                <meta name="keywords" content=" page express, criação de páginas, páginas personalizadas, landing pages, site profissional, criar site fácil, presença digital, SEO para pequenos negócios, criar páginas para negócios, soluções digitais, criar páginas rápidas, plataforma de criação de sites, site para autônomos, site para profissionais liberais" />
                <meta name="author" content="Page Express" />
                {process.env.NEXT_ENV === 'dev' && (
                    <meta name="robots" content="noindex, nofollow" />
                )}
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://pageexpress.io" />

                {/* Open Graph Meta Tags (para redes sociais) */}
                <meta property="og:title" content="Page Express - A revolução digital" />
                <meta property="og:description" content="Crie páginas profissionais e otimizadas para SEO com o Page Express. Fácil, rápido e sem necessidade de conhecimento técnico. Ideal para negócios, autônomos e quem busca uma presença digital eficiente." />
                <meta property="og:url" content="https://pageexpress.io/" />
                <meta property="og:image" content="/og-image.png" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />

                {/* Fonte Google */}
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
