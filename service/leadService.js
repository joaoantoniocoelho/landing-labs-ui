import api from './api';

export const registerLead = async (email) => {
    try {
        const response = await api.post('/lead/register-lead', {
            email,
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Ocorreu um erro ao registrar o lead.');
    }
};
