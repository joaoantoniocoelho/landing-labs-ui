import {
    Box,
    Flex,
    Heading,
    Button,
    HStack,
    useDisclosure,
    Tooltip,
    useSteps,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import PageList from '../UserPagesList';
import Sidebar from './SidebarDesktop';
import DeletePageModal from '../DeletePageModal';
import LogoutConfirmationModal from '../LogoutConfirmationModal';
import PageCreationModal from '../PageCreationModal';

export default function DashboardDesktop({ user }) {
    const router = useRouter();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [pageToDelete, setPageToDelete] = useState(null);
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
    const { isOpen: isOpenLogout, onOpen: onOpenLogout, onClose: onCloseLogout } = useDisclosure();
    const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();
    const cancelRef = useRef();

    // Stepper config
    const steps = [
        { title: 'Primeiro', description: 'Slug e Título' },
        { title: 'Segundo', description: 'Meta Tags' },
        { title: 'Terceiro', description: 'Confirmação' }
    ];
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    });

    const [slug, setSlug] = useState('');
    const [title, setTitle] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [metaKeywords, setMetaKeywords] = useState([]);
    const [newKeyword, setNewKeyword] = useState('');
    const [errorMessage, setErrorMessage] = useState({
        slug: '',
        title: '',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
        duplicateKeyword: ''
    });

    const addKeyword = () => {
        if (newKeyword.trim()) {
            if (metaKeywords.includes(newKeyword)) {
                setErrorMessage((prev) => ({
                    ...prev,
                    duplicateKeyword: 'Esta palavra-chave já foi adicionada.'
                }));
            } else {
                setMetaKeywords([...metaKeywords, newKeyword]);
                setNewKeyword('');
                setErrorMessage((prev) => ({
                    ...prev,
                    duplicateKeyword: ''
                }));
            }
        }
    };

    const removeKeyword = (index) => {
        setMetaKeywords(metaKeywords.filter((_, i) => i !== index));
    };

    const validateStep = () => {
        if (activeStep === 0) {
            const errors = {};
            if (!slug) errors.slug = 'Slug é obrigatório.';
            if (!title) errors.title = 'Título é obrigatório.';
            setErrorMessage(errors);
            return !errors.slug && !errors.title;
        }

        if (activeStep === 1) {
            const errors = {};
            if (!metaTitle) errors.metaTitle = 'Meta Title é obrigatório.';
            if (!metaDescription) errors.metaDescription = 'Meta Description é obrigatório.';
            if (metaKeywords.length < 5) errors.metaKeywords = 'Adicione pelo menos 5 palavras-chave.';
            setErrorMessage(errors);
            return !errors.metaTitle && !errors.metaDescription && !errors.metaKeywords;
        }

        return true;
    };

    const handleNext = () => {
        if (validateStep()) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const handlePrevious = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handleCreateNewPage = () => {
        onOpenModal();
    };

    const resetFields = () => {
        setSlug('');
        setTitle('');
        setMetaTitle('');
        setMetaDescription('');
        setMetaKeywords([]);
        setNewKeyword('');
        setActiveStep(0);
    };

    const isNextDisabled =
        (activeStep === 0 && (!slug || !title)) ||
        (activeStep === 1 && (!metaTitle || !metaDescription || metaKeywords.length < 5));

    const getDisabledReason = () => {
        if (activeStep === 0) {
            if (!slug) return 'Slug é obrigatório.';
            if (!title) return 'Título é obrigatório.';
        } else if (activeStep === 1) {
            if (!metaTitle) return 'Meta Title é obrigatório.';
            if (!metaDescription) return 'Meta Description é obrigatório.';
            if (metaKeywords.length < 5) return 'Pelo menos 5 palavras-chave são necessárias.';
        }
        return '';
    };

    const handleModalClose = () => {
        resetFields();
        onCloseModal();
    };

    return (
        <Flex minHeight="100vh">
            <Sidebar
                isSidebarCollapsed={isSidebarCollapsed}
                toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                handleLogout={onOpenLogout}
            />

            <Box
                width={{
                    base: '100%',
                    md: isSidebarCollapsed ? 'calc(100% - 80px)' : 'calc(100% - 15%)',
                }}
                transition="width 0.3s ease-in-out"
                bg="brand.background"
                p={8}
            >
                <Heading as="h1" size="xl" color="text.primary" mb={8} ml={0} lineHeight="shorter">
                    Bem-vindo,<br />
                    {user.name}!
                </Heading>

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

                <PageList onDelete={(page) => { setPageToDelete(page); onOpenDelete(); }} />

                <PageCreationModal 
                    isOpenModal={isOpenModal} 
                    onCloseModal={handleModalClose}
                    activeStep={activeStep}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    slug={slug}
                    setSlug={setSlug}
                    title={title}
                    setTitle={setTitle}
                    metaTitle={metaTitle}
                    setMetaTitle={setMetaTitle}
                    metaDescription={metaDescription}
                    setMetaDescription={setMetaDescription}
                    metaKeywords={metaKeywords}
                    newKeyword={newKeyword}
                    setNewKeyword={setNewKeyword}
                    addKeyword={addKeyword}
                    removeKeyword={removeKeyword}
                    errorMessage={errorMessage}
                    isNextDisabled={isNextDisabled}
                    getDisabledReason={getDisabledReason}
                />

                <DeletePageModal isOpenDelete={isOpenDelete} cancelRef={cancelRef} onCloseDelete={onCloseDelete} pageToDelete={pageToDelete} />

                <LogoutConfirmationModal isOpenLogout={isOpenLogout} cancelRef={cancelRef} onCloseLogout={onCloseLogout} router={router} />
            </Box>
        </Flex>
    );
}
