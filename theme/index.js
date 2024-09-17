import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: '#2ecc71',       
    secondary: '#ffffff',    
    background: '#ecf0f1',   
  },

  text: {
    primary: '#333333',  
    secondary: '#ffffff',     
  },

  status: {
    error: '#e53e3e',         
    success: '#38a169',     
  },

  interaction: {
    greenHover: '#27ae60',    
  },
};

const theme = extendTheme({
  colors,
});

export default theme;
