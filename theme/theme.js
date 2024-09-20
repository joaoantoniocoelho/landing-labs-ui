// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: '\'Roboto\', sans-serif',
        body: '\'Roboto\', sans-serif',
    },
    colors: {
        brand: {
            primary: '#2ecc71',
            secondary: '#fefefe',
            background: '#ecf0f1',
            text: '#333333',
        },
        interaction: {
            greenHover: '#27ae60',
        },
    },
});

export default theme;
