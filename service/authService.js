import api from './api';

export const registerUser = async (name, email, password) => {
    try {
        const response = await api.post('/auth/register', {
            name: name,
            email: email,
            password: password
        });

        return response.data;
    } catch {
        throw new Error();    
    }
};

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
    } catch {
        throw new Error();
    }
};

export const resetPassword = async (token, password) => {
    try {
        const response = await api.post(`/auth/reset-password/${token}`, {
            newPassword: password
        });

        return response.data;
    } catch (error) {
        throw new Error();
    }
};

export const validateToken = async (token) => {
    try {
        const response = await api.get(`/auth/validate-token/${token}`);

        return response.data;
    } catch (error) {
        throw new Error();
    }
};