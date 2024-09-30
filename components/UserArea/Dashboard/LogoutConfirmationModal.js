import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react';

export default function LogoutConfirmationModal({ isOpenLogout, cancelRef, onCloseLogout, router }) {
    return (
        <AlertDialog isOpen={isOpenLogout} leastDestructiveRef={cancelRef} onClose={onCloseLogout}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Sair
                    </AlertDialogHeader>
                    <AlertDialogBody>Tem certeza que deseja sair?</AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onCloseLogout}>Cancelar</Button>
                        <Button colorScheme="red" onClick={() => { localStorage.removeItem('authToken'); router.push('/login'); }} ml={3}>Sair</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}