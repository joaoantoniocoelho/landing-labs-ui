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
