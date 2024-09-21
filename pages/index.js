import { Box, Button, Heading, Text, VStack, SimpleGrid, Container, Icon, HStack, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCogs, FaPaintBrush, FaRocket, FaCheckCircle } from 'react-icons/fa';
import Head from 'next/head';
import { useRouter } from 'next/router';

const MotionBox = motion(Box);

export async function getStaticProps() {
    return {
        props: {},
    };
}

export default function Home() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Landing Labs - Crie Sua Landing Page em Minutos</title>
                <meta name="description" content="Landing Labs oferece uma plataforma simples para criar landing pages personalizadas e otimizadas para SEO sem conhecimento técnico." />
                <meta name="keywords" content="landing pages, criação de páginas, SEO, presença online, pequenos negócios" />
                <meta property="og:title" content="Landing Labs - Crie Sua Landing Page" />
                <meta property="og:description" content="Landing Labs oferece uma plataforma simples para criar landing pages personalizadas e otimizadas para SEO." />
                <meta property="og:url" content="https://www.landinglabs.com" />
                <meta property="og:image" content="/og-image.png" />
            </Head>

            {/* Header de Navegação */}
            <Box as="header" position="fixed" top="0" width="100%" bg="white" boxShadow="md" zIndex="1000">
                <Container maxW="container.lg" py={4}>
                    <HStack spacing={8} justifyContent="space-between">
                        <Heading as="h1" size="md" color="brand.primary" onClick={() => router.push('/')}>
                            Landing Labs
                        </Heading>
                        <HStack as="nav" spacing={6}>
                            <Link href="#hero" color="brand.text" _hover={{ textDecoration: 'none', color: 'brand.primary' }}>
                                Início
                            </Link>
                            <Link href="#features" color="brand.text" _hover={{ textDecoration: 'none', color: 'brand.primary' }}>
                                Funcionalidades
                            </Link>
                            <Link href="#pricing" color="brand.text" _hover={{ textDecoration: 'none', color: 'brand.primary' }}>
                                Preço
                            </Link>
                            <Link href="#benefits" color="brand.text" _hover={{ textDecoration: 'none', color: 'brand.primary' }}>
                                Benefícios
                            </Link>
                        </HStack>
                    </HStack>
                </Container>
            </Box>

            {/* Hero Section */}
            <MotionBox
                id="hero"
                minH="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="brand.primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                pt={16} // Padding para não cobrir o header fixo
            >
                <VStack spacing={6} textAlign="center" color="white">
                    <Heading
                        as="h1"
                        fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }}
                        textShadow="2px 2px 8px rgba(0, 0, 0, 0.3)"
                    >
                        Crie Sua Landing Page em Minutos
                    </Heading>
                    <Text fontSize="xl" maxW="lg">
                        Landing Labs oferece uma plataforma simples e rápida para criar landing pages personalizadas, sem necessidade de conhecimento técnico.
                    </Text>
                    <Button colorScheme="teal" size="lg" variant="solid" onClick={() => router.push('/register')}>
                        Comece Agora
                    </Button>
                </VStack>
            </MotionBox>

            {/* Funcionalidades */}
            <Container id="features" maxW="container.lg" py={10}>
                <Heading as="h2" size="xl" textAlign="center" mb={8} color="brand.text">
                    Funcionalidades Principais
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    <MotionBox
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Icon as={FaPaintBrush} w={10} h={10} color="brand.primary" />
                        <Heading as="h3" size="md" color="brand.primary" mt={4}>Customização Simples</Heading>
                        <Text mt={4}>Edite textos, imagens e cores para criar a landing page perfeita para o seu negócio.</Text>
                    </MotionBox>

                    <MotionBox
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Icon as={FaCogs} w={10} h={10} color="brand.primary" />
                        <Heading as="h3" size="md" color="brand.primary" mt={4}>SEO Otimizado</Heading>
                        <Text mt={4}>Nossas páginas são projetadas para carregarem rapidamente e serem indexadas facilmente pelos motores de busca.</Text>
                    </MotionBox>

                    <MotionBox
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Icon as={FaRocket} w={10} h={10} color="brand.primary" />
                        <Heading as="h3" size="md" color="brand.primary" mt={4}>Publicação Rápida</Heading>
                        <Text mt={4}>Depois do pagamento via Stripe, sua página estará online em minutos, em um subdomínio pré-definido.</Text>
                    </MotionBox>
                </SimpleGrid>
            </Container>

            {/* Preço Único */}
            <Container id="pricing" maxW="container.md" py={10} textAlign="center">
                <Heading as="h2" size="xl" mb={4} color="brand.text">
                    Preço Único e Acessível
                </Heading>
                <Text fontSize="2xl" mb={6}>R$99 para publicar sua landing page personalizada.</Text>
                <Button colorScheme="teal" size="lg" variant="solid" onClick={() => router.push('/register')}>
                    Publique Agora
                </Button>
            </Container>

            {/* Nova Seção: Benefícios */}
            <Container id="benefits" maxW="container.lg" py={10} textAlign="center">
                <Heading as="h2" size="xl" mb={8} color="brand.text">
                    Por que Escolher o Landing Labs?
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <MotionBox
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Icon as={FaCheckCircle} w={10} h={10} color="brand.primary" />
                        <Heading as="h3" size="md" color="brand.primary" mt={4}>Fácil e Intuitivo</Heading>
                        <Text mt={4}>Qualquer pessoa pode criar uma landing page em minutos, sem precisar de conhecimento técnico.</Text>
                    </MotionBox>

                    <MotionBox
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="white"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Icon as={FaCheckCircle} w={10} h={10} color="brand.primary" />
                        <Heading as="h3" size="md" color="brand.primary" mt={4}>Baixo Custo</Heading>
                        <Text mt={4}>Por apenas R$99, sua empresa pode ter uma presença online profissional.</Text>
                    </MotionBox>
                </SimpleGrid>
            </Container>

            {/* Footer */}
            <Box bg="brand.secondary" color="white" py={6} textAlign="center">
                <Text>&copy; 2024 Landing Labs. Todos os direitos reservados.</Text>
            </Box>
        </>
    );
}
