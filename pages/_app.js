import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme/theme';
import Head from 'next/head';
import '../pages/globals.css';

function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={customTheme}>
            <Head>
                <title>Landing Labs</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;
