import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme/theme';
import Head from 'next/head';
import '../pages/globals.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        if (router.pathname !== '/' && router.pathname !== '/coming-soon') {
            router.replace('/coming-soon');
        }
    }, [router.pathname]);

    return (
        <ChakraProvider theme={customTheme}>
            <Head>
                <title>Page Express</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;