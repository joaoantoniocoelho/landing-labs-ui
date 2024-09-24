import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: '\'Roboto\', sans-serif',
        body: '\'Roboto\', sans-serif',
    },
    colors: {
        brand: {
            primary: '#6A1B9A', // Main purple
            secondary: '#F4ECF7', // Light purple for secondary elements
            background: '#D5D8DC', // Soft light gray for page background
            whiteBackground: '#fefefe', // White background for specific sections
            button: '#8E44AD', // Vibrant purple for buttons
        },
        text: {
            primary: '#333333', // Primary text in dark gray
            secondary: '#fefefe', // Secondary text in white
        },
        interaction: {
            purpleHover: '#7D3C98', // Darker purple for button hover states
        },
    },
    styles: {
        global: {
            'html, body': {
                backgroundColor: 'brand.background', // Sets the global background
                color: 'text.primary', // Sets the default text color
                minHeight: '100vh',
            },
        },
    },
});

export default theme;
