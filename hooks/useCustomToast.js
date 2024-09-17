import { useToast } from '@chakra-ui/react';

export const useCustomToast = () => {
  const toast = useToast();

  const showSuccessToast = (title, description) => {
    toast({
      title: title || 'Operação bem-sucedida!',
      description: description || 'Ação completada com sucesso.',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const showErrorToast = (title, description) => {
    toast({
      title: title || 'Erro!',
      description: description || 'Algo deu errado. Tente novamente.',
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };

  return { showSuccessToast, showErrorToast };
};
