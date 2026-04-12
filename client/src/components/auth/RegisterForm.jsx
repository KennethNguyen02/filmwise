import {Form, Input, Button} from '@heroui/react'
import {useState} from 'react'


export default function RegisterForm(){

    const[username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)  // show spinner while registering
    const [error, setError] = useState("")              // show error message if something goes wrong

    const isPasswordInvalid = password.length > 0 && 
    !/^(?=.*[0-9])(?=.*[A-Z]).{8,}$/.test(password)

     const isConfirmPasswordInvalid = !confirmPassword.length > 0 && 
     confirmPassword !== password


    function handleSubmit(e) {
        e.preventDefault() //stops refreshing off page
        console.log(username, email, password)
    }


    return( 
        <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <div className="flex flex-col gap-4 w-full justify-center">
                <div className="flex flex-col gap-1">
                    <label htmlFor="input-username">Username</label> 
                    <Input
                        isRequired 
                        id="input-username" 
                        placeholder="Kjetil123" 
                        type="text" 
                        value={username} 
                        onValueChange={setUsername} 
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="input-type-email">Email</label>
                    <Input
                        isRequired  
                        id="input-type-email" 
                        placeholder="kjetil@example.com" 
                        type="email" value={email} 
                        onValueChange={setEmail}
                    />
                </div>
            
                <div className="flex flex-col gap-1">
                    <label htmlFor="input-type-password">Password</label>
                    <Input
                        isRequired 
                        id="input-password"  
                        type="password" 
                        value={password} 
                        onValueChange={setPassword}
                        isInvalid={isPasswordInvalid} 
                        errorMessage="Min 8 characters, 1 number and 1 capital letter"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="input-confirm-password">Confirm Password</label>
                    <Input
                        isRequired  
                        id="input-confirm-password" 
                        type="password" 
                        value={confirmPassword} 
                        onValueChange={setConfirmPassword}
                        isInvalid = {isConfirmPasswordInvalid}
                        errorMessage="Passwords did not match"
                    />
                </div>
            </div>

            <div className="flex justify-center w-full">
                <Button
                    type="submit"
                    color="primary"
                    className="w-30"
                    isLoading={isLoading}
                    isDisabled={isPasswordInvalid || isConfirmPasswordInvalid}
                >
                    Register
                </Button>
            </div>   
        </Form>
    )
}