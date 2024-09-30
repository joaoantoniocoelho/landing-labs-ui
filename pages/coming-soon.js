import { Box, Heading, Text, Input, Button, VStack, Container, keyframes, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { registerLead } from '../service/leadService';
  
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ComingSoon = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleLeadSubmit = async () => {
        if (!email) {
            toast({
                title: 'Erro',
                description: 'Por favor, insira um e-mail válido.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        setLoading(true);

        try {
            const response = await registerLead(email);

            toast({
                title: 'Sucesso!',
                description: 'Você foi inscrito com sucesso. Verifique seu e-mail!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            setEmail('');
        } catch (error) {
            toast({
                title: 'Erro',
                description: error.message || 'Ocorreu um erro. Tente novamente.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Box
                bg="brand.primary"
                minH="50vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="text.secondary"
                py={{ base: 10, md: 16 }}
                px={{ base: 4, md: 8 }}
                overflowX="hidden"
            >
                <Container
                    maxW={{ base: '100%', sm: 'lg', md: '2xl', lg: '3xl' }}
                    textAlign="center"
                >
                    <Heading as="h1" size={{ base: 'xl', md: '2xl', lg: '3xl' }} mb={6} textShadow="2px 2px 8px rgba(0, 0, 0, 0.2)" mt={{ base: 6, md: 0 }}>
                        Prepare-se para transformar sua presença online!
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} mb={4} textShadow="1px 1px 6px rgba(0, 0, 0, 0.1)">
                        <Text as="span" fontWeight="bold">Page Express</Text> é a plataforma revolucionária que vai permitir que você crie <Text as="span" fontWeight="bold">páginas personalizadas</Text> e <Text as="span" fontWeight="bold">otimizadas para SEO</Text> com apenas alguns cliques — sem qualquer conhecimento técnico. Imagine o impacto que isso terá no seu negócio!
                    </Text>
                    <Text fontSize={{ base: 'md', md: 'lg' }} mb={4} textShadow="1px 1px 6px rgba(0, 0, 0, 0.1)">
                        Desenvolvida para <Text as="span" fontWeight="bold">profissionais</Text> que precisam aumentar sua visibilidade digital, <Text as="span" fontWeight="bold">Page Express</Text> combina <Text as="span" fontWeight="bold">tecnologia de ponta</Text> e uma <Text as="span" fontWeight="bold">interface simples</Text>, proporcionando resultados instantâneos.
                    </Text>
                </Container>
            </Box>

            <Box
                bg="brand.background"
                py={{ base: 8, md: 16 }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                px={{ base: 4, md: 8 }}
                overflowX="hidden"
            >
                <Container
                    maxW={{ base: '100%', sm: 'lg', md: '2xl', lg: '3xl' }}
                    textAlign="center"
                >
                    <Text fontSize={{ base: 'md', md: 'lg' }} color="text.primary" mb={4} mt={2}>
                        💡 <Text as="span" fontWeight="bold">Seja o primeiro</Text> a saber quando o <Text as="span" fontWeight="bold">Page Express</Text> estiver disponível! <Text as="span" fontWeight="bold">Deixe seu e-mail</Text> e receba acesso exclusivo ao nosso lançamento antecipado. 📬
                    </Text>
                    <VStack spacing={4} align="center">
                        <Input
                            placeholder="Seu e-mail"
                            size="lg"
                            maxW="sm"
                            focusBorderColor="brand.primary"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button
                            size="lg"
                            bg="brand.button"
                            color="text.secondary"
                            _hover={{ bg: 'interaction.hover', transform: 'scale(1.05)' }}
                            animation={`${pulse} 2s infinite`}
                            shadow="md"
                            transition="transform 0.2s ease-in-out"
                            onClick={handleLeadSubmit}
                            isLoading={loading}
                        >
                            🚀 <Text as="span" ml={2} fontWeight="bold">Quero ser o primeiro!</Text>
                        </Button>
                    </VStack>
                </Container>
            </Box>
        </>
    );
};

export default ComingSoon;
