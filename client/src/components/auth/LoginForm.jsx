import {Input, Form, Button} from '@heroui/react'
import {useState} from 'react'

export default function LoginForm(){

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)  // show spinner while registering

    function handleSubmit(e) {
        e.preventDefault() //stops refreshing off page
        console.log(username, email, password)
    }

    return(
        <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            <div className="flex justify-center flex-col gap-4 w-full">
                <div className="flex flex-col gap-1">
                    <label className="text-foreground" htmlFor="input-type-username">Username</label>
                    <Input 
                        id="input-type-username" 
                        placeholder="PeterSmith32" 
                        type="text" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="input-type-password">Password</label>
                    <Input 
                        id="input-type-password" 
                        placeholder="••••••••" 
                        type="password" />
                </div>
            </div>

             <div className="flex justify-center w-full">
                <Button
                    type="submit"
                    color="primary"
                    className="w-30"
                    isLoading={isLoading}
                >
                    Log in
                </Button>
            </div>   
        </Form>
    )
}
