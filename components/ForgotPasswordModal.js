import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react";
import { forgotPassword } from '../service/authService'; 
import { useCustomToast } from '../hooks/useCustomToast'; 
import { isValidEmail } from '@/utils/emailUtils';

function ForgotPasswordModal({ isOpen, onClose }) {
    const initialRef = React.useRef(null);
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const { showSuccessToast, showErrorToast } = useCustomToast();

    const isFormValid = email && !emailError;

    const handleForgotPassword = async () => {
        setIsLoading(true);

        try {
            const response = await forgotPassword(email);

            showSuccessToast('Sucesso', response.message);
            setEmail(''); 
        } catch (error) {
            showErrorToast('Erro', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    
        if (value && !isValidEmail(value)) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }
      };
    

    return (
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent maxW={{ base: "90%", sm: "80%", md: "40%", lg: "30%" }}>
                <ModalHeader>Recuperar Senha</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            ref={initialRef}
                            placeholder='Digite seu email'
                            value={email}
                            onChange={handleEmailChange}
                            focusBorderColor="brand.primary"
                        />
                        <Text 
                            color="red.500" 
                            fontSize="sm" 
                            mt={2} 
                            visibility={emailError ? "visible" : "hidden"} // Espaço reservado mesmo quando não há erro
                            height="20px" // Altura fixa para manter o espaço
                        >
                            Email inválido
                        </Text>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button
                        mr={3}
                        onClick={handleForgotPassword}
                        isLoading={isLoading}
                        isDisabled={!isFormValid}
                        color="text.secondary"
                        bg="brand.primary"
                        _hover={{ bg: 'interaction.greenHover' }}
                    >
                        Enviar
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ForgotPasswordModal;
