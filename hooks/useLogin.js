import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router'; 
import { useState } from 'react';
import { login } from '../service/authService';
import { useCustomToast } from '../hooks/useCustomToast';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showSuccessToast, showErrorToast } = useCustomToast();
  const router = useRouter();

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    
    try {
      const response = await login(email, password);
      const token = response.token;

      if (token) {
        localStorage.setItem('token', token);

        showSuccessToast('Login bem-sucedido', 'Você foi autenticado com sucesso.');

        router.push('/');
      }
    } catch (error) {
      showErrorToast('Erro no login', 'Verifique os dados.');
    }

    setIsLoading(false);
  };

  return { handleLogin, isLoading };
};
