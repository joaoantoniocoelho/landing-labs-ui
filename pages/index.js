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
} from '@chakra-ui/react';
import { FaCogs } from 'react-icons/fa';
import { FaPaintBrush } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
  
import Head from 'next/head';
import { useRouter } from 'next/router';
  
export default function Home() {
    const router = useRouter();
  
    return (
        <>
            <Head>
                <title>Landing Labs - Crie Seu Site em Minutos</title>
                <meta
                    name="description"
                    content="Com o Landing Labs, você cria um site profissional para o seu negócio de forma rápida e fácil, sem precisar de conhecimento técnico."
                />
                <meta
                    name="keywords"
                    content="criação de sites, site profissional, presença online, pequenos negócios, site fácil"
                />
                <meta property="og:title" content="Landing Labs - Crie Seu Site em Minutos" />
                <meta
                    property="og:description"
                    content="Com o Landing Labs, você cria um site profissional para o seu negócio de forma rápida e fácil, sem precisar de conhecimento técnico."
                />
                <meta property="og:url" content="https://landing-labs-ui.vercel.app/" />
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
                Landing Labs
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
                        </HStack>
                    </HStack>
                </Container>
            </Box>
  
            {/* Hero section */}
            <Box
                id="inicio"
                minH="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="brand.primary"
                pt={16}
            >
                <VStack spacing={6} textAlign="center" color="white">
                    <Heading
                        as="h1"
                        fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
                        textShadow="2px 2px 8px rgba(0, 0, 0, 0.3)"
                    >
              Coloque Seu Negócio Online em Minutos
                    </Heading>
                    <Text
                        fontSize="xl"
                        maxW="xl"
                        color="text.secondary"
                        fontWeight="bold"
                        textShadow="3px 3px 10px rgba(0, 0, 0, 0.5)"
                    >
              Com o Landing Labs, crie um site profissional de maneira rápida e descomplicada, sem precisar de conhecimento técnico.
                    </Text>
  
                    <Button
                        size="lg"
                        variant="solid"
                        onClick={() => router.push('/register')}
                        px={8}
                        py={6}
                        fontSize="3xl"
                        bg="#2c3e50"
                        color="white"
                        _hover={{
                            bg: 'interaction.blueHover',
                        }}
                        shadow="lg"
                    >
              Comece Agora
                    </Button>
                </VStack>
            </Box>
  
            {/* Features */}
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
                        <Icon as={FaPaintBrush} w={10} h={10} color="brand.primary" />
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
                        <Icon as={FaCogs} w={10} h={10} color="brand.primary" />
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
                        <Icon as={FaRocket} w={10} h={10} color="brand.primary" />
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
            >
                <Heading as="h2" size="xl" mb={4} color="text.secondary">
            Preço Acessível
                </Heading>
                <Text fontSize="2xl" mb={6} color="text.secondary">
            Apenas <strong>R$99</strong> para colocar seu negócio online.
                </Text>
                <Button
                    size="lg"
                    variant="solid"
                    onClick={() => router.push('/register')}
                    px={8}
                    py={6}
                    fontSize="3xl"
                    bg="brand.blue"
                    color="text.secondary"
                    _hover={{
                        bg: 'interaction.blueHover',
                    }}
                    shadow="lg"
                >
            Quero Meu Site
                </Button>
            </Box>
  
            {/* Benefits */}
            <Container id="beneficios" maxW="container.lg" py={10} px={8} textAlign="center">
                <Heading as="h2" size="xl" mb={8} color="text.primary" h="8rem" >  
            Por que Escolher o Landing Labs?
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                    >
                        <Icon as={FaCheckCircle} w={10} h={10} color="brand.primary" />
                        <Heading as="h3" size="md" color="text.primary" mt={4}>
                Simplicidade
                        </Heading>
                        <Text mt={4} color="text.primary">
                Crie seu site de forma intuitiva, sem complicações ou etapas desnecessárias.
                        </Text>
                    </Box>
  
                    <Box
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                    >
                        <Icon as={FaCheckCircle} w={10} h={10} color="brand.primary" />
                        <Heading as="h3" size="md" color="text.primary" mt={4}>
                Economia
                        </Heading>
                        <Text mt={4} color="text.primary">
                Tenha um site profissional por um preço que cabe no seu bolso, sem custos mensais.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
  
            <Box bg="brand.primary" py={6} textAlign="center">
                <Text
                    color="text.secondary"
                    fontWeight="bold"
                    textShadow="3px 3px 10px rgba(0, 0, 0, 0.5)"
                >
              &copy; {new Date().getFullYear()} Landing Labs. Todos os direitos reservados.
                </Text>
            </Box>
        </>
    );
}
  