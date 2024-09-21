import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Landing Labs é a sua plataforma de soluções digitais inovadoras." />
                <meta name="keywords" content="landing labs, soluções digitais, inovação, tecnologia" />
                <meta name="author" content="Landing Labs" />
                <meta property="og:title" content="Landing Labs - A revolução digital" />
                <meta property="og:description" content="Landing Labs é a sua plataforma de soluções digitais inovadoras." />
                <meta property="og:url" content="https://www.landinglabs.com" />
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
