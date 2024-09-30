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
import DeletePageModal from '../DeletePageModal';
import LogoutConfirmationModal from '../LogoutConfirmationModal';
import PageCreationModal from '../PageCreationModal';
import { useState, useRef } from 'react';

export default function DashboardMobile({ user }) {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
    const { isOpen: isOpenLogout, onOpen: onOpenLogout, onClose: onCloseLogout } = useDisclosure();
    const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();
    const cancelRef = useRef();
    
    const [pageToDelete, setPageToDelete] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
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
        if (activeStep === 1) {
            const errors = {};
            if (!slug) errors.slug = 'Slug é obrigatório.';
            if (!title) errors.title = 'Título é obrigatório.';
            setErrorMessage(errors);
            return !errors.slug && !errors.title;
        }

        if (activeStep === 2) {
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

    const handleModalClose = () => {
        resetFields();
        onCloseModal();
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
        (activeStep === 1 && (!slug || !title)) ||
        (activeStep === 2 && (!metaTitle || !metaDescription || metaKeywords.length < 5));

    const getDisabledReason = () => {
        if (activeStep === 1) {
            if (!slug) return 'Slug é obrigatório.';
            if (!title) return 'Título é obrigatório.';
        } else if (activeStep === 2) {
            if (!metaTitle) return 'Meta Title é obrigatório.';
            if (!metaDescription) return 'Meta Description é obrigatório.';
            if (metaKeywords.length < 5) return 'Pelo menos 5 palavras-chave são necessárias.';
        }
        return '';
    };

    const getFirstName = (fullName) => {
        return fullName.split(' ')[0];
    };

    const userFirstName = getFirstName(user.name);

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
            <SidebarDrawerMobile isOpen={isOpen} onClose={onClose} handleLogout={onOpenLogout}/>

            {/* Conteúdo do Dashboard Mobile */}
            <Box
                pt={20}
                pb={8}
                minH="100vh"
                bg="brand.background"
                px={4}
            >
                <Container maxW="container.sm">
                    {/* Título da página personalizado com o nome do usuário */}
                    <Heading as="h1" size="xl" color="text.primary" mt={8} mb={8} ml={0} lineHeight="shorter">
                        Bem-vindo, {userFirstName}!
                    </Heading>

                    <Button
                        bg="brand.button"
                        color="text.secondary"
                        borderRadius="full"
                        size="md"
                        _hover={{ bg: 'interaction.hover' }}
                        mb={6}
                        onClick={onOpenModal}
                        width="100%"
                    >
                        Criar Nova Página
                    </Button>

                    <Heading as="h2" size="lg" color="text.primary" ml={0}>
                        Suas Páginas
                    </Heading>
                    {/* Lista de Páginas */}
                    <PageList onDelete={(page) => { setPageToDelete(page); onOpenDelete(); }} />

                    {/* Modais */}
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
                </Container>
            </Box>
        </>
    );
}
