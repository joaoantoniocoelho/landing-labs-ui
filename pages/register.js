import { Box, Button, Input, FormControl, FormLabel, Heading, VStack, Text, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { isValidEmail } from '@/utils/emailUtils';
import { registerUser } from '@/service/authService';
import { useCustomToast } from '@/hooks/useCustomToast';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [passwordLengthError, setPasswordLengthError] = useState(false);

    const { showSuccessToast, showErrorToast } = useCustomToast();
    const router = useRouter();

    
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await registerUser(name, email, password);
            showSuccessToast(data.message);

            router.push('/login');
        } catch (error) {
            showErrorToast(error.message);
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (value && !isValidEmail(value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePasswords(value, confirmPassword);
        validatePasswordLength(value);
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        validatePasswords(password, value);
    };

    const validatePasswords = (pass, confirmPass) => {
        setPasswordMatchError(pass !== confirmPass);
    };

    const validatePasswordLength = (pass) => {
        setPasswordLengthError(pass.length < 8);
    };

    const isFormValid = name && email && password && confirmPassword && !emailError && !passwordMatchError && !passwordLengthError;

    return (
        <>
            <Head>
                <title>Registro - Landing Labs</title>
                <meta name="description" content="Faça login em Landing Labs para acessar suas soluções digitais." />
            </Head>
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
                        Cadastro
                    </Heading>

                    <VStack spacing={4} as="form" onSubmit={onSubmit}>
                        <FormControl id="name">
                            <FormLabel color="brand.text">Nome</FormLabel>
                            <Input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Digite seu nome"
                                focusBorderColor="brand.primary"
                            />
                        </FormControl>

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

                        <FormControl id="password" isInvalid={passwordLengthError}>
                            <FormLabel color="brand.text">Senha</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={handlePasswordChange}
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
                            {passwordLengthError && <Text color="red.500" fontSize="sm">A senha deve ter no mínimo 8 caracteres</Text>}
                        </FormControl>

                        <FormControl id="confirmPassword" isInvalid={passwordMatchError}>
                            <FormLabel color="brand.text">Confirme sua senha</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    placeholder="Confirme sua senha"
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
                            {passwordMatchError && <Text color="red.500" fontSize="sm">As senhas não correspondem</Text>}
                        </FormControl>

                        <Button
                            colorScheme="green"
                            bg="brand.primary"
                            color="white"
                            width="full"
                            mt={4}
                            type="submit"
                            isDisabled={!isFormValid}
                            _hover={{ bg: 'interaction.greenHover' }}
                        >
                            Cadastrar
                        </Button>

                        <Text
                            fontSize="sm"
                            color="brand.text"
                            textAlign="center"
                            _hover={{ color: 'interaction.greenHover', cursor: 'pointer' }}
                            onClick={() => router.push('/login')}
                        >
                            Já possui conta? Clique para se conectar
                        </Text>
                    </VStack>
                </Box>
            </Box>
        </>
    );
}
