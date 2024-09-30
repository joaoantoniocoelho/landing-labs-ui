import {
    Box,
    Heading,
    HStack,
    IconButton,
    Container,
    Button,
    useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import SidebarDrawerMobile from './SidebarMobile';
import PageList from '../UserPagesList';

export default function DashboardMobile({ user }) {
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

            {/* Sidebar Drawer Mobile */}
            <SidebarDrawerMobile isOpen={isOpen} onClose={onClose} />

            {/* Conteúdo do Dashboard Mobile */}
            <Box
                pt={20}
                pb={8}
                minH="100vh"
                bg="brand.background"
                px={4}
            >
                <Container maxW="container.sm">
                    {/* Personalização do título com o nome do usuário */}
                    <Heading as="h2" size="lg" mb={6} mt={4} color="text.primary">
                        Bem-vindo, {user.name}!
                    </Heading>

                    <Button
                        bg="brand.button"
                        color="text.secondary"
                        borderRadius="full"
                        size="md"
                        _hover={{ bg: 'interaction.hover' }}
                        mb={6}
                        onClick={() => router.push('/create-page')}
                        width="100%"
                    >
                        Criar Nova Página
                    </Button>

                    {/* Lista de Páginas */}
                    <PageList />
                </Container>
            </Box>
        </>
    );
}
