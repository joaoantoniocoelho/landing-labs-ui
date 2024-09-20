import { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Heading, Text, VStack, InputGroup, InputRightElement, useDisclosure } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useLogin } from '../hooks/useLogin';
import { isValidEmail } from '@/utils/emailUtils';
import ForgotPasswordModal from '@/components/ForgotPasswordModal';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()

  const { handleLogin, isLoading } = useLogin();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !isValidEmail(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  const isFormValid = email && password && !emailError;

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
          <FormControl id="email" isInvalid={emailError}>
            <FormLabel color="brand.text">Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Digite seu email"
              focusBorderColor="brand.primary"
            />
            {emailError && <Text color="red.500" fontSize="sm">Email inválido</Text>}
          </FormControl>

          <FormControl id="password">
            <FormLabel color="brand.text">Senha</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                focusBorderColor="brand.primary"
              />
              <InputRightElement
                onClick={() => setShowPassword(!showPassword)}
                cursor="pointer"
                _hover={{ color: 'gray.600' }}
              >
                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            bg="brand.primary"
            color="text.secondary"
            width="full"
            mt={4}
            type="submit"
            isLoading={isLoading}
            isDisabled={!isFormValid}
            _hover={{ bg: 'interaction.greenHover' }}
          >
            Entrar
          </Button>

          <Text fontSize="sm" color="brand.text" textAlign="center" _hover={{ color: 'interaction.greenHover', cursor: 'pointer' }} onClick={onOpen}>
            Esqueceu a senha?
          </Text>
        </VStack>
      </Box>

      <ForgotPasswordModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
