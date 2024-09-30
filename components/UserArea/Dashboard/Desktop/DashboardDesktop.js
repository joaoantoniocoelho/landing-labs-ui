import {
    Box,
    Flex,
    Heading,
    Button,
    HStack,
    useDisclosure,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Tooltip
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import PageList from '../UserPagesList';
import Sidebar from './SidebarDesktop';

export default function DashboardDesktop({ user }) {
    const router = useRouter();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [pageToDelete, setPageToDelete] = useState(null);
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
    const { isOpen: isOpenLogout, onOpen: onOpenLogout, onClose: onCloseLogout } = useDisclosure();
    const cancelRef = useRef(); 

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const handleLogout = () => {
        onOpenLogout(); 
    };

    const handleCreateNewPage = () => {
        router.push('/create-page');
    };

    const handleDelete = (page) => {
        setPageToDelete(page);
        onOpenDelete();
    };

    const confirmDelete = () => {
        console.log('Página excluída:', pageToDelete);
        onCloseDelete(); 
    };

    const confirmLogout = () => {
        localStorage.removeItem('authToken');
        router.push('/login');
    };

    return (
        <Flex minHeight="100vh">
            {/* Sidebar */}
            <Sidebar
                isSidebarCollapsed={isSidebarCollapsed}
                toggleSidebar={toggleSidebar}
                handleLogout={handleLogout} 
            />

            {/* Conteúdo principal */}
            <Box
                width={{
                    base: '100%',
                    md: isSidebarCollapsed ? 'calc(100% - 80px)' : 'calc(100% - 15%)',
                }}
                transition="width 0.3s ease-in-out"
                bg="brand.background"
                p={8}
            >
                {/* Título da página personalizado com o nome do usuário */}
                <Heading as="h1" size="xl" color="text.primary" mb={8} ml={0}>
                    Bem-vindo, {user.name}!
                </Heading>

                {/* Botão para criar nova página no topo */}
                <HStack justifyContent="space-between" mb={6} alignItems="center">
                    <Heading as="h2" size="lg" color="text.primary" ml={0}>
                        Suas Páginas
                    </Heading>
                    <Tooltip label="Criar nova página" aria-label="Criar nova página">
                        <Button
                            bg="brand.button"
                            color="text.secondary"
                            _hover={{ bg: 'interaction.hover' }}
                            onClick={handleCreateNewPage}
                            borderRadius="full"
                        >
                            Criar Nova Página
                        </Button>
                    </Tooltip>
                </HStack>

                {/* Lista de páginas (tabela) */}
                <PageList onDelete={handleDelete} />

                {/* Modal de confirmação de exclusão */}
                <AlertDialog
                    isOpen={isOpenDelete}
                    leastDestructiveRef={cancelRef}
                    onClose={onCloseDelete}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                Excluir Página
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                Tem certeza que deseja excluir a página &quot;{pageToDelete?.title}&quot;? Esta ação não pode ser desfeita.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onCloseDelete}>
                                    Cancelar
                                </Button>
                                <Button colorScheme="red" onClick={confirmDelete} ml={3}>
                                    Excluir
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>

                {/* Modal de confirmação de logout */}
                <AlertDialog
                    isOpen={isOpenLogout}
                    leastDestructiveRef={cancelRef}
                    onClose={onCloseLogout}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                Sair
                            </AlertDialogHeader>

                            <AlertDialogBody>
                                Tem certeza que deseja sair?
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onCloseLogout}>
                                    Cancelar
                                </Button>
                                <Button colorScheme="red" onClick={confirmLogout} ml={3}>
                                    Sair
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </Box>
        </Flex>
    );
}
