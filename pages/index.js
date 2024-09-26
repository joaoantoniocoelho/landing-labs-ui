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
    IconButton,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useBreakpointValue,
    useDisclosure,
    keyframes,
} from '@chakra-ui/react';
import {
    FaCogs,
    FaPaintBrush,
    FaRocket,
    FaHome,
    FaTag,
    FaInfoCircle,
    FaQuestionCircle,
    FaWallet,
    FaHandsHelping  
} from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons';
import Head from 'next/head';
import { useRouter } from 'next/router';
  
// Keyframes for animations
const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `;
  
const slideIn = keyframes`
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  `;
  
const bounceIcon = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  `;
  
export default function Home() {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    return (
        <>
            <Head>
                <title>Page Express - Crie Páginas Personalizadas e Otimizadas para SEO</title>
                <meta
                    name="description"
                    content="Com o Page Express, você cria páginas personalizadas, profissionais e otimizadas para SEO, ideais para negócios, freelancers e qualquer um que deseja uma presença digital forte."
                />
                <meta
                    name="keywords"
                    content="criação de páginas, páginas personalizadas, landing pages, site profissional, presença digital, SEO, pequenos negócios, criar páginas, soluções digitais"
                />
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
  
                        {isMobile ? (
                            <>
                                <IconButton
                                    icon={<HamburgerIcon />}
                                    aria-label="Open Menu"
                                    onClick={onOpen}
                                    color="black"
                                    variant="unstyled"
                                />
  
                                {/* Drawer para dispositivos móveis */}
                                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                                    <DrawerOverlay>
                                        <DrawerContent bg="brand.primary" color="text.secondary">
                                            <DrawerCloseButton color="text.secondary" />
                                            <DrawerBody mt={12}>
                                                <VStack spacing={6} align="flex-start">
                                                    <HStack as="nav" spacing={4} onClick={onClose}>
                                                        <Icon as={FaHome} boxSize={5} />
                                                        <Link
                                                            href="#inicio"
                                                            color="text.secondary"
                                                            _hover={{ color: 'brand.secondary' }}
                                                        >
                                Início
                                                        </Link>
                                                    </HStack>
                                                    <HStack as="nav" spacing={4} onClick={onClose}>
                                                        <Icon as={FaPaintBrush} boxSize={5} />
                                                        <Link
                                                            href="#funcionalidades"
                                                            color="text.secondary"
                                                            _hover={{ color: 'brand.secondary' }}
                                                        >
                                Funcionalidades
                                                        </Link>
                                                    </HStack>
                                                    <HStack as="nav" spacing={4} onClick={onClose}>
                                                        <Icon as={FaTag} boxSize={5} />
                                                        <Link
                                                            href="#preco"
                                                            color="text.secondary"
                                                            _hover={{ color: 'brand.secondary' }}
                                                        >
                                Preço
                                                        </Link>
                                                    </HStack>
                                                    <HStack as="nav" spacing={4} onClick={onClose}>
                                                        <Icon as={FaInfoCircle} boxSize={5} />
                                                        <Link
                                                            href="#beneficios"
                                                            color="text.secondary"
                                                            _hover={{ color: 'brand.secondary' }}
                                                        >
                                Benefícios
                                                        </Link>
                                                    </HStack>
                                                    <HStack as="nav" spacing={4} onClick={onClose}>
                                                        <Icon as={FaQuestionCircle} boxSize={5} />
                                                        <Link
                                                            href="#faq"
                                                            color="text.secondary"
                                                            _hover={{ color: 'brand.secondary' }}
                                                        >
                                FAQ
                                                        </Link>
                                                    </HStack>
                                                </VStack>
                                            </DrawerBody>
                                        </DrawerContent>
                                    </DrawerOverlay>
                                </Drawer>
                            </>
                        ) : (
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
                        )}
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
                animation={`${fadeIn} 1s ease-in-out`}
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
                        animation={`${slideIn} 1s ease-in-out`}
                    >
              Crie Sua Página em Minutos
                    </Heading>
                    <Text
                        fontSize="xl"
                        maxW="xl"
                        fontWeight="bold"
                        textShadow="3px 3px 10px rgba(0, 0, 0, 0.5)"
                        px={{ base: 4, md: 0 }}
                        animation={`${slideIn} 1.2s ease-in-out`}
                    >
              Com o Page Express, você cria uma página profissional, otimizada para SEO e sem complicações. Ideal para quem
              busca uma presença digital de impacto.
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
                            bg: 'interaction.hover',
                            transform: 'scale(1.05)',
                        }}
                        shadow="lg"
                        transition="transform 0.3s ease-in-out"
                    >
              Comece Agora
                    </Button>
                </VStack>
            </Box>
  
            {/* Features */}
            <Container id="funcionalidades" maxW="container.lg" py={10} px={8}>
                <Heading as="h2" size="xl" textAlign="center" color="text.primary" h="8rem">
            Principais Funcionalidades do Page Express
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={5}>
                    <Box
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="brand.background"
                        _hover={{ transform: 'translateY(-5px)', transition: '0.3s ease-in-out' }}
                    >
                        <Icon as={FaPaintBrush} w={10} h={10} color="brand.primary" animation={`${bounceIcon} 2s infinite`} />
                        <Heading as="h3" size="md" color="text.primary" mt={4}>
                Personalização Fácil
                        </Heading>
                        <Text mt={4} color="text.primary">
                Edite textos, imagens e cores para criar uma página que reflita sua marca ou projeto.
                        </Text>
                    </Box>
  
                    <Box
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="brand.background"
                        _hover={{ transform: 'translateY(-5px)', transition: '0.3s ease-in-out' }}
                    >
                        <Icon as={FaCogs} w={10} h={10} color="brand.primary" animation={`${bounceIcon} 2s infinite`} />
                        <Heading as="h3" size="md" color="text.primary" mt={4}>
                Otimização para SEO
                        </Heading>
                        <Text mt={4} color="text.primary">
                Suas páginas são otimizadas para aparecer nos resultados de busca, ajudando você a alcançar mais visitantes
                e melhorar sua presença digital.
                        </Text>
                    </Box>
  
                    <Box
                        p={6}
                        borderRadius="lg"
                        boxShadow="lg"
                        bg="brand.background"
                        _hover={{ transform: 'translateY(-5px)', transition: '0.3s ease-in-out' }}
                    >
                        <Icon as={FaRocket} w={10} h={10} color="brand.primary" animation={`${bounceIcon} 2s infinite`} />
                        <Heading as="h3" size="md" color="text.primary" mt={4}>
                Publicação Rápida
                        </Heading>
                        <Text mt={4} color="text.primary">
                Após o pagamento, sua página estará online em minutos, pronta para receber visitas e melhorar sua presença
                online.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
  
            {/* Price section */}
            <Box id="preco" width="100%" py={10} textAlign="center" bg="brand.primary" boxShadow="lg">
                <Heading as="h2" size="xl" mb={4} color="text.secondary">
            Preço Acessível para Criar Sua Página
                </Heading>
                <Text fontSize="2xl" mb={6} color="text.secondary" px={{ base: 4, md: 0 }}>
            Apenas <strong>R$89,90</strong> para criar e publicar sua página personalizada com todas as funcionalidades.
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
                        bg: 'interaction.hover',
                        transform: 'scale(1.05)',
                    }}
                    shadow="lg"
                    transition="transform 0.3s ease-in-out"
                >
            Quero Minha Página
                </Button>
            </Box>
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
                        <Icon as={FaHandsHelping} w={10} h={10} color="brand.primary" animation={`${bounceIcon} 2s infinite`}/>
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
                        <Icon as={FaWallet} w={10} h={10} color="brand.primary" animation={`${bounceIcon} 2s infinite`}/>
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
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="bold" color="text.primary">
          Como funciona o Page Express?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} color="text.primary">
        O Page Express é uma plataforma que permite que você crie uma <strong>página personalizada</strong> de forma rápida e fácil. Nosso editor intuitivo permite que você ajuste todos os aspectos da sua página, como <strong>textos</strong>, <strong>imagens</strong> e <strong>cores</strong>, sem necessidade de conhecimento técnico. Em minutos, sua página estará online, ajudando você a fortalecer sua <strong>presença digital</strong> e alcançar mais clientes.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="bold" color="text.primary">
          O que é SEO?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} color="text.primary">
        SEO, ou <strong>Otimização para Motores de Busca</strong>, é o processo de melhorar a visibilidade da sua página nos resultados de busca do Google e outros mecanismos de busca. Quanto melhor o SEO da sua página, mais fácil será para os clientes encontrarem você online. O Page Express já vem com <strong>boas práticas de SEO</strong>, como URLs amigáveis, meta tags personalizadas e dados estruturados, que ajudam a aumentar sua <strong>visibilidade online</strong> e atrair mais tráfego orgânico.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="bold" color="text.primary">
          Minha página será otimizada para SEO?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} color="text.primary">
        Sim! O Page Express cria páginas já otimizadas para SEO. Isso inclui a criação de <strong>meta tags personalizadas</strong>, URLs amigáveis e dados estruturados. Essas otimizações ajudam a melhorar sua posição nos resultados de busca, facilitando que mais pessoas encontrem sua página na internet.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="bold" color="text.primary">
          Eu preciso de um subdomínio personalizado?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} color="text.primary">
        Não, você não precisa de um subdomínio personalizado. O Page Express utiliza uma estrutura de subdiretórios, como <strong>pageexpress.io/seunome</strong>, que é vantajosa para SEO. Essa estrutura permite que sua página aproveite a <strong>autoridade do domínio principal</strong>, melhorando sua visibilidade nos motores de busca e facilitando que clientes encontrem sua página online, sem necessidade de configurações complexas.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="bold" color="text.primary">
          Qual o custo para criar minha página?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} color="text.primary">
        Por apenas <strong>R$89,90</strong>, você pode criar sua página personalizada no Page Express. Essa taxa única inclui todas as funcionalidades necessárias para colocar sua página online e <strong>otimizada para SEO</strong>. Não há cobranças mensais ou custos ocultos — você paga uma vez e obtém uma página completa e funcional, pronta para fortalecer sua presença digital.
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
  