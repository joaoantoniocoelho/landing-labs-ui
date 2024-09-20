import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
        primary: '#2ecc71',       
        secondary: '#fefefe',    
        background: '#ecf0f1',   
    },

    text: {
        primary: '#333333',  
        secondary: '#fefefe',     
    },
    
    interaction: {
        greenHover: '#27ae60',    
    },
};

const theme = extendTheme({
    colors,
});

export default theme;
