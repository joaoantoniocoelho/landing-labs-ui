import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
} from '@chakra-ui/react';
  
export default function FAQ() {
    const faqs = [
        {
            question: 'Como o Page Express funciona?',
            answer: 'O Page Express permite que você crie um site profissional de forma rápida e fácil. Você pode personalizar o conteúdo do seu site (textos, imagens, cores) usando um editor intuitivo. Após a criação, seu site estará online em poucos minutos, sem necessidade de conhecimento técnico.',
        },
        {
            question: 'Eu preciso de um subdomínio personalizado?',
            answer: 'Não é necessário! Usamos uma estrutura de subdiretórios, como pageexpress.io/seunome, para facilitar e otimizar o SEO do seu site. Isso ajuda a consolidar a autoridade do domínio principal e melhora o ranqueamento nos mecanismos de busca. Além disso, não há complicações com a configuração de subdomínios.',
        },
        {
            question: 'Posso usar meu próprio domínio?',
            answer: 'Sim! Oferecemos a opção de mapear um domínio próprio para seu site, como seunegocio.com. Dessa forma, seus clientes poderão acessar o site diretamente com o seu domínio personalizado.',
        },
        {
            question: 'Meu site será otimizado para SEO?',
            answer: 'Sim! Todos os sites criados pelo Page Express são otimizados para motores de busca. Isso inclui meta tags personalizadas, URLs amigáveis e dados estruturados para ajudar seu negócio a ser encontrado online de forma eficaz.',
        },
        {
            question: 'Qual o custo para criar meu site?',
            answer: 'O custo para criar seu site no Page Express é de R$99, uma taxa única que inclui todas as funcionalidades necessárias para ter seu site online e otimizado.',
        },
    ];
  
    return (
        <Box id="faq" maxW="container.lg" py={10} px={8}>
            <Heading as="h2" size="xl" textAlign="center" color="text.primary" mb={8}>
          Perguntas Frequentes
            </Heading>
  
            <Accordion allowToggle>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index}>
                        <AccordionButton>
                            <Box flex="1" textAlign="left" fontWeight="bold" color="text.primary">
                                {faq.question}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} color="text.primary">
                            {faq.answer}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
}
  