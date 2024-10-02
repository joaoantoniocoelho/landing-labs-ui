import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme/theme';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
function App({ Component, pageProps }) {
    
    const router = useRouter();

    useEffect(() => {
        if (router.pathname !== '/' && router.pathname !== '/coming-soon') {
            router.replace('/coming-soon');
        }
    }, [router.pathname]);

    const chakraRoutes = ['/', '/coming-soon', '/dashboard', '/login', '/register'];
  
    const isChakraRoute = chakraRoutes.includes(router.pathname) || router.pathname.startsWith('/reset-password');

    return (
        <>
            <Head>
                <title>Page Express</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {isChakraRoute ? (
                <ChakraProvider theme={customTheme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            ) : (
                <Component {...pageProps} />
            )}
        </>
    );
}

export default App;
