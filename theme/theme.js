import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: '\'Inter\', sans-serif',
        body: '\'Inter\', sans-serif',
    },
    colors: {
        brand: {
            primary: '#1A73E8', // Azul principal
            secondary: '#E0F7FA', // Azul claro suave
            background: '#F7F7F7', // Fundo branco
            whiteBackground: '#FFFFFF', // Branco puro para seções específicas
            button: '#28A745', // Verde esmeralda para os botões
        },
        text: {
            primary: '#212121', // Texto primário em cinza escuro
            secondary: '#FFFFFF', // Texto secundário em branco
        },
        interaction: {
            hover: '#24963E', // Um verde escuro suave para o hover nos botões
        },
    },
    components: {
        Stepper: {
            baseStyle: {
                stepIcon: {
                    bg: 'brand.primary', // Ícone de etapas concluídas com a cor brand.primary
                    borderColor: 'brand.primary', // Cor da borda das etapas
                },
                stepNumber: {
                    color: 'brand.primary', // Cor do número das etapas incompletas
                },
                stepSeparator: {
                    borderColor: 'brand.primary', // Cor da linha separadora
                },
            },
        },
    },
    styles: {
        global: {
            'html, body': {
                backgroundColor: 'brand.background',
                color: 'text.primary',
                minHeight: '100vh',
            },
        },
    },
});

export default theme;
