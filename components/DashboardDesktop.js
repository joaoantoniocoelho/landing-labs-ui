import {
    Box,
    Heading,
    HStack,
    Button,
    Container,
    VStack,
    Link,
    Icon,
    Text,
    Flex,
} from '@chakra-ui/react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { useRouter } from 'next/router';
import PageList from './PageList';
  
export default function DashboardDesktop() {
    const router = useRouter();
  
    return (
        <Flex minHeight="100vh">
            {/* Sidebar */}
            <Box
                width="15%"
                bg="brand.primary"
                color="text.secondary"
                p={8}
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                height="100vh"
            >
                <Heading as="h1" size="lg" color="text.secondary" mb={8}>
            Page Express
                </Heading>
  
                <VStack spacing={6} align="flex-start" w="100%">
                    <HStack as="nav" spacing={4}>
                        <Icon as={FaHome} boxSize={6} />
                        <Link href="/dashboard" color="text.secondary">
                Dashboard
                        </Link>
                    </HStack>
                    <HStack as="nav" spacing={4}>
                        <Icon as={FaUser} boxSize={6} />
                        <Link href="/account" color="text.secondary">
                Perfil
                        </Link>
                    </HStack>
                    <HStack as="nav" spacing={4}>
                        <Icon as={FaCog} boxSize={6} />
                        <Link href="/settings" color="text.secondary">
                Configurações
                        </Link>
                    </HStack>
                </VStack>
            </Box>
  
            {/* Conteúdo principal */}
            <Box width="80%" bg="brand.background" p={8}>
                <Container maxW="container.lg">
                    <Heading as="h2" size="xl" mb={4} color="brand.primary">
              Bem-vindo ao Page Express!
                    </Heading>
                    <Text fontSize="lg" mb={6}>
              Gerencie suas páginas de forma rápida e eficiente.
                    </Text>
                    <Button
                        bg="brand.button"
                        color="text.secondary"
                        borderRadius="full"
                        size="md"
                        colorScheme="purple"
                        _hover={{ bg: 'interaction.hover' }}
                        mb={6}
                        onClick={() => router.push('/create-page')}
                    >
              Criar Nova Página
                    </Button>
  
                    <PageList />
                </Container>
            </Box>
        </Flex>
    );
}
  