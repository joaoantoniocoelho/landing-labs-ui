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
    Tag,
    TagLabel,
    TagCloseButton,
    VStack,
    Text,
    Step,
    StepIndicator,
    StepStatus,
    StepTitle,
    StepDescription,
    Stepper,
    StepSeparator,
    StepNumber,
    SimpleGrid,
    Icon,
    Wrap
} from '@chakra-ui/react';
import { CheckIcon, ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

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
}) {
    const steps = [
        { title: 'Primeiro', description: 'Slug e Título' },
        { title: 'Segundo', description: 'Meta Tags' },
        { title: 'Terceiro', description: 'Confirmação' }
    ];

    function handleCreatePage() {
        console.log({ slug, title, metaTitle, metaDescription, metaKeywords });
        onCloseModal();
    }

    return (
        <Modal isOpen={isOpenModal} onClose={onCloseModal} size={["full", "lg", "4xl"]} isCentered>
            <ModalOverlay />
            <ModalContent p={[4, 6]}>
                <ModalHeader>Nova Página</ModalHeader>
                <ModalBody>
                    <Stepper index={activeStep} mb={6} flexDirection={["column", null, "row"]} spacing={[4, null, 8]}>
                        {steps.map((step, index) => (
                            <Step key={index} width="full">
                                <StepIndicator width={["30px", "40px"]} height={["30px", "40px"]}>
                                    <StepStatus
                                        complete={<Icon as={CheckIcon} color="brand.background" />}
                                        incomplete={<StepNumber />}
                                        active={<StepNumber />}
                                    />
                                </StepIndicator>

                                <Box flexShrink="0" display={["none", "block"]}>
                                    <StepTitle fontSize={["sm", "md"]}>{step.title}</StepTitle>
                                    <StepDescription fontSize={["xs", "sm"]}>{step.description}</StepDescription>
                                </Box>

                                <StepSeparator display={index === steps.length - 1 ? "none" : "block"} />
                            </Step>
                        ))}
                    </Stepper>

                    <SimpleGrid columns={[1, null, 5]} spacing={10}>
                        <Box gridColumn={["span 1", null, "span 2"]}>
                            <Text mb={4}>
                                {activeStep === 0 && (
                                    <>
                                        Escolha um <b>slug</b> e um <b>título</b> para sua página.
                                        O <b>slug</b> aparecerá na URL da sua página e ajuda os visitantes a identificar seu conteúdo.
                                        O <b>título</b> será exibido no topo da página e deve ser claro e direto.
                                    </>
                                )}
                                {activeStep === 1 && (
                                    <>
                                        As <b>meta tags</b> ajudam os motores de busca como o Google a entender o conteúdo da sua página.
                                        O <b>meta título</b> aparecerá nos resultados de busca, e a <b>meta descrição</b> ajuda a atrair visitantes.
                                        Use palavras-chave relevantes para melhorar o SEO.
                                    </>
                                )}
                                {activeStep === 2 && (
                                    <>
                                        Revise as informações antes de criar sua página.
                                        Certifique-se de que o <b>slug</b>, <b>título</b>, <b>meta título</b>, e <b>meta descrição</b> estão corretos para garantir que sua página seja eficaz e fácil de encontrar nos motores de busca.
                                    </>
                                )}
                            </Text>
                        </Box>

                        <Box display={["none", null, "block"]} gridColumn="span 1" borderRight="1px solid #E0E0E0" height="100%" />

                        <Box gridColumn={["span 1", null, "span 2"]}>
                            {activeStep === 0 && (
                                <VStack spacing={4}>
                                    <FormControl isInvalid={errorMessage.slug}>
                                        <FormLabel>Slug</FormLabel>
                                        <Input value={slug} onChange={(e) => setSlug(e.target.value)} />
                                        {errorMessage.slug && <Text color="red.500">{errorMessage.slug}</Text>}
                                    </FormControl>
                                    <FormControl isInvalid={errorMessage.title}>
                                        <FormLabel>Título</FormLabel>
                                        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                                        {errorMessage.title && <Text color="red.500">{errorMessage.title}</Text>}
                                    </FormControl>
                                </VStack>
                            )}

                            {activeStep === 1 && (
                                <VStack spacing={4}>
                                    <FormControl isInvalid={errorMessage.metaTitle}>
                                        <FormLabel>Meta Título</FormLabel>
                                        <Input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
                                        {errorMessage.metaTitle && <Text color="red.500">{errorMessage.metaTitle}</Text>}
                                    </FormControl>
                                    <FormControl isInvalid={errorMessage.metaDescription}>
                                        <FormLabel>Meta Descrição</FormLabel>
                                        <Input value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />
                                        {errorMessage.metaDescription && <Text color="red.500">{errorMessage.metaDescription}</Text>}
                                    </FormControl>
                                    <FormControl isInvalid={errorMessage.metaKeywords}>
                                        <FormLabel>Palavras-chave</FormLabel>
                                        <HStack spacing={2}>
                                            <Input value={newKeyword} onChange={(e) => setNewKeyword(e.target.value)} />
                                            <Button onClick={addKeyword}>Adicionar</Button>
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

                            {activeStep === 2 && (
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
                </ModalBody>
                <ModalFooter>
                    <Button variant="ghost" onClick={onCloseModal} mr={3}>Cancelar</Button>
                    {activeStep !== 2 ? (
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
                            onClick={ handleCreatePage }
                            rightIcon={<CheckIcon />}
                        >
                            Confirmar
                        </Button>
                    )}
                    {activeStep !== 2 && (
                        <Tooltip label={getDisabledReason()} isDisabled={!isNextDisabled}>
                            <Box>
                                <Button
                                    bg="brand.button"
                                    color="text.secondary"
                                    _hover={{ bg: 'interaction.hover' }}
                                    onClick={handleNext}
                                    ml={3}
                                    isDisabled={isNextDisabled}
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
