import {
    Box,
    Button,
    HStack,
    Tooltip,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Tag,
    TagLabel,
    TagCloseButton,
    VStack,
    Text,
    Step,
    StepIndicator,
    StepStatus,
    StepSeparator,
    StepNumber,
    SimpleGrid,
    Icon,
    Wrap,
    Stepper
} from '@chakra-ui/react';
import { CheckIcon, ArrowForwardIcon, ArrowBackIcon, InfoOutlineIcon } from '@chakra-ui/icons';

export default function PageCreationModal({
    isOpenModal,
    onCloseModal,
    activeStep,
    handleNext,
    handlePrevious,
    slug,
    title,
    metaTitle,
    metaDescription,
    metaKeywords,
    newKeyword,
    errorMessage,
    setSlug,
    setTitle,
    setMetaTitle,
    setMetaDescription,
    addKeyword,
    removeKeyword,
    setNewKeyword,
    isNextDisabled,
    getDisabledReason,
    router
}) {
    const steps = [
        { title: 'Introdução', description: '' },
        { title: 'Primeira Etapa', description: 'Slug e Título' },
        { title: 'Segunda Etapa', description: 'Meta Tags' },
        { title: 'Terceira Etapa', description: 'Confirmação' }
    ];

    function handleCreatePage() {
        console.log({ slug, title, metaTitle, metaDescription, metaKeywords });
        onCloseModal();

        router.push('/create-page');
        
    }

    return (
        <Modal isOpen={isOpenModal} onClose={onCloseModal} size={['full', 'lg', '4xl']} isCentered>
            <ModalOverlay />
            <ModalContent p={[4, 6]}>
                <ModalHeader>Nova Página</ModalHeader>
                <ModalBody>
                    {/* Stepper ajustado para mais espaçamento entre os steps no desktop */}
                    <Stepper
                        index={activeStep}
                        mb={6}
                        flexDirection={['column', null, 'row']}
                        spacing={8}
                        width="100%"
                        justifyContent="space-between"
                    >
                        {steps.map((_, index) => (
                            <Step key={index} width="100%">
                                <StepIndicator width={['30px', '40px']} height={['30px', '40px']}>
                                    <StepStatus
                                        complete={<Icon as={CheckIcon} color="brand.background" />}
                                        incomplete={<StepNumber />}
                                        active={<StepNumber />}
                                    />
                                </StepIndicator>

                                {/* Linha separadora entre os steps, visível exceto no último */}
                                {index < steps.length - 1 && (
                                    <StepSeparator borderColor="gray.200" />
                                )}
                            </Step>
                        ))}
                    </Stepper>

                    {activeStep === 0 ? (
                        <Box textAlign="center" p={4}>
                            <Text fontSize="lg" mb={4}>
                                🎉 Bem-vindo ao assistente de criação de páginas!
                            </Text>
                            <Text fontSize="md" mb={4}>
                                Você vai passar por algumas etapas simples onde vamos pedir informações importantes para sua página. Ao final, você será direcionado para o editor para personalizar todos os detalhes! 🖊️
                            </Text>
                            <Text fontSize="md">
                                Vamos começar? 🚀
                            </Text>
                        </Box>
                    ) : (
                        <SimpleGrid columns={[1, null, 5]} spacing={10}>
                            <Box gridColumn={['span 1', null, 'span 2']}>
                                <Text mb={4}>
                                    {activeStep === 1 && (
                                        <>
                                            Escolha um <b>slug</b> e um <b>título</b> para sua página.
                                            O <b>slug</b> aparecerá na URL da sua página e ajuda os visitantes a identificar seu conteúdo.
                                            O <b>título</b> será exibido no topo da página e deve ser claro e direto.
                                        </>
                                    )}
                                    {activeStep === 2 && (
                                        <>
                                            As <b>meta tags</b> ajudam os motores de busca como o Google a entender o conteúdo da sua página.
                                            O <b>meta título</b> aparecerá nos resultados de busca, e a <b>meta descrição</b> ajuda a atrair visitantes.
                                            Use palavras-chave relevantes para melhorar o SEO.
                                        </>
                                    )}
                                    {activeStep === 3 && (
                                        <>
                                            Revise as informações antes de criar sua página.
                                            Certifique-se de que o <b>slug</b>, <b>título</b>, <b>meta título</b>, e <b>meta descrição</b> estão corretos para garantir que sua página seja eficaz e fácil de encontrar nos motores de busca.
                                        </>
                                    )}
                                </Text>
                            </Box>

                            <Box display={['none', null, 'block']} gridColumn="span 1" borderRight="1px solid #E0E0E0" height="100%" />

                            <Box gridColumn={['span 1', null, 'span 2']}>
                                {activeStep === 1 && (
                                    <VStack spacing={4}>
                                        <FormControl isInvalid={errorMessage.slug}>
                                            <FormLabel>Slug</FormLabel>
                                            <InputGroup>
                                                <Input value={slug} onChange={(e) => setSlug(e.target.value)} />
                                                <InputRightElement>
                                                    <Tooltip label="O slug aparecerá na URL da página e ajuda a identificar o conteúdo. Exemplo: www.site.com/meu-slug">
                                                        <InfoOutlineIcon cursor="pointer" color="gray.500" />
                                                    </Tooltip>
                                                </InputRightElement>
                                            </InputGroup>
                                            {errorMessage.slug && <Text color="red.500">{errorMessage.slug}</Text>}
                                        </FormControl>

                                        <FormControl isInvalid={errorMessage.title}>
                                            <FormLabel>Título</FormLabel>
                                            <InputGroup>
                                                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                                                <InputRightElement>
                                                    <Tooltip label="O título será exibido no topo da página e deve ser claro e objetivo para atrair seus visitantes.">
                                                        <InfoOutlineIcon cursor="pointer" color="gray.500" />
                                                    </Tooltip>
                                                </InputRightElement>
                                            </InputGroup>
                                            {errorMessage.title && <Text color="red.500">{errorMessage.title}</Text>}
                                        </FormControl>
                                    </VStack>
                                )}

                                {activeStep === 2 && (
                                    <VStack spacing={4}>
                                        <FormControl isInvalid={errorMessage.metaTitle}>
                                            <FormLabel>Meta Título</FormLabel>
                                            <InputGroup>
                                                <Input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
                                                <InputRightElement>
                                                    <Tooltip label="O meta título será exibido nos resultados de busca e deve resumir o conteúdo da página.">
                                                        <InfoOutlineIcon cursor="pointer" color="gray.500" />
                                                    </Tooltip>
                                                </InputRightElement>
                                            </InputGroup>
                                            {errorMessage.metaTitle && <Text color="red.500">{errorMessage.metaTitle}</Text>}
                                        </FormControl>
                                        <FormControl isInvalid={errorMessage.metaDescription}>
                                            <FormLabel>Meta Descrição</FormLabel>
                                            <InputGroup>
                                                <Input value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
                                                <InputRightElement>
                                                    <Tooltip label="A meta descrição aparece nos resultados de busca e deve atrair visitantes ao fornecer um resumo claro e conciso da página.">
                                                        <InfoOutlineIcon cursor="pointer" color="gray.500" />
                                                    </Tooltip>
                                                </InputRightElement>
                                            </InputGroup>
                                            {errorMessage.metaDescription && <Text color="red.500">{errorMessage.metaDescription}</Text>}
                                        </FormControl>
                                        <FormControl isInvalid={errorMessage.metaKeywords}>
                                            <FormLabel>Palavras-chave</FormLabel>
                                            <HStack>
                                                <InputGroup>
                                                    <Input value={newKeyword} onChange={(e) => setNewKeyword(e.target.value)} />
                                                    <InputRightElement>
                                                        <Tooltip label="Palavras-chave ajudam a melhorar o SEO e devem ser relevantes ao conteúdo da página.">
                                                            <InfoOutlineIcon cursor="pointer" color="gray.500" />
                                                        </Tooltip>
                                                    </InputRightElement>
                                                </InputGroup>
                                                <Button onClick={addKeyword} fontSize="sm" bg="brand.button" color="text.secondary" _hover={{ bg: 'interaction.hover' }}>Adicionar</Button>
                                            </HStack>
                                            {errorMessage.duplicateKeyword && <Text color="red.500">{errorMessage.duplicateKeyword}</Text>}
                                            <Wrap mt={2} spacing={2}>
                                                {metaKeywords.map((keyword, index) => (
                                                    <Tag key={index} size="md" borderRadius="full" variant="solid" colorScheme="blue">
                                                        <TagLabel>{keyword}</TagLabel>
                                                        <TagCloseButton onClick={() => removeKeyword(index)} />
                                                    </Tag>
                                                ))}
                                            </Wrap>
                                            {errorMessage.metaKeywords && <Text color="red.500">{errorMessage.metaKeywords}</Text>}
                                        </FormControl>
                                    </VStack>
                                )}

                                {activeStep === 3 && (
                                    <VStack spacing={4} align="start">
                                        <Box>
                                            <Text color="gray.500">Slug:</Text>
                                            <Text>{slug}</Text>
                                        </Box>
                                        <Box>
                                            <Text color="gray.500">Título:</Text>
                                            <Text>{title}</Text>
                                        </Box>
                                        <Box>
                                            <Text color="gray.500">Meta Título:</Text>
                                            <Text>{metaTitle}</Text>
                                        </Box>
                                        <Box>
                                            <Text color="gray.500">Meta Descrição:</Text>
                                            <Text>{metaDescription}</Text>
                                        </Box>
                                        <Box>
                                            <Text color="gray.500">Palavras-chave:</Text>
                                            <Wrap mt={2} spacing={2}>
                                                {metaKeywords.map((keyword, index) => (
                                                    <Tag key={index} size="md" borderRadius="full" variant="solid" colorScheme="blue">
                                                        <TagLabel>{keyword}</TagLabel>
                                                    </Tag>
                                                ))}
                                            </Wrap>
                                        </Box>
                                    </VStack>
                                )}
                            </Box>
                        </SimpleGrid>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button variant="ghost" onClick={onCloseModal} mr={3}>Cancelar</Button>
                    {activeStep !== 3 ? (
                        <Button
                            bg="brand.button"
                            color="text.secondary"
                            _hover={{ bg: 'interaction.hover' }}
                            onClick={handlePrevious}
                            isDisabled={activeStep === 0}
                            leftIcon={<ArrowBackIcon />}
                        >
                            Anterior
                        </Button>
                    ) : (
                        <Button
                            bg="brand.button"
                            color="text.secondary"
                            _hover={{ bg: 'interaction.hover' }}
                            onClick={handleCreatePage}
                            rightIcon={<CheckIcon />}
                        >
                            Confirmar
                        </Button>
                    )}
                    {activeStep !== 3 && (
                        <Tooltip label={getDisabledReason()} isDisabled={!isNextDisabled}>
                            <Box>
                                <Button
                                    bg="brand.button"
                                    color="text.secondary"
                                    _hover={{ bg: 'interaction.hover' }}
                                    onClick={handleNext}
                                    ml={3}
                                    isDisabled={activeStep !== 0 && isNextDisabled}
                                    rightIcon={<ArrowForwardIcon />}
                                >
                                    Próximo
                                </Button>
                            </Box>
                        </Tooltip>
                    )}
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
