import { Box, Button, Input, FormControl, FormLabel, VStack, Text, InputGroup, InputRightElement, Heading, Center, Link, Icon, useDisclosure } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ViewIcon, ViewOffIcon, CheckCircleIcon } from '@chakra-ui/icons'; 
import { resetPassword, validateToken } from '@/service/authService';
import { useRouter } from 'next/router';
import ForgotPasswordModal from '@/components/ForgotPasswordModal';
import Head from 'next/head';

export default function RegisterPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [passwordLengthError, setPasswordLengthError] = useState(false);
    const [tokenValid, setTokenValid] = useState(true); 
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false); 

    const router = useRouter();
    const { token } = router.query;

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (token) {
            const validateJwtToken = async () => {
                try {
                    await validateToken(token);
                    setTokenValid(true);
                } catch (error) {
                    setTokenValid(false);
                } finally {
                    setLoading(false);
                }
            };
            validateJwtToken();
        }
    }, [token]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!tokenValid) {
            return;
        }

        try {
            await resetPassword(token, password);
            setSuccess(true);
        } catch (error) {
            console.error(error.message);
        } finally {
            setPassword('');
            setConfirmPassword('');
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

    const isFormValid = password && confirmPassword && !passwordMatchError && !passwordLengthError;

    if (loading) {
        return <p>Verificando token...</p>;
    }

    return (
        <>
            <Head>
                <title>Alterar senha - Page Express</title>
                <meta name="description" content="Altere sua senha em Page Express." />
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
                        Alterar senha
                    </Heading>

                    {!tokenValid ? (
                        <>
                            <Text color="red.500" textAlign="center">O token é inválido ou expirou. Solicite uma nova alteração de senha.</Text>
                            <Center mt={4}>
                                <Button
                                    bg="brand.primary"
                                    color="text.secondary"
                                    onClick={onOpen}
                                    _hover={{ bg: 'interaction.greenHover' }} 
                                >
                                    Solicitar nova senha
                                </Button>
                            </Center>
                            <ForgotPasswordModal isOpen={isOpen} onClose={onClose} />
                        </>
                    ) : success ? (
                        <Center>
                            <VStack spacing={6}>
                                <Icon as={CheckCircleIcon} w={12} h={12} color="green.500" />
                                <Text fontSize="lg" color="brand.text">
                                    Senha alterada com sucesso!
                                </Text>
                                <Link href="/login" color="brand.primary" fontSize="lg">
                                    Clique para fazer login
                                </Link>
                            </VStack>
                        </Center>
                    ) : (
                        <VStack spacing={4} as="form" onSubmit={onSubmit}>
                            <FormControl id="password" isInvalid={passwordLengthError}>
                                <FormLabel color="brand.text">Nova Senha</FormLabel>
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
                                <FormLabel color="brand.text">Confirme sua nova senha</FormLabel>
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

                            <Center mt={4}>
                                <Button
                                    bg="brand.primary"
                                    color="text.secondary"
                                    width="full"
                                    type="submit"
                                    isDisabled={!isFormValid}
                                    _hover={{ bg: 'interaction.greenHover' }}
                                >
                                    Alterar senha
                                </Button>
                            </Center>
                        </VStack>
                    )}
                </Box>
            </Box>
        </>
    );
}
