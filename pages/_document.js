import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Page Express é a sua plataforma de soluções digitais inovadoras." />
                <meta name="keywords" content="Page Express, soluções digitais, inovação, tecnologia" />
                <meta name="author" content="Page Express" />
                <meta property="og:title" content="Page Express - A revolução digital" />
                <meta property="og:description" content="Page Express é a sua plataforma de soluções digitais inovadoras." />
                <meta property="og:url" content="https://page-express-ui.vercel.app/" />
                <meta property="og:image" content="/og-image.png" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
