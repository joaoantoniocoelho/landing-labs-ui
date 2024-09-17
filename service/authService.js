import api from './api';
export const login = async (email, password) => {
  try {
    const response = await api.post('/users/login', {
      email,
      password,
    });

    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Por favor, verifique os dados.');
  }
};
