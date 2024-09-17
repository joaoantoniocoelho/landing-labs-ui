// theme/index.js
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    primary: '#2ecc71',     // Green
    secondary: '#ecf0f1',   // Light Gray
    text: '#333333',        // Black
    background: '#ffffff',  // White
  },
};

// Customizando o tema
const theme = extendTheme({
  colors,
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'brand.background',
        color: 'brand.text',
        padding: 0,
        margin: 0,
        fontFamily: 'body',
      },
      a: {
        color: 'brand.primary',
        textDecoration: 'none',
      },
    },
  },
});

export default theme;
