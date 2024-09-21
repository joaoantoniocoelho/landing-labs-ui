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
            blue: '#2c3e50',
        },
        text: {
            primary: '#333333',
            secondary: '#fefefe',
        },
            
        interaction: {
            greenHover: '#27ae60',
            blueHover: '#3b5998'
        },
    },
});

export default theme;
