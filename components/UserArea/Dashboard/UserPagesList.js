import { useState, useEffect } from 'react';
import {
    Box,
    VStack,
    Spinner,
    Flex,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    HStack,
    Tooltip,
} from '@chakra-ui/react';
import { FaEdit, FaEye, FaTrash, FaArrowLeft, FaArrowRight, FaSortUp, FaSortDown } from 'react-icons/fa';

const getStatusColor = (status) => {
    switch (status) {
    case 'published':
        return 'green.500';
    case 'draft':
        return 'yellow.500';
    default:
        return 'gray.500';
    }
};

const translateStatus = (status) => {
    return status === 'published' ? 'Publicado' : 'Rascunho';
};

const PageList = ({ onDelete }) => {
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    };

    const fetchPages = async (page = 1, limit = 10) => {
        setLoading(true);
        setPages([]);
        try {
            const response = await new Promise((resolve) => {
                setTimeout(() => {
                    const data = [
                        { _id: page * 1, title: 'Landing Page para Consultoria Financeira', slug: `consultoria-financeira-${page * 1}`, createdAt: new Date(), status: 'published', url: 'https://example.com/consultoria-financeira' },
                        { _id: page * 2, title: 'Landing Page para Curso de Marketing Digital', slug: `curso-marketing-digital-${page * 2}`, createdAt: new Date(), status: 'draft', url: 'https://example.com/curso-marketing-digital' },
                        { _id: page * 3, title: 'Landing Page para Venda de Produtos Orgânicos', slug: `produtos-organicos-${page * 3}`, createdAt: new Date(), status: 'published', url: 'https://example.com/produtos-organicos' },
                        { _id: page * 4, title: 'Landing Page para Clínica de Fisioterapia', slug: `clinica-fisioterapia-${page * 4}`, createdAt: new Date(), status: 'draft', url: 'https://example.com/clinica-fisioterapia' },
                        { _id: page * 5, title: 'Landing Page para Palestra Motivacional', slug: `palestra-motivacional-${page * 5}`, createdAt: new Date(), status: 'published', url: 'https://example.com/palestra-motivacional' },
                        { _id: page * 6, title: 'Landing Page para Consultoria de TI', slug: `consultoria-ti-${page * 6}`, createdAt: new Date(), status: 'published', url: 'https://example.com/consultoria-ti' },
                        { _id: page * 7, title: 'Landing Page para Loja de Roupas', slug: `loja-roupas-${page * 7}`, createdAt: new Date(), status: 'draft', url: 'https://example.com/loja-roupas' },
                        { _id: page * 8, title: 'Landing Page para Curso de Programação', slug: `curso-programacao-${page * 8}`, createdAt: new Date(), status: 'published', url: 'https://example.com/curso-programacao' },
                        { _id: page * 9, title: 'Landing Page para Restaurante Vegetariano', slug: `restaurante-vegetariano-${page * 9}`, createdAt: new Date(), status: 'published', url: 'https://example.com/restaurante-vegetariano' },
                        { _id: page * 10, title: 'Landing Page para Freelancer de Design', slug: `freelancer-design-${page * 10}`, createdAt: new Date(), status: 'draft', url: 'https://example.com/freelancer-design' },
                    ];
                    const totalPages = 5;
                    resolve({ data, totalPages });
                }, 1000);
            });
    
            setPages(response.data);
            setTotalPages(response.totalPages);
        } catch (error) {
            console.error('Erro ao buscar páginas:', error);
        } finally {
            setLoading(false);
        }
    };
    

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    useEffect(() => {
        fetchPages(currentPage, 10);
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <VStack spacing={6} align="stretch" minHeight="400px">
            <Box
                overflowX="auto"
                overflowY="auto"
                height="500px"
                position="relative"
                css={{
                    '&::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#1A73E8',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#E0F7FA',
                    },
                }}
            >
                {loading ? (
                    <Flex justify="center" align="center" height="100%" position="absolute" top="0" left="0" right="0" bottom="0">
                        <Spinner size="lg" color="brand.primary" />
                    </Flex>
                ) : (
                    <Table variant="striped" colorScheme="gray">
                        <Thead position="sticky" top={0} bg="brand.background" zIndex={1}>
                            <Tr>
                                <Th onClick={() => handleSort('title')}>Nome {sortConfig.key === 'title' && (sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />)}</Th>
                                <Th onClick={() => handleSort('slug')}>Slug {sortConfig.key === 'slug' && (sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />)}</Th>
                                <Th onClick={() => handleSort('createdAt')}>Data de Criação {sortConfig.key === 'createdAt' && (sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />)}</Th>
                                <Th>Status</Th>
                                <Th>Ações</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {pages.map((page) => (
                                <Tr key={page._id}>
                                    <Td>{page.title}</Td>
                                    <Td>{page.slug}</Td>
                                    <Td>{formatDate(page.createdAt)}</Td>
                                    <Td color={getStatusColor(page.status)}>{translateStatus(page.status)}</Td>
                                    <Td>
                                        <HStack spacing={2}>
                                            <Tooltip label="Editar">
                                                <IconButton
                                                    icon={<FaEdit />}
                                                    aria-label="Editar"
                                                    bg="brand.button"
                                                    color="text.secondary"
                                                    _hover={{ bg: 'interaction.hover' }}
                                                    size="sm"
                                                />
                                            </Tooltip>
                                            <Tooltip label={page.status === 'draft' ? 'Visualizar (desabilitado)' : 'Visualizar'}>
                                                <span>
                                                    <IconButton
                                                        icon={<FaEye />}
                                                        aria-label="Visualizar"
                                                        bg="brand.button"
                                                        color="text.secondary"
                                                        _hover={{ bg: page.status === 'draft' ? 'gray.300' : 'interaction.hover' }}
                                                        size="sm"
                                                        isDisabled={page.status === 'draft'}
                                                        onClick={() => {
                                                            if (page.status === 'published') {
                                                                window.open(page.url, '_blank');
                                                            }
                                                        }}
                                                    />
                                                </span>
                                            </Tooltip>
                                            <Tooltip label="Excluir">
                                                <IconButton
                                                    icon={<FaTrash />}
                                                    aria-label="Excluir"
                                                    bg="red.500"
                                                    color="white"
                                                    _hover={{ bg: 'red.600' }}
                                                    size="sm"
                                                    onClick={() => onDelete(page)}
                                                />
                                            </Tooltip>
                                            {/* Botão para publicar */}
                                            {page.status === 'draft' && (
                                                <Tooltip label="Publicar">
                                                    <IconButton
                                                        icon={<FaArrowRight />}
                                                        aria-label="Publicar"
                                                        bg="brand.button"
                                                        color="text.secondary"
                                                        _hover={{ bg: 'interaction.hover' }}
                                                        size="sm"
                                                        onClick={() => {
                                                            console.log(`Publicando ${page.title}`);
                                                        }}
                                                    />
                                                </Tooltip>
                                            )}
                                        </HStack>
                                    </Td>

                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                )}
            </Box>

            <HStack justify="space-between" w="100%" alignItems="center">
                <Tooltip label="Página anterior">
                    <IconButton
                        icon={<FaArrowLeft />}
                        aria-label="Página anterior"
                        onClick={handlePreviousPage}
                        isDisabled={currentPage === 1}
                        size="sm"
                        bg="brand.button"
                        color="text.secondary"
                        _hover={{ bg: 'interaction.hover' }}
                    />
                </Tooltip>
                <Text>Página {currentPage} de {totalPages}</Text>
                <Tooltip label="Próxima página">
                    <IconButton
                        icon={<FaArrowRight />}
                        aria-label="Próxima página"
                        onClick={handleNextPage}
                        isDisabled={currentPage === totalPages}
                        size="sm"
                        bg="brand.button"
                        color="text.secondary"
                        _hover={{ bg: 'interaction.hover' }}
                    />
                </Tooltip>
            </HStack>
        </VStack>
    );
};

export default PageList;
