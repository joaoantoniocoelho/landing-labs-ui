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
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import { FaCogs, FaPaintBrush, FaRocket, FaCheckCircle } from 'react-icons/fa';
import Head from 'next/head';
import { useRouter } from 'next/router';

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
                bg="brand.background"
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
                <VStack
                    spacing={6}
                    textAlign="center"
                    color="text.secondary"
                    maxW={{ base: '90%', md: '70%', lg: '50%' }}
                >
                    <Heading
                        as="h1"
                        fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
                        textShadow="2px 2px 8px rgba(0, 0, 0, 0.3)"
                    >
                        Cre sua Landing Page profissional em minutos
                    </Heading>
                    <Text
                        fontSize="xl"
                        maxW="xl"
                        fontWeight="bold"
                        textShadow="3px 3px 10px rgba(0, 0, 0, 0.5)"
                        px={{ base: 4, md: 0 }}
                    >
                        Construa páginas profissionais com rapidez e facilidade. Foco em resultados, sem complicação.
                    </Text>

                    <Button
                        size="lg"
                        variant="solid"
                        onClick={() => router.push('/register')}
                        px={8}
                        py={6}
                        borderRadius="full"
                        fontSize="3xl"
                        bg="brand.button"
                        color="text.secondary"
                        _hover={{
                            bg: 'interaction.purpleHover',
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
                        bg="brand.background"
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
                        bg="brand.background"
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
                        bg="brand.background"
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
                <Text fontSize="2xl" mb={6} color="text.secondary" px={{ base: 4, md: 0 }}>
                    Apenas <strong>R$99</strong> para colocar seu negócio online.
                </Text>
                <Button
                    size="lg"
                    variant="solid"
                    borderRadius="full"
                    onClick={() => router.push('/register')}
                    px={8}
                    py={6}
                    fontSize="3xl"
                    bg="brand.button"
                    color="text.secondary"
                    _hover={{
                        bg: 'interaction.purpleHover',
                    }}
                    shadow="lg"
                >
                    Quero Meu Site
                </Button>
            </Box>

            {/* Benefits */}
            <Container id="beneficios" maxW="container.lg" py={10} px={8} textAlign="center">
                <Heading as="h2" size="xl" mb={8} color="text.primary" h="8rem">
                    Por que Escolher o Page Express?
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Box
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="brand.background"
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
                        bg="brand.background"
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

            {/* FAQ Section */}
            <Container id="faq" maxW="container.lg" py={10} px={8}>
                <Heading as="h2" size="xl" textAlign="center" color="text.primary" mb={8}>
                    Perguntas Frequentes
                </Heading>

                <Accordion allowToggle>
                    {/* Pergunta 1 */}
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="bold" color="text.primary">
                                Como o Page Express funciona?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} color="text.primary">
                            O Page Express permite que você crie um site profissional de forma rápida e fácil. Você
                            pode personalizar o conteúdo do seu site (textos, imagens, cores) usando um editor
                            intuitivo. Após a criação, seu site estará online em poucos minutos, sem necessidade de
                            conhecimento técnico.
                        </AccordionPanel>
                    </AccordionItem>

                    {/* Pergunta 2 */}
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="bold" color="text.primary">
                                Eu preciso de um subdomínio personalizado?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} color="text.primary">
                            Não é necessário! Usamos uma estrutura de subdiretórios, como pageexpress.io/seunome,
                            para facilitar e otimizar o SEO do seu site. Isso ajuda a consolidar a autoridade do
                            domínio principal e melhora o ranqueamento nos mecanismos de busca. Além disso, não há
                            complicações com a configuração de subdomínios.
                        </AccordionPanel>
                    </AccordionItem>

                    {/* Pergunta 3 */}
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="bold" color="text.primary">
                                Posso usar meu próprio domínio?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} color="text.primary">
                            Sim! Oferecemos a opção de mapear um domínio próprio para seu site, como
                            seunegocio.com. Dessa forma, seus clientes poderão acessar o site diretamente com o seu
                            domínio personalizado.
                        </AccordionPanel>
                    </AccordionItem>

                    {/* Pergunta 4 */}
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="bold" color="text.primary">
                                Meu site será otimizado para SEO?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} color="text.primary">
                            Sim! Todos os sites criados pelo Page Express são otimizados para motores de busca. Isso
                            inclui meta tags personalizadas, URLs amigáveis e dados estruturados para ajudar seu
                            negócio a ser encontrado online de forma eficaz.
                        </AccordionPanel>
                    </AccordionItem>

                    {/* Pergunta 5 */}
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="bold" color="text.primary">
                                Qual o custo para criar meu site?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} color="text.primary">
                            O custo para criar seu site no Page Express é de R$99, uma taxa única que inclui todas
                            as funcionalidades necessárias para ter seu site online e otimizado.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>

            <Box bg="brand.primary" py={6} textAlign="center">
                <Text
                    color="text.secondary"
                    fontWeight="bold"
                    textShadow="3px 3px 10px rgba(0, 0, 0, 0.5)"
                >
                    &copy; {new Date().getFullYear()} Page Express. Todos os direitos reservados.
                </Text>
            </Box>
        </>
    );
}
