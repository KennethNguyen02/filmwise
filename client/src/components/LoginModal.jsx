
import {Modal, ModalContent, ModalFooter, ModalHeader, Button} from '@heroui/react'

export default function LoginModal({isOpen, onOpenChange}){
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <ModalHeader>
                </ModalHeader>
                <ModalFooter>
                    <Button> </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}