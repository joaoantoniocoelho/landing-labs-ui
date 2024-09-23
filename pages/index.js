import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    Container,
    Icon,
    HStack,
    Link,
    keyframes,
} from '@chakra-ui/react';
import { FaCogs, FaPaintBrush, FaRocket, FaCheckCircle, FaHeart } from 'react-icons/fa';
import Head from 'next/head';
import { useRouter } from 'next/router';
import FAQ from '@/components/FAQComponent';

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

export default function Home() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Page Express - Crie Seu Site em Minutos</title>
                <meta
                    name="description"
                    content="Com o Page Express, você cria um site profissional para o seu negócio de forma rápida e fácil, sem precisar de conhecimento técnico."
                />
                <meta
                    name="keywords"
                    content="criação de sites, site profissional, presença online, pequenos negócios, site fácil"
                />
                <meta property="og:title" content="Page Express - Crie Seu Site em Minutos" />
                <meta
                    property="og:description"
                    content="Com o Page Express, você cria um site profissional para o seu negócio de forma rápida e fácil, sem precisar de conhecimento técnico."
                />
                <meta property="og:url" content="https://page-express-ui.vercel.app/" />
                <meta property="og:image" content="/og-image.png" />
            </Head>

            {/* Navigation Header */}
            <Box
                as="header"
                position="fixed"
                top="0"
                width="100%"
                bg="white"
                boxShadow="md"
                zIndex="1000"
            >
                <Container maxW="container.lg" py={4}>
                    <HStack spacing={8} justifyContent="space-between">
                        <Heading
                            as="h1"
                            size="md"
                            color="brand.primary"
                            cursor="pointer"
                            onClick={() => router.push('/')}
                        >
                            Page Express
                        </Heading>
                        <HStack as="nav" spacing={6}>
                            <Link
                                href="#inicio"
                                color="text.primary"
                                _hover={{ textDecoration: 'none', color: 'brand.primary' }}
                            >
                                Início
                            </Link>
                            <Link
                                href="#funcionalidades"
                                color="text.primary"
                                _hover={{ textDecoration: 'none', color: 'brand.primary' }}
                            >
                                Funcionalidades
                            </Link>
                            <Link
                                href="#preco"
                                color="text.primary"
                                _hover={{ textDecoration: 'none', color: 'brand.primary' }}
                            >
                                Preço
                            </Link>
                            <Link
                                href="#beneficios"
                                color="text.primary"
                                _hover={{ textDecoration: 'none', color: 'brand.primary' }}
                            >
                                Benefícios
                            </Link>
                            <Link
                                href="#faq"
                                color="text.primary"
                                _hover={{ textDecoration: 'none', color: 'brand.primary' }}
                            >
                                FAQ
                            </Link>
                        </HStack>
                    </HStack>
                </Container>
            </Box>

            {/* Hero section with fade-in animation */}
            <Box
                id="inicio"
                minH="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="brand.primary" // Você pode alterar para um tom de verde mais suave ou usar uma variável de Tailwind aqui
                pt={16}
                animation={`${fadeIn} 1s ease-in-out`}
            >
                <VStack spacing={8} textAlign="center" color="white">
                    <Heading
                        as="h1"
                        fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
                        textShadow="2px 2px 8px rgba(0, 0, 0, 0.3)"
                        animation={`${fadeIn} 1.2s ease-in-out`}
                        fontWeight="extrabold"
                    >
                    Coloque Seu Negócio Online em Minutos
                    </Heading>

                    <Text
                        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                        maxW={{ base: '90%', md: '90%', lg: '85%' }}
                        color="text.secondary"
                        fontWeight="medium"
                        lineHeight="1.75"
                        textShadow="3px 3px 10px rgba(0, 0, 0, 0.5)"
                        animation={`${fadeIn} 1.4s ease-in-out`}
                    >
                    Com o Page Express, crie um site profissional de maneira rápida e descomplicada, 
                    sem precisar de conhecimento técnico.
                    </Text>

                    <Button
                        size="lg"
                        borderRadius="full"
                        px={12}
                        py={8} 
                        fontSize="2xl"
                        bg="#2c3e50"  // Cor de fundo pode ser ajustada para algo mais harmonioso
                        color="text.secondary"
                        _hover={{
                            bg: '#34495E',
                            transform: 'scale(1.05)',
                            transition: 'transform 0.2s ease',
                        }}
                        shadow="lg"
                        animation={`${fadeIn} 1.6s ease-in-out`}
                        onClick={() => router.push('/register')}
                    >
                    Comece Agora
                    </Button>
                </VStack>
            </Box>

            {/* Features with bounce animation on icons */}
            <Container id="funcionalidades" maxW="container.lg" py={10} px={8}>
                <Heading as="h2" size="xl" textAlign="center" color="text.primary" h="8rem">
                    Funcionalidades Principais
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <Box
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                    >
                        <Icon as={FaPaintBrush} w={10} h={10} color="brand.primary" animation={`${bounce} 2s infinite`} />
                        <Heading as="h3" size="md" color="text.primary" mt={4}>
                            Personalização Fácil
                        </Heading>
                        <Text mt={4} color="text.primary">
                            Edite textos, imagens e cores para criar um site que reflita a identidade do seu
                            negócio.
                        </Text>
                    </Box>

                    <Box
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                    >
                        <Icon as={FaCogs} w={10} h={10} color="brand.primary" animation={`${bounce} 2s infinite`} />
                        <Heading as="h3" size="md" color="text.primary" mt={4}>
                            Otimizado para Busca
                        </Heading>
                        <Text mt={4} color="text.primary">
                            Seu site será otimizado para aparecer nos resultados de busca, ajudando clientes a
                            encontrarem você.
                        </Text>
                    </Box>

                    <Box
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                    >
                        <Icon as={FaRocket} w={10} h={10} color="brand.primary" animation={`${bounce} 2s infinite`} />
                        <Heading as="h3" size="md" color="text.primary" mt={4}>
                            Publicação Imediata
                        </Heading>
                        <Text mt={4} color="text.primary">
                            Após o pagamento, seu site estará online em poucos minutos, pronto para receber
                            visitantes.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>

            {/* Price section */}
            <Box
                id="preco"
                width="100%"
                py={10}
                textAlign="center"
                bg="brand.primary"
                boxShadow="lg"
                animation={`${fadeIn} 2s ease-in-out`}
            >
                <Heading as="h2" size="xl" mb={4} color="text.secondary">
                    Preço Acessível
                </Heading>
                <Text
                    fontSize="2xl"
                    mb={6}
                    color="text.secondary"
                    maxW={{ base: '90%', md: '85%', lg: '70%' }}  // Diferentes larguras para mobile (base) e desktop (md e lg)
                    mx="auto"  // Para manter o texto centralizado horizontalmente
                    textAlign="center"  // Centraliza o texto dentro da largura definida
                >
                    Apenas <strong>R$99</strong> para colocar seu negócio online.
                </Text>

                <Button
                    size="lg"
                    borderRadius="full"
                    px={12}
                    py={8} 
                    fontSize="2xl"
                    bg="#2c3e50"  // Cor de fundo pode ser ajustada para algo mais harmonioso
                    color="text.secondary"
                    _hover={{
                        bg: '#34495E',
                        transform: 'scale(1.05)',
                        transition: 'transform 0.2s ease',
                    }}
                    shadow="lg"
                    animation={`${fadeIn} 1.6s ease-in-out`}
                    onClick={() => router.push('/register')}
                >
                    Quero Meu Site
                </Button>
            </Box>

            {/* FAQ Section */}
            <Container id="faq" maxW="container.lg" py={10} px={8}>
                <FAQ />
            </Container>

            {/* Footer with heart animation */}
            <Box bg="brand.primary" py={6} textAlign="center">
                <Text color="text.secondary" fontWeight="bold" textShadow="3px 3px 10px rgba(0, 0, 0, 0.5)">
                    Feito com <FaHeart style={{ color: '#fefefe', display: 'inline-block', marginLeft: '5px', marginRight: '5px', animation: `${bounce} 1.5s infinite` }} /> por Page Express
                </Text>
            </Box>
        </>
    );
}
