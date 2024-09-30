import { 
    AlertDialog, 
    AlertDialogBody, 
    AlertDialogContent, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogOverlay, 
    Button 
} from '@chakra-ui/react';

export default function LogoutConfirmationModal({ isOpenLogout, cancelRef, onCloseLogout, router }) {
    return (
        <AlertDialog
            isOpen={isOpenLogout}
            leastDestructiveRef={cancelRef}
            onClose={onCloseLogout}
        >
            <AlertDialogOverlay>
                <AlertDialogContent
                    maxW={['95%', '400px']} // Responsivo, ocupa 95% da tela no mobile, 400px em telas maiores
                    p={4} // Padding para dar um espaçamento interno agradável
                >
                    <AlertDialogHeader fontSize={['md', 'lg']} fontWeight="bold">
                        Sair
                    </AlertDialogHeader>

                    <AlertDialogBody fontSize={['sm', 'md']}>
                        Tem certeza que deseja sair?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onCloseLogout}>
                            Cancelar
                        </Button>
                        <Button 
                            colorScheme="red"
                            onClick={() => {
                                localStorage.removeItem('authToken');
                                router.push('/login');
                            }}
                            ml={3}
                        >
                            Sair
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}
