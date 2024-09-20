import api from './api';

export const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', {
            email,
            password,
        });

        return response.data; 
    } catch (error) {
        throw new Error();
    }
};

export const forgotPassword = async (email) => {
    try {
        const response = await api.post('/auth/forgot-password', { email });

        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Erro ao processar a solicitação.');
        } else {
            throw new Error('Erro ao conectar com o servidor.');
        }
    }
};
