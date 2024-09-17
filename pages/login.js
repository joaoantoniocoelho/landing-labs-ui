import { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Heading, Text, VStack } from '@chakra-ui/react';
import { useLogin } from '../hooks/useLogin';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { handleLogin, isLoading } = useLogin(); 

  const onSubmit = async (e) => {
    e.preventDefault(); 
    handleLogin(email, password);
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="brand.secondary"
      px={6}
    >
      <Box
        maxW="md"
        width="full"
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center" color="brand.text">
          Login
        </Heading>

        <VStack spacing={4} as="form" onSubmit={onSubmit}>
          <FormControl id="email">
            <FormLabel color="brand.text">Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              focusBorderColor="brand.primary"
            />
          </FormControl>

          <FormControl id="password">
            <FormLabel color="brand.text">Senha</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              focusBorderColor="brand.primary"
            />
          </FormControl>

          <Button
            colorScheme="green"
            bg="brand.primary"
            color="white"
            width="full"
            mt={4}
            type="submit" 
            isLoading={isLoading} 
            _hover={{ bg: 'interaction.greenHover' }}
          >
            Entrar
          </Button>

          <Text fontSize="sm" color="brand.text" textAlign="center">
            Esqueceu a senha?
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}
