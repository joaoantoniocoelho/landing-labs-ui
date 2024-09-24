import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: '\'Roboto\', sans-serif',
        body: '\'Roboto\', sans-serif',
    },
    colors: {
        brand: {
            primary: '#6A1B9A', // Roxo principal
            secondary: '#F4ECF7', // Roxo claro para elementos secundários
            background: '#D5D8DC', // Cinza claro suave para o fundo da página
            whiteBackground: '#fefefe',
            button: '#8E44AD', // Roxo vibrante para os botões
        },
        text: {
            primary: '#333333', // Texto principal em cinza escuro
            secondary: '#fefefe', // Texto secundário em branco
        },
        interaction: {
            purpleHover: '#7D3C98', // Roxo mais escuro para hover em botões
        },
    },
    styles: {
        global: {
            'html, body': {
                backgroundColor: 'brand.background', // Define o background global
                color: 'text.primary', // Define a cor do texto padrão
                minHeight: '100vh',
            },
        },
    },
});

export default theme;