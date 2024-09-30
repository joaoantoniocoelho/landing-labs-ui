import { Box, VStack, HStack, Icon, Button, Heading, Tooltip } from '@chakra-ui/react';
import { FaHome, FaUser, FaChevronLeft, FaChevronRight, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function SidebarDesktop({ isSidebarCollapsed, toggleSidebar, handleLogout }) {
    return (
        <Box
            width={{ base: isSidebarCollapsed ? '12%' : '50%', md: isSidebarCollapsed ? '5%' : '20%', lg: isSidebarCollapsed ? '2%' : '15%' }}
            minWidth={isSidebarCollapsed ? '80px' : 'auto'}
            bg="brand.primary"
            color="text.secondary"
            p={isSidebarCollapsed ? 2 : 8}
            display="flex"
            flexDirection="column"
            alignItems={isSidebarCollapsed ? 'center' : 'flex-start'}
            justifyContent="flex-start"
            height="100vh"
            position="relative"
            transition="width 0.3s ease-in-out, padding 0.3s ease-in-out"
        >
            {/* Nome "Page Express" no topo da Sidebar */}
            {!isSidebarCollapsed && (
                <Heading as="h1" size="lg" color="text.secondary" mb={8} whiteSpace="nowrap">
                    Page Express
                </Heading>
            )}

            {/* Botão de expandir/recolher */}
            <Button
                onClick={toggleSidebar}
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                color="white"
                mb={8}
                w={isSidebarCollapsed ? 'auto' : '40px'}
                padding={2}
                position={isSidebarCollapsed ? 'relative' : 'absolute'}
                top={isSidebarCollapsed ? '0' : '4'}
                right={isSidebarCollapsed ? 'auto' : '4'}
            >
                <Icon as={isSidebarCollapsed ? FaChevronRight : FaChevronLeft} boxSize={4} />
            </Button>

            {/* Ícones de navegação */}
            <VStack spacing={6} align={isSidebarCollapsed ? 'center' : 'flex-start'} w="100%">
                <Link href="/dashboard" passHref>
                    <Tooltip label="Dashboard">
                        <HStack
                            spacing={isSidebarCollapsed ? 0 : 4}
                            _hover={{ color: '#5A9FFF' }}
                            transition="all 0.3s ease"
                            p={2}
                            borderRadius="md"
                            cursor="pointer"
                            whiteSpace={isSidebarCollapsed ? 'nowrap' : 'normal'}
                        >
                            <Icon as={FaHome} boxSize={6} />
                            {!isSidebarCollapsed && <Box _hover={{ color: '#5A9FFF' }} color="text.secondary">Dashboard</Box>}
                        </HStack>
                    </Tooltip>
                </Link>

                <Link href="/account" passHref>
                    <Tooltip label="Perfil">
                        <HStack
                            spacing={isSidebarCollapsed ? 0 : 4}
                            _hover={{ color: '#5A9FFF' }}
                            transition="all 0.3s ease"
                            p={2}
                            borderRadius="md"
                            cursor="pointer"
                            whiteSpace={isSidebarCollapsed ? 'nowrap' : 'normal'}
                        >
                            <Icon as={FaUser} boxSize={6} />
                            {!isSidebarCollapsed && <Box _hover={{ color: '#5A9FFF' }} color="text.secondary">Perfil</Box>}
                        </HStack>
                    </Tooltip>
                </Link>
            </VStack>

            {/* Botão de logout */}
            <HStack
                as="nav"
                spacing={isSidebarCollapsed ? 0 : 2}
                mt="auto"
                w="100%"
                justifyContent={isSidebarCollapsed ? 'center' : 'flex-start'}
                _hover={{ color: '#5A9FFF' }}
                transition="all 0.3s ease"
                p={2}
                borderRadius="md"
            >
                <Tooltip label="Sair">
                    <HStack
                        spacing={isSidebarCollapsed ? 0 : 2}
                        onClick={handleLogout}
                        cursor='pointer'
                    >
                        <Icon as={FaSignOutAlt} boxSize={isSidebarCollapsed ? 6 : 5} mb={isSidebarCollapsed ? 4 : 0} />
                        {!isSidebarCollapsed && (
                            <Button
                                bg="transparent"
                                _hover={{ bg: 'transparent', color: '#5A9FFF' }}
                                color="white"
                                textAlign="left"
                                pl={0}
                                cursor='pointer'
                            >
                                Sair
                            </Button>
                        )}
                    </HStack>
                </Tooltip>
            </HStack>
        </Box>
    );
}
