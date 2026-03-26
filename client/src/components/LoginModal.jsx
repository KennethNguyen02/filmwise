
import {Modal, ModalContent, ModalFooter, ModalBody,  ModalHeader, Button} from '@heroui/react';
import {Tabs, Tab, Input} from '@heroui/react';
export default function LoginModal({isOpen, onOpenChange}){
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent>
                <ModalHeader>
                   

               </ModalHeader>
               <ModalBody>
                    <div className = "flex justify-center flex-col">
                        <Tabs fullWidth color="primary">
                            <Tab key="login" title="Log in" >
                                <div className="flex flex-col gap-2">
                                    <label className="text-foreground" htmlFor="input-type-username">Username</label>
                                    <Input id="input-type-username" placeholder="PeterSmith32" type="text" />

                                    <label htmlFor="input-type-password">Password</label>
                                    <Input id="input-type-password" placeholder="••••••••" type="password" />
                                </div>
                            </Tab>

                            <Tab key="signup" title="Sign up" >
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="input-type-password">Password</label>
                                    <Input id="input-type-password" placeholder="••••••••" type="password" />
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
               </ModalBody>
                <ModalFooter>
                    <Button> </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}