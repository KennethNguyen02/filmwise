
import {Modal, ModalContent, ModalBody,  ModalHeader} from '@heroui/react';
import {Tabs, Tab} from '@heroui/react';

import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';





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
                                <LoginForm/>
                            </Tab>


                            <Tab key="signup" title="Sign up" >
                                <RegisterForm/>
                            </Tab>
                        </Tabs>

                    </div>
               </ModalBody>
            </ModalContent>
        </Modal>
    )
}