import { useState } from 'react';
import {
    Box,
    Button,
    Input,
    FormControl,
    FormLabel,
    Heading,
    Text,
    VStack,
    InputGroup,
    InputRightElement,
    useDisclosure
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { isValidEmail } from '@/utils/emailUtils';
import ForgotPasswordModal from '@/components/ForgotPasswordModal';
import { login } from '@/service/authService';
import { useCustomToast } from '@/hooks/useCustomToast';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { showSuccessToast, showErrorToast } = useCustomToast();
    const router = useRouter();

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

        setIsLoading(true);

        try {
            const data = await login(email, password);

            localStorage.setItem('authToken', data.token);
            showSuccessToast(data.message);
            router.push('/dashboard');
        } catch (error) {
            showErrorToast(error.message);
        } finally {
            setEmail('');
            setPassword('');
            setIsLoading(false);
        }
    };

    const isFormValid = email && password && !emailError;

    return (
        <>
            <Head>
                <title>Login - Page Express</title>
                <meta name="description" content="Faça login em Page Express para acessar suas soluções digitais." />
            </Head>
            <Box
                minH="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="brand.background"  
                px={6}
            >
                <Box
                    maxW="md"
                    width="full"
                    bg="brand.whiteBackground"  
                    p={8}
                    borderRadius="lg"
                    boxShadow="lg"
                >
                    <Heading as="h2" size="lg" mb={6} textAlign="center" color="text.primary">
                        Login
                    </Heading>

                    <VStack spacing={4} as="form" onSubmit={onSubmit}>
                        <FormControl id="email" isInvalid={emailError}>
                            <FormLabel color="text.primary">Email</FormLabel>
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
                            <FormLabel color="text.primary">Senha</FormLabel>
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
                            bg="brand.button"
                            color="text.secondary"
                            width="full"
                            mt={4}
                            type="submit"
                            borderRadius="full"
                            isLoading={isLoading}
                            isDisabled={!isFormValid}
                            _hover={{ bg: 'interaction.hover' }}
                        >
                            Entrar
                        </Button>

                        <Text
                            fontSize="sm"
                            color="text.primary"
                            textAlign="center"
                            _hover={{ color: 'interaction.hover', cursor: 'pointer' }}
                            onClick={onOpen}
                        >
                            Esqueceu a senha?
                        </Text>

                        <Text
                            fontSize="sm"
                            color="text.primary"
                            textAlign="center"
                            _hover={{ color: 'interaction.hover', cursor: 'pointer' }}
                            onClick={() => router.push('/register')}
                        >
                            Não possui conta? Clique para se cadastrar
                        </Text>
                    </VStack>
                </Box>

                <ForgotPasswordModal isOpen={isOpen} onClose={onClose} />
            </Box>
        </>
    );
}
