import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react';

export default function DeletePageModal({ isOpenDelete, cancelRef, onCloseDelete, pageToDelete }) {
    function deletePage() {
        console.log('Deletando página', pageToDelete);
        onCloseDelete();
    }

    return (
        <AlertDialog isOpen={isOpenDelete} leastDestructiveRef={cancelRef} onClose={onCloseDelete}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Excluir Página
                    </AlertDialogHeader>
                    <AlertDialogBody>
                    Tem certeza que deseja excluir a página &quot;{pageToDelete?.title}&quot;? Esta ação não pode ser desfeita.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onCloseDelete}>
                        Cancelar
                        </Button>
                        <Button colorScheme="red" onClick={ deletePage } ml={3}>
                        Excluir
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}