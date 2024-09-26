import { Box, Button, VStack, HStack, Heading } from '@chakra-ui/react';

const pages = [
    { id: 1, title: 'Página 1', slug: 'pagina-1' },
    { id: 2, title: 'Página 2', slug: 'pagina-2' },
];

const PageList = () => {
    return (
        <VStack spacing={4} align="stretch">
            {pages.map((page) => (
                <Box
                    key={page.id}
                    p={6}
                    backgroundColor="brand.whiteBackground"
                    borderRadius="md"
                    boxShadow="md"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Heading size="md" color="text.primary">
                        {page.title}
                    </Heading>
                    <HStack spacing={4}>
                        <Button
                            borderRadius="full"
                            bg="brand.button"
                            color="text.secondary"
                            _hover={{ bg: 'interaction.hover' }}
                        >
              Editar
                        </Button>
                        <Button
                            borderRadius="full"
                            bg="brand.button"
                            color="text.secondary"
                            _hover={{ bg: 'interaction.hover' }}
                        >
              Visualizar
                        </Button>
                    </HStack>
                </Box>
            ))}
        </VStack>
    );
};

export default PageList;
