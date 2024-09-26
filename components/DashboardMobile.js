import {
    Box,
    Heading,
    HStack,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Link,
    useDisclosure,
    Container,
    Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import PageList from './PageList';
  
export default function DashboardMobile() {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
        <>
            {/* Header com menu hamburger */}
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
                    <HStack justifyContent="space-between">
                        <Heading
                            as="h1"
                            size="md"
                            color="brand.primary"
                            cursor="pointer"
                            onClick={() => router.push('/')}
                        >
                Page Express
                        </Heading>
                        <IconButton
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Menu"
                            onClick={onOpen}
                        />
                    </HStack>
                </Container>
            </Box>
  
            {/* Sidebar Drawer */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="brand.primary" color="text.secondary">
                        <DrawerCloseButton color="text.secondary" />
                        <DrawerBody mt={8}>
                            <VStack spacing={8} align="flex-start">
                                <Link onClick={() => { router.push('/dashboard'); onClose(); }} color="text.secondary">
                    Dashboard
                                </Link>
                                <Link onClick={() => { router.push('/account'); onClose(); }} color="text.secondary">
                    Conta
                                </Link>
                                <Link onClick={() => { router.push('/settings'); onClose(); }} color="text.secondary">
                    Configurações
                                </Link>
                                <Link onClick={() => { router.push('/logout'); onClose(); }} color="text.secondary">
                    Logout
                                </Link>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
  
            {/* Conteúdo do Dashboard Mobile */}
            <Box pt={20} minH="100vh" bg="brand.background" px={6}>
                <Container maxW="container.lg">
                    <Heading as="h2" size="lg" mb={6} color="text.primary">
              Suas Páginas
                    </Heading>
                    <Button
                        bg="brand.button"
                        color="text.secondary"
                        borderRadius="full"
                        size="md"
                        _hover={{ bg: 'interaction.hover' }}
                        mb={6}
                        onClick={() => router.push('/create-page')}
                    >
              Criar Nova Página
                    </Button>
  
                    <PageList />
                </Container>
            </Box>
        </>
    );
}
  