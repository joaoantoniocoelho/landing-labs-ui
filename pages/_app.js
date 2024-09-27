import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme/theme';
import Head from 'next/head';
import '../pages/globals.css';
import withAuth from '@/hoc/withAuth';

function App({ Component, pageProps }) {
    const isDev = process.NEXT_ENV === 'dev';

    const ProtectedComponent = isDev ? withAuth(Component) : Component;
    return (
        <ChakraProvider theme={customTheme}>
            <Head>
                <title>Page Express</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <ProtectedComponent {...pageProps} />
        </ChakraProvider>
    );
}

export default App;
