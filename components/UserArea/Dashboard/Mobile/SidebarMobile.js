import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    HStack,
    Icon,
    Box,
} from '@chakra-ui/react';
import { FaHome, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function SidebarMobile({ isOpen, onClose }) {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        router.push('/login');
        onClose();
    };

    return (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent bg="brand.primary" color="text.secondary">
                    <DrawerCloseButton color="text.secondary" />
                    <DrawerBody mt={8} display="flex" flexDirection="column" justifyContent="space-between">
                        <VStack spacing={8} align="flex-start">
                            {/* Dashboard Link */}
                            <HStack
                                as="a"
                                spacing={4}
                                _hover={{ color: '#5A9FFF' }}
                                transition="color 0.3s ease"
                                onClick={() => {
                                    router.push('/dashboard');
                                    onClose();
                                }}
                                cursor="pointer"
                            >
                                <Icon as={FaHome} boxSize={6} />
                                <Box>Dashboard</Box>
                            </HStack>

                            {/* Conta Link */}
                            <HStack
                                as="a"
                                spacing={4}
                                _hover={{ color: '#5A9FFF' }}
                                transition="color 0.3s ease"
                                onClick={() => {
                                    router.push('/account');
                                    onClose();
                                }}
                                cursor="pointer"
                            >
                                <Icon as={FaUser} boxSize={6} />
                                <Box>Conta</Box>
                            </HStack>
                        </VStack>

                        {/* Logout Link no rodapé */}
                        <VStack align="flex-start" spacing={8} mb={8}>
                            <HStack
                                as="a"
                                spacing={4}
                                _hover={{ color: '#5A9FFF' }}
                                transition="color 0.3s ease"
                                onClick={handleLogout}
                                cursor="pointer"
                            >
                                <Icon as={FaSignOutAlt} boxSize={6} />
                                <Box>Logout</Box>
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
}
