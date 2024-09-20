import { ChakraProvider } from "@chakra-ui/react";
import customTheme from '../theme/theme';
import Head from 'next/head';

function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={customTheme}>
            <Head>
                <title>Landing Labs</title>
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;
